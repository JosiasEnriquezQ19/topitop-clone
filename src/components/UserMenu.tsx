import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface UserMenuProps {
    children: ReactNode;
}

export const UserMenu = ({ children }: UserMenuProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                {children}
            </PopoverTrigger>
            <PopoverContent className="w-[340px] p-8 bg-white shadow-2xl border-none relative mt-2 rounded-sm" align="end" sideOffset={10}>
                {/* Triangle Arrow */}
                <div className="absolute -top-2 right-[18px] w-5 h-5 bg-white transform rotate-45 shadow-[-2px_-2px_5px_rgba(0,0,0,0.03)]" />

                <div className="flex flex-col gap-3 text-center relative z-10 bg-white">
                    <h3 className="text-[15px] font-normal mb-2 text-black tracking-wide">Escoja una opción para entrar</h3>

                    <Button variant="outline" className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider rounded-sm">
                        Recibir código de acceso por e-mail
                    </Button>

                    <Button variant="outline" className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider rounded-sm">
                        Entrar con e-mail y contraseña
                    </Button>

                    <Button variant="outline" className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider flex items-center gap-3 rounded-sm">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" fill="#FBBC05" />
                            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                        </svg>
                        Entrar con Google
                    </Button>

                    <Button variant="outline" className="w-full justify-center font-bold text-[11px] h-[42px] border-black text-black hover:bg-gray-50 uppercase tracking-wider flex items-center gap-3 rounded-sm">
                        <svg className="w-4 h-4 text-[#1877F2] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.84c0-2.71 1.482-4.668 4.166-4.668 1.287 0 2.643.23 2.643.23v2.892h-1.494c-1.344 0-1.553.834-1.553 1.69v1.696h3.259l-1.035 3.667h-2.224v7.98h-3.762z" />
                        </svg>
                        Entrar con Facebook
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};
