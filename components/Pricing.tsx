import React from 'react';
import { Button } from './Button';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-900/40 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div>
                <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tight">
                    Empieza Gratis.<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Crece con nosotros.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                    Creemos en tu talento. Por eso eliminamos las barreras de entrada. No pagues por subir tu música. Nosotros solo ganamos una pequeña comisión cuando tú generas ingresos.
                </p>
                
                <div className="space-y-4 mb-8">
                    {[
                        "Subidas Ilimitadas Gratis",
                        "Sin cuotas mensuales ni anuales",
                        "Mantienes el 100% de la propiedad intelectual",
                        "Soporte dedicado para artistas"
                    ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                <Check size={14} className="text-green-400" />
                            </div>
                            <span className="font-medium text-gray-200">{item}</span>
                        </div>
                    ))}
                </div>

                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                    Crear cuenta gratis
                </Button>
            </div>

            <div className="relative">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl text-center relative overflow-hidden group hover:border-purple-500/50 transition-colors">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    
                    <h3 className="text-2xl font-bold mb-2">Modelo Heavy</h3>
                    <div className="my-8">
                        <span className="text-8xl font-black text-white tracking-tighter">15%</span>
                        <p className="text-gray-400 font-medium uppercase tracking-widest text-sm mt-2">Comisión sobre regalías</p>
                    </div>
                    
                    <div className="bg-gray-800/50 rounded-xl p-6 text-sm text-gray-400 leading-relaxed">
                        Solo tomamos el 15% de lo que generes en plataformas digitales. El 85% restante es todo tuyo. Sin letras pequeñas ni cargos ocultos.
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};
