import React from 'react';
import { Globe, Mic2, BarChart3, Wallet, Zap, Share2 } from 'lucide-react';

const features = [
  { icon: <Globe className="w-6 h-6" />, title: "Alcance Global", description: "Distribución directa a Spotify, Apple Music, TikTok, Instagram y más de 150 tiendas." },
  { icon: <Wallet className="w-6 h-6" />, title: "Regalías Claras", description: "Cobra tus ganancias mensualmente. Sin mínimos abusivos. Transparencia total." },
  { icon: <BarChart3 className="w-6 h-6" />, title: "Data en Tiempo Real", description: "Descubre dónde te escuchan. Estadísticas detalladas para planear tu próxima gira." },
  { icon: <Zap className="w-6 h-6" />, title: "Split Pay", description: "Divide ganancias con tus colaboradores automáticamente. Nosotros hacemos las cuentas." },
  { icon: <Share2 className="w-6 h-6" />, title: "Smart Links", description: "Enlaces inteligentes gratuitos para cada lanzamiento. Facilita que tus fans te escuchen." },
  { icon: <Mic2 className="w-6 h-6" />, title: "Protección de Content ID", description: "Monetiza cuando otros usen tu música en YouTube, Facebook e Instagram." }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-4 tracking-tight">EL CONTROL ES <span className="text-purple-600">TUYO</span>.</h2>
            <p className="text-lg text-gray-500 font-medium">Herramientas profesionales para artistas que se toman su carrera en serio.</p>
          </div>
          <button className="text-purple-600 font-bold hover:text-purple-800 transition-colors border-b-2 border-purple-200 hover:border-purple-600 pb-1">Ver todas las características</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 bg-white border border-gray-200 hover:border-purple-500 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-purple-500/10 rounded-xl">
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
