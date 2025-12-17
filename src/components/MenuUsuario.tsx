import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "@/lib/api-client";
import { useCart } from "@/context/CartContext";

interface UserMenuProps {
    children: ReactNode;
    usuario: any;
    setUsuario: (usuario: any) => void;
}

interface LoginForm {
    email: string;
    password: string;
}

interface RegisterForm {
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    confirmPassword: string;
    telefono: string;
}

interface AuthResponse {
    usuario: {
        idUsuario: number;
        nombre: string;
        apellido: string;
        email: string;
        telefono: string;
    };
    token: string;
    expiresIn: number;
}

export const MenuUsuario = ({ children, usuario, setUsuario }: UserMenuProps) => {
    const { loadCart } = useCart();
    const navigate = useNavigate();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' });
    const [registerForm, setRegisterForm] = useState<RegisterForm>({
        nombre: '',
        apellido: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefono: ''
    });
    const [error, setError] = useState<string>('');
    const [fieldErrors, setFieldErrors] = useState<{ [key: string]: string }>({});
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);

    const handleCerrarSesion = async () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('usuario');
        localStorage.removeItem('cart'); // Limpiar carrito local
        setUsuario(null);
        setIsPopoverOpen(false);
        await loadCart(); // Limpiar carrito en contexto
        window.location.reload();
    };

    const handleOpenDialog = (tab: 'login' | 'register') => {
        setActiveTab(tab);
        setIsDialogOpen(true);
        setIsPopoverOpen(false);
        setError('');
        setFieldErrors({});
    };

    const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
        setError('');
        setFieldErrors({});
    };

    const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
        setError('');
        setFieldErrors({});
    };

    const validateRegisterForm = (): boolean => {
        if (registerForm.password !== registerForm.confirmPassword) {
            setError('Las contraseñas no coinciden');
            return false;
        }
        if (registerForm.password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres');
            return false;
        }
        if (!/^[9][0-9]{8}$/.test(registerForm.telefono)) {
            setError('El teléfono debe comenzar con 9 y tener 9 dígitos');
            return false;
        }
        return true;
    };

    const handleLoginSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setFieldErrors({});

        try {
            const response = await apiClient.post<AuthResponse>('/api/auth/login', loginForm);
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
            setUsuario(response.data.usuario);
            await loadCart(); // Cargar carrito del usuario
            setIsDialogOpen(false);
            setIsPopoverOpen(false);
        } catch (err: any) {
            if (err.response?.data?.errors) {
                setFieldErrors(err.response.data.errors);
                setError(err.response.data.message || 'Error de validación en los campos');
            } else if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError('Error al iniciar sesión. Verifica tus credenciales.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleRegisterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateRegisterForm()) return;

        setLoading(true);
        setError('');
        setFieldErrors({});

        try {
            const requestData = {
                nombre: registerForm.nombre,
                apellido: registerForm.apellido,
                email: registerForm.email,
                password: registerForm.password,
                telefono: registerForm.telefono
            };

            const response = await apiClient.post<AuthResponse>('/api/auth/registro', requestData);
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
            await loadCart(); // Cargar carrito del usuario
            setUsuario(response.data.usuario);
            setIsDialogOpen(false);
            setIsPopoverOpen(false);
        } catch (err: any) {
            if (err.response?.data?.errors) {
                setFieldErrors(err.response.data.errors);
                setError(err.response.data.message || 'Error de validación en los campos');
            } else if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError('Error al crear la cuenta. Intenta nuevamente.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                <PopoverTrigger asChild>
                    {children}
                </PopoverTrigger>
                <PopoverContent className="w-[340px] p-8 bg-white shadow-2xl border-none relative mt-2 rounded-sm" align="end" sideOffset={10}>
                    {/* Triangle Arrow */}
                    <div className="absolute -top-2 right-[18px] w-5 h-5 bg-white transform rotate-45 shadow-[-2px_-2px_5px_rgba(0,0,0,0.03)]" />

                    {usuario ? (
                        // Usuario logueado - mostrar información y opciones
                        <div className="flex flex-col gap-4 text-center relative z-10 bg-white">
                            <div className="border-b pb-4">
                                <h3 className="text-lg font-semibold text-black">
                                    {usuario.nombre} {usuario.apellido}
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">{usuario.email}</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Button 
                                    variant="outline" 
                                    className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider rounded-sm">
                                    Mi perfil
                                </Button>

                                <Button 
                                    variant="outline" 
                                    className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider rounded-sm">
                                    Mis pedidos
                                </Button>

                                <Button 
                                    onClick={handleCerrarSesion}
                                    variant="outline" 
                                    className="w-full justify-center font-bold text-[11px] h-[42px] border-red-500 text-red-500 hover:bg-red-50 uppercase tracking-wider rounded-sm">
                                    Cerrar sesión
                                </Button>
                            </div>
                        </div>
                    ) : (
                        // Usuario no logueado - mostrar opciones de login/registro
                        <div className="flex flex-col gap-3 text-center relative z-10 bg-white">
                            <h3 className="text-[15px] font-normal mb-2 text-black tracking-wide">Escoja una opción para entrar</h3>

                            <Button 
                                onClick={() => handleOpenDialog('register')}
                                variant="outline" 
                                className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider rounded-sm">
                                Recibir código de acceso por e-mail
                            </Button>

                            <Button 
                                onClick={() => handleOpenDialog('login')}
                                variant="outline" 
                                className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider rounded-sm">
                                Entrar con e-mail y contraseña
                            </Button>

                            <Button 
                                variant="outline" 
                                disabled
                                className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider flex items-center gap-3 rounded-sm opacity-60 cursor-not-allowed">
                                <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                </svg>
                                Entrar con Google
                            </Button>

                            <Button 
                                variant="outline" 
                                disabled
                                className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider flex items-center gap-3 rounded-sm opacity-60 cursor-not-allowed">
                                <svg className="w-4 h-4 text-[#1877F2] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.84c0-2.71 1.482-4.668 4.166-4.668 1.287 0 2.643.23 2.643.23v2.892h-1.494c-1.344 0-1.553.834-1.553 1.69v1.696h3.259l-1.035 3.667h-2.224v7.98h-3.762z" />
                                </svg>
                                Entrar con Facebook
                            </Button>
                        </div>
                    )}
                </PopoverContent>
            </Popover>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="sm:max-w-md" aria-describedby={undefined}>
                    <DialogHeader>
                        <DialogTitle className="text-center text-xl">
                            {activeTab === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta'}
                        </DialogTitle>
                    </DialogHeader>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    {activeTab === 'login' ? (
                        <form onSubmit={handleLoginSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    name="email"
                                    value={loginForm.email}
                                    onChange={handleLoginChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                    placeholder="E-mail"
                                />
                            </div>

                            <div className="space-y-2 relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={loginForm.password}
                                    onChange={handleLoginChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                    placeholder="Contraseña"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Iniciando sesión...' : 'INICIAR SESIÓN'}
                            </button>

                            <div className="text-center text-sm text-gray-600">
                                ¿No tienes cuenta?{' '}
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('register')}
                                    className="text-black font-semibold hover:underline"
                                >
                                    Crear cuenta
                                </button>
                            </div>
                        </form>
                    ) : (
                        <form onSubmit={handleRegisterSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={registerForm.nombre}
                                        onChange={handleRegisterChange}
                                        required
                                        className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all w-full ${
                                            fieldErrors.nombre ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Nombre"
                                    />
                                    {fieldErrors.nombre && (
                                        <p className="text-red-500 text-xs mt-1">{fieldErrors.nombre}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="apellido"
                                        value={registerForm.apellido}
                                        onChange={handleRegisterChange}
                                        required
                                        className={`px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all w-full ${
                                            fieldErrors.apellido ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        placeholder="Apellido"
                                    />
                                    {fieldErrors.apellido && (
                                        <p className="text-red-500 text-xs mt-1">{fieldErrors.apellido}</p>
                                    )}
                                </div>
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    value={registerForm.email}
                                    onChange={handleRegisterChange}
                                    required
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                                        fieldErrors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="E-mail"
                                />
                                {fieldErrors.email && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={registerForm.telefono}
                                    onChange={handleRegisterChange}
                                    required
                                    pattern="[9][0-9]{8}"
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                                        fieldErrors.telefono ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Teléfono (9 dígitos)"
                                />
                                {fieldErrors.telefono && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.telefono}</p>
                                )}
                            </div>

                            <div className="relative">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={registerForm.password}
                                    onChange={handleRegisterChange}
                                    required
                                    minLength={6}
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all ${
                                        fieldErrors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Contraseña (letras y números, mín. 6)"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? '👁️' : '👁️‍🗨️'}
                                </button>
                                {fieldErrors.password && (
                                    <p className="text-red-500 text-xs mt-1">{fieldErrors.password}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={registerForm.confirmPassword}
                                    onChange={handleRegisterChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                                    placeholder="Confirmar contraseña"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? 'Creando cuenta...' : 'CREAR CUENTA'}
                            </button>

                            <div className="text-center text-sm text-gray-600">
                                ¿Ya tienes cuenta?{' '}
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('login')}
                                    className="text-black font-semibold hover:underline"
                                >
                                    Iniciar sesión
                                </button>
                            </div>
                        </form>
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};
