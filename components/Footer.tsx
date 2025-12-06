import React from 'react';
import { Logo } from './Logo';
import { Instagram, Twitter, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Logo className="h-10 w-10" />
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Distribución musical para la nueva generación de artistas. Sin barreras. Sin límites.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Plataforma</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600">Precios</a></li>
              <li><a href="#" className="hover:text-purple-600">Features</a></li>
              <li><a href="#" className="hover:text-purple-600">Heavy AI</a></li>
              <li><a href="#" className="hover:text-purple-600">Login</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-purple-600">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-purple-600">Política de Privacidad</a></li>
              <li><a href="#" className="hover:text-purple-600">Copyright</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4">Conecta</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-pink-600"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-400"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-red-600"><Youtube size={20} /></a>
            </div>
            <a href="mailto:hello@heavymusic.com" className="flex items-center text-sm text-gray-600 hover:text-purple-600">
                <Mail size={16} className="mr-2" /> info@heavymusic.com
            </a>
          </div>

        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Heavy Music Distribution. Todos los derechos reservados.</p>
          <p className="mt-2 md:mt-0">Hecho con ⚡ para artistas.</p>
        </div>
      </div>
    </footer>
  );
};