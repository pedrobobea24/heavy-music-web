import React from 'react';
import { Logo } from './Logo';
import { Apple } from 'lucide-react';

export const MobileApp: React.FC = () => {
  return (
    <section id="app" className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative border-t border-gray-900">
      
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-pink-900/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
             <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-purple-500/30 rounded-full bg-purple-900/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                <span className="text-purple-300 font-bold text-xs tracking-widest uppercase">App Oficial Disponible</span>
             </div>
             
             <h2 className="text-5xl sm:text-7xl font-display font-black leading-tight mb-6">
               DESCARGA <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">LA APP.</span>
             </h2>
             
             <p className="text-xl text-gray-400 mb-10 max-w-md leading-relaxed">
               Lleva tu carrera en el bolsillo. Sube música, revisa tus estadísticas en tiempo real y gestiona tus pagos desde iOS y Android.
             </p>

             <div className="flex flex-col sm:flex-row gap-5">
               {/* App Store Button */}
               <a 
                 href="https://apps.apple.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group flex items-center gap-4 bg-white text-black px-6 py-4 rounded-xl hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-lg shadow-white/5"
               >
                 <Apple size={32} className="fill-current" />
                 <div className="text-left">
                   <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">Consíguela en el</div>
                   <div className="text-xl font-black leading-none font-display">App Store</div>
                 </div>
               </a>

               {/* Google Play Button */}
               <a 
                 href="https://play.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="group flex items-center gap-4 bg-transparent border-2 border-gray-700 text-white px-6 py-4 rounded-xl hover:bg-gray-800 hover:border-gray-600 transition-all transform hover:-translate-y-1"
               >
                 <div className="w-8 h-8 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full group-hover:text-green-400 transition-colors">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.36,13.08L18.81,13.97L16.14,11.3L18.81,8.63L20.36,9.53C20.89,9.83 20.89,10.78 20.36,11.08M16.81,8.88L14.54,11.15L6.05,2.66L16.81,8.88Z" />
                    </svg>
                 </div>
                 <div className="text-left">
                   <div className="text-[10px] font-bold uppercase tracking-wider opacity-60">Disponible en</div>
                   <div className="text-xl font-black leading-none font-display">Google Play</div>
                 </div>
               </a>
             </div>
          </div>

          {/* Right: Phone Mockup */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end perspective-1000">
            <div className="relative w-[320px] h-[640px] bg-black border-[10px] border-gray-800 rounded-[3.5rem] shadow-2xl rotate-[-3deg] hover:rotate-0 transition-transform duration-700 overflow-hidden ring-1 ring-white/10 group">
              {/* Reflection */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent z-20 pointer-events-none"></div>
              
              {/* Dynamic Island / Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-30"></div>
              
              {/* Screen Content */}
              <div className="w-full h-full bg-[#1a1a1a] flex flex-col relative z-10 overflow-hidden">
                
                {/* Header inside phone */}
                <div className="pt-14 px-6 pb-6 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
                  <Logo className="h-6 w-6" />
                  <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-[2px]">
                    <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-[10px] font-bold">YO</div>
                  </div>
                </div>

                {/* Main Stats */}
                <div className="px-6 mb-8">
                   <div className="bg-gradient-to-br from-[#2E0249] to-[#570A57] p-6 rounded-3xl shadow-lg border border-white/5 relative overflow-hidden">
                      <div className="absolute -right-10 -top-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
                      <p className="text-purple-200 text-xs font-bold uppercase tracking-wider mb-2">Ingresos Estimados</p>
                      <h3 className="text-4xl font-display font-black text-white mb-1">$4,852<span className="text-lg text-purple-300">.40</span></h3>
                      <div className="flex items-center gap-1 text-green-400 text-xs font-bold bg-green-400/10 px-2 py-1 rounded w-fit">
                        <span>▲ 12.5%</span>
                        <span className="text-white/50 ml-1">vs mes anterior</span>
                      </div>
                   </div>
                </div>

                {/* Tracks List */}
                <div className="flex-1 bg-black rounded-t-3xl px-6 pt-8 pb-6">
                    <div className="flex justify-between items-end mb-6">
                        <h4 className="text-white font-bold text-lg">Lanzamientos</h4>
                        <span className="text-purple-500 text-xs font-bold">Ver todo</span>
                    </div>
                    
                    <div className="space-y-4">
                        {[
                            { title: "Neon Nights", plays: "245k" },
                            { title: "Urban Dreams", plays: "128k" },
                            { title: "Heavy Metal Heart", plays: "89k" },
                            { title: "Midnight Drive", plays: "56k" }
                        ].map((track, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center shrink-0">
                                    <Logo className="w-6 h-6 opacity-50" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h5 className="text-white font-bold text-sm truncate">{track.title}</h5>
                                    <p className="text-gray-500 text-xs">Single • 2024</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-white font-bold text-sm">{track.plays}</p>
                                    <p className="text-gray-600 text-[10px]">streams</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Bottom Bar */}
                <div className="h-16 bg-black/90 backdrop-blur border-t border-white/5 flex justify-around items-center px-6">
                    <div className="p-2 text-purple-500"><div className="w-6 h-6 bg-current rounded-md opacity-20"></div></div>
                    <div className="p-2 text-gray-600"><div className="w-6 h-6 bg-current rounded-md opacity-20"></div></div>
                    <div className="p-2 text-gray-600"><div className="w-6 h-6 bg-current rounded-md opacity-20"></div></div>
                    <div className="p-2 text-gray-600"><div className="w-6 h-6 bg-current rounded-md opacity-20"></div></div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};