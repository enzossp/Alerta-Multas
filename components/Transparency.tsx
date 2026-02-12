import React from 'react';
import { ShieldCheckIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

export const Transparency: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Elementos decorativos de fundo discretos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100/50 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col items-center text-center">
            
            {/* Badge de Selo de Confiança */}
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-2xl opacity-10 scale-150 animate-pulse"></div>
              <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-slate-50">
                <ShieldCheckIcon className="w-8 h-8 md:w-10 md:h-10 text-blue-600" />
              </div>
            </div>

            <span className="text-blue-600 font-black text-[10px] md:text-xs uppercase tracking-[0.4em] mb-3 block">Compromisso Ético</span>
            
            <h4 className="text-2xl md:text-3xl font-black text-black mb-6 uppercase font-headline tracking-tighter leading-tight">
              Transparência <span className="text-blue-600">Total</span> com você
            </h4>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 group hover:border-blue-200 transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <InformationCircleIcon className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="font-black text-xs uppercase tracking-widest text-black">Quem somos</p>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  O Alerta Multas é um serviço <span className="text-black font-bold">privado e independente</span>. Nossa missão é monitorar seus dados de trânsito para que você não perca prazos.
                </p>
              </div>

              <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100 group hover:border-blue-200 transition-colors shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                    <ShieldCheckIcon className="w-5 h-5 text-slate-600" />
                  </div>
                  <p className="font-black text-xs uppercase tracking-widest text-black">Relação Oficial</p>
                </div>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  Deixamos claro: <span className="text-black font-bold">não somos um órgão oficial</span>. Atuamos como facilitador consultando registros públicos para sua comodidade.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 w-full flex flex-col items-center">
              <p className="text-slate-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                Serviço de alta disponibilidade e segurança
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};