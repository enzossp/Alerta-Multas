import React from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          
          {/* Card de Conversão Final - Mais compacto */}
          <div className="bg-white rounded-[3rem] p-8 md:p-14 text-center relative overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] border border-slate-100">
            
            {/* Elementos Visuais de Fundo Sutis */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-[100px]"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-slate-50 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Ícone Flutuante - Reduzido */}
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-xl opacity-10 animate-pulse"></div>
                <div className="relative w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center shadow-2xl rotate-3">
                  <RocketLaunchIcon className="w-7 h-7 text-white" />
                </div>
              </div>

              <span className="text-blue-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-4 block">Decisão Inteligente</span>
              
              <h2 className="text-3xl md:text-5xl font-black text-black mb-6 max-w-4xl mx-auto leading-[1.1] uppercase font-headline tracking-tighter">
                Não espere descobrir uma multa quando <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">já for tarde.</span>
              </h2>
              
              <p className="text-slate-500 text-base md:text-lg mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
                Junte-se a milhares de motoristas que já automatizaram sua prevenção e evitam surpresas financeiras todos os meses.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <a 
                  href="#planos" 
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-black text-white font-black text-lg px-12 py-5 rounded-2xl shadow-xl shadow-blue-200 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-widest group"
                >
                  Ativar meu Alerta Agora
                  <svg className="w-5 h-5 ml-3 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>

              {/* Badges de Confiança inferiores - Mais próximos */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-8 opacity-40">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-black">Sem Fidelidade</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-black">Configuração em 1 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-black uppercase tracking-widest text-black">Privacidade Total</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sombra de Profundidade Externa Discreta */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-slate-200/20 blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};