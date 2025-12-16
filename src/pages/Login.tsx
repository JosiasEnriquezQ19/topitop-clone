import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Encabezado } from '../components/Encabezado';
import { PiePagina } from '../components/PiePagina';
import apiClient from '../lib/api-client';
import { Facebook } from 'lucide-react';

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

const Login = () => {
  const navigate = useNavigate();
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
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    setError('');
  };

  const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    setError('');
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

    try {
      const response = await apiClient.post<AuthResponse>('/api/auth/login', loginForm);
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
      navigate('/');
    } catch (err: any) {
      if (err.response?.data?.message) {
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
      navigate('/');
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Error al crear la cuenta. Intenta nuevamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Encabezado />
      
      <main className="flex-1 flex items-center justify-center py-12 px-4 mt-16">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            {/* Header */}
            <div className="bg-white px-6 py-8 text-center border-b">
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                Escoja una opción para entrar
              </h1>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              {/* Tabs */}
              <div className="space-y-3">
                {/* Código de acceso button */}
                <button
                  onClick={() => setActiveTab('register')}
                  className={`w-full py-3.5 px-4 rounded-lg font-medium transition-all border-2 ${
                    activeTab === 'register'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  RECIBIR CÓDIGO DE ACCESO POR E-MAIL
                </button>

                {/* Login con email y contraseña button */}
                <button
                  onClick={() => setActiveTab('login')}
                  className={`w-full py-3.5 px-4 rounded-lg font-medium transition-all border-2 ${
                    activeTab === 'login'
                      ? 'bg-black text-white border-black'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                  }`}
                >
                  ENTRAR CON E-MAIL Y CONTRASEÑA
                </button>

                {/* Google button (solo vista) */}
                <button
                  disabled
                  className="w-full py-3.5 px-4 rounded-lg font-medium border-2 border-gray-300 bg-white text-gray-700 hover:border-gray-400 transition-all flex items-center justify-center gap-2 opacity-70 cursor-not-allowed"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Próximamente con Google
                </button>

                {/* Facebook button (solo vista) */}
                <button
                  disabled
                  className="w-full py-3.5 px-4 rounded-lg font-medium border-2 border-gray-300 bg-white text-gray-700 hover:border-gray-400 transition-all flex items-center justify-center gap-2 opacity-70 cursor-not-allowed"
                >
                  <Facebook className="w-5 h-5 text-blue-600" />
                  ENTRAR CON FACEBOOK
                </button>
              </div>

              {/* Form Area */}
              <div className="mt-6 pt-6 border-t border-gray-200">
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
                  </form>
                ) : (
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <input
                        type="text"
                        name="nombre"
                        value={registerForm.nombre}
                        onChange={handleRegisterChange}
                        required
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Nombre"
                      />
                      <input
                        type="text"
                        name="apellido"
                        value={registerForm.apellido}
                        onChange={handleRegisterChange}
                        required
                        className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Apellido"
                      />
                    </div>

                    <input
                      type="email"
                      name="email"
                      value={registerForm.email}
                      onChange={handleRegisterChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="E-mail"
                    />

                    <input
                      type="tel"
                      name="telefono"
                      value={registerForm.telefono}
                      onChange={handleRegisterChange}
                      required
                      pattern="[9][0-9]{8}"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Teléfono (9 dígitos)"
                    />

                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={registerForm.password}
                        onChange={handleRegisterChange}
                        required
                        minLength={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                        placeholder="Contraseña (mínimo 6 caracteres)"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </button>
                    </div>

                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={registerForm.confirmPassword}
                      onChange={handleRegisterChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-all"
                      placeholder="Confirmar contraseña"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Creando cuenta...' : 'CREAR CUENTA'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <PiePagina />
    </div>
  );
};

export default Login;
