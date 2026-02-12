
import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

export const Pricing: React.FC = () => {
  return (
    <section id="planos" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da Seção Aprimorado */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            <span className="text-blue-700 font-black text-[10px] uppercase tracking-[0.2em]">Planos Flexíveis</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-black uppercase tracking-tighter font-headline leading-none">
            Escolha o <span className="text-blue-600">Plano Ideal</span>
          </h2>
          
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Cancele quando quiser, sem burocracia ou fidelidade. Proteção acessível para o seu bolso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Plano 1 Veículo */}
          <div className="bg-white rounded-[2.5rem] p-10 flex flex-col border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(37,99,235,0.05)] transition-all duration-500 group relative overflow-hidden">
            <div className="relative z-10">
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-1 uppercase tracking-tight text-black font-headline">Plano Individual</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Proteção para o seu veículo</p>
              </div>

              <div className="mb-10 flex items-baseline gap-1">
                <span className="text-slate-400 font-bold text-lg">R$</span>
                <span className="text-6xl font-black text-black tracking-tighter font-headline">19,90</span>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-widest ml-1">/ mês</span>
              </div>

              <div className="h-px bg-slate-50 w-full mb-10"></div>

              <ul className="space-y-5 mb-12 flex-grow">
                {[
                  "Monitoramento de 1 veículo", 
                  "Avisos via WhatsApp", 
                  "Consultas periódicas",
                  "Cancelamento a qualquer momento"
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm md:text-base text-slate-600 font-medium group-hover:text-black transition-colors">
                    <div className="w-6 h-6 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50">
                      <CheckIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-slate-900 hover:bg-blue-600 text-white font-black py-5 rounded-2xl uppercase text-xs tracking-[0.2em] transition-all duration-300 shadow-xl shadow-slate-200 hover:shadow-blue-200 transform hover:-translate-y-1">
                Ativar Plano Individual
              </button>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full -mr-16 -mt-16 opacity-50 group-hover:bg-blue-50 transition-colors"></div>
          </div>

          {/* Plano Família - Destaque */}
          <div className="bg-white rounded-[2.5rem] flex flex-col border-4 border-blue-600 shadow-[0_30px_60px_rgba(37,99,235,0.15)] relative transform md:scale-105 group">
            {/* Balão "Mais Econômico" */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl z-30 whitespace-nowrap">
              Mais Econômico
            </div>

            <div className="relative z-10 p-10 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-black mb-1 uppercase tracking-tight text-blue-600 font-headline">Plano Família</h3>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Segurança total para até 3 veículos</p>
              </div>

              <div className="mb-10 flex flex-col">
                <span className="text-slate-300 text-xs font-bold line-through uppercase tracking-widest mb-1">De R$ 39,90</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-blue-600 font-bold text-lg">R$</span>
                  <span className="text-6xl font-black text-black tracking-tighter font-headline">29,90</span>
                  <span className="text-slate-400 text-sm font-bold uppercase tracking-widest ml-1">/ mês</span>
                </div>
              </div>

              <div className="h-px bg-blue-50 w-full mb-10"></div>

              <ul className="space-y-5 mb-12 flex-grow">
                {[
                  <><span className="text-blue-600 font-black">Monitoramento de até 3 veículos</span></>, 
                  "Avisos via WhatsApp", 
                  "Consultas periódicas",
                  "Cancelamento a qualquer momento",
                  <span className="text-blue-600 font-bold">A maior economia por placa</span>
                ].map((f, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm md:text-base text-black font-semibold">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <CheckIcon className="w-4 h-4 text-white" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 hover:bg-black text-white font-black py-5 rounded-2xl uppercase text-xs tracking-[0.2em] transition-all duration-300 shadow-2xl shadow-blue-200 transform hover:-translate-y-1">
                Ativar Plano Família
              </button>
            </div>
          </div>
        </div>

        {/* Garantia / Transparência extra */}
        <div className="mt-12 flex flex-col items-center">
          <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-widest">Sem Taxa de Adesão</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-widest">Pagamento 100% Seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
