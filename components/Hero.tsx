import React from 'react';
import { Button } from './Button';
import { Logo } from './Logo';
import { ArrowRight, Disc } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-24 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}></div>
      <div className="absolute top-0 right-0 w-[50vw] h-full bg-slate-50 skew-x-[-12deg] translate-x-32 z-0 border-l border-gray-100"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/20 via-pink-500/10 to-transparent rounded-full blur-[100px] z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 relative">
            <div className="inline-flex items-center gap-3 bg-black p-1 pr-4 rounded-full border border-gray-800 animate-fade-in-up">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">NUEVO</span>
              <span className="text-white text-xs font-bold tracking-wide">DISTRIBUCIÓN SIN COSTO FIJO</span>
            </div>
            <h1 className="text-6xl sm:text-8xl font-display font-black leading-[0.85] text-black tracking-tighter uppercase relative">
              Tu Música<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 relative z-10">Al Mundo</span>
              <svg className="absolute w-2/3 h-6 -bottom-2 left-0 z-0 text-yellow-300 opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00026 6.99997C35.9171 -1.41684 133.456 -1.22915 197.989 3.03362" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/></svg>
            </h1>
            <p className="text-xl text-gray-600 font-medium max-w-lg leading-relaxed border-l-4 border-purple-500 pl-6">
              Distribución digital, licencias y promoción para artistas independientes. 
              <span className="block mt-2 font-bold text-black">Tú creas. Nosotros amplificamos.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Button size="lg" className="shadow-2xl shadow-purple-900/30 text-lg px-10 h-16 w-full sm:w-auto">
                EMPEZAR AHORA <ArrowRight className="ml-2 w-6 h-6" />
              </Button>
            </div>
            <div className="flex flex-col gap-3 pt-8">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Distribuye en +150 tiendas</p>
                <div className="flex flex-wrap gap-6 items-center transition-all duration-300">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg" alt="Spotify" className="h-8 w-auto hover:scale-110 transition-transform" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_Music_icon.svg" alt="Apple Music" className="h-8 w-auto hover:scale-110 transition-transform" />
                     <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="YouTube" className="h-6 w-auto hover:scale-110 transition-transform" />
                     <img src="https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" alt="TikTok" className="h-7 w-auto hover:scale-110 transition-transform" />
                </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative flex justify-center items-center h-full min-h-[400px]">
             <div className="relative w-80 h-80 sm:w-96 sm:h-96 z-20 transition-transform duration-700 hover:scale-105 flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-[90px] opacity-25 animate-pulse"></div>
                <Logo className="w-full h-full drop-shadow-2xl" />
                <div className="absolute -bottom-4 -left-4 bg-white border-2 border-black p-4 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="bg-black text-white p-2 rounded-lg"><Disc size={20} className="animate-spin-slow" /></div>
                    <div><p className="text-xs font-bold text-gray-400 uppercase">Estado</p><p className="font-black font-display text-lg leading-none">DISTRIBUYENDO</p></div>
                </div>
                <div className="absolute top-10 -right-8 bg-yellow-400 border-2 border-black px-4 py-2 rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    <span className="font-black text-black uppercase tracking-tight">SIN PAGOS MENSUALES</span>
                </div>
             </div>
             <div className="absolute top-0 right-0 w-64 h-64 border-2 border-gray-200 rounded-full z-0 opacity-50 dashed-circle"></div>
             <div className="absolute bottom-10 left-10 w-32 h-32 bg-gray-100 rounded-2xl -z-10 rotate-12"></div>
             <div className="absolute -bottom-10 -right-10 flex gap-2">{[...Array(9)].map((_, i) => (<div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>))}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
