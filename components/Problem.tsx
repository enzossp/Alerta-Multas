
import React from 'react';
import { 
  ClockIcon, 
  BanknotesIcon, 
  NoSymbolIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export const Problem: React.FC = () => {
  const problems = [
    {
      title: "Juros Acumulados",
      desc: "Muitos motoristas só descobrem multas meses depois, na hora de vender o carro ou licenciar. O resultado? Juros que podem dobram o valor original.",
      icon: <BanknotesIcon className="w-8 h-8" />,
      tag: "Prejuízo Financeiro",
      accent: "border-t-red-500"
    },
    {
      title: "Prazos de Recurso",
      desc: "A notificação física pode atrasar ou nem chegar. Sem o Alerta, você perde o direito legal de contestar infrações indevidas ou indicar o condutor.",
      icon: <ClockIcon className="w-8 h-8" />,
      tag: "Direito Perdido",
      accent: "border-t-amber-500"
    },
    {
      title: "Perda do Desconto",
      desc: "O governo oferece até 40% de desconto para quem paga cedo. Sem monitoramento, você descobre a multa quando o benefício já expirou.",
      icon: <NoSymbolIcon className="w-8 h-8" />,
      tag: "Oportunidade Perdida",
      accent: "border-t-blue-500"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 mb-6">
            <ExclamationTriangleIcon className="w-4 h-4 text-red-600" />
            <span className="text-red-700 font-black text-[10px] uppercase tracking-[0.2em]">O custo da desatenção</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 leading-none uppercase font-headline tracking-tighter">
            Multas invisíveis,<br/><span className="text-blue-600">prejuízos reais.</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            Não monitorar seu veículo é contar com a sorte. Os sistemas oficiais falham, mas as cobranças nunca param de chegar.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {problems.map((item, idx) => (
            <div key={idx} className={`relative bg-white p-10 rounded-3xl border-t-4 ${item.accent} shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_60px_-15px_rgba(37,99,235,0.12)] transition-all duration-500 group`}>
              <span className="absolute top-6 right-10 text-6xl font-black text-slate-50 opacity-[0.05] group-hover:opacity-[0.08] transition-opacity font-headline">
                0{idx + 1}
              </span>

              <div className="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-8 shadow-lg group-hover:bg-blue-600 transition-colors duration-500">
                {item.icon}
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase font-headline tracking-tight">
                {item.title}
              </h3>
              
              <p className="text-slate-500 leading-relaxed font-medium text-base">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* New Statistical Insight - Light SaaS Style */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
            
            {/* Visual Part */}
            <div className="relative flex-shrink-0 w-full md:w-auto flex justify-center">
              <div className="bg-blue-50 w-40 h-40 md:w-56 md:h-56 rounded-full flex flex-col items-center justify-center relative z-10 border border-blue-100 transition-transform duration-700 group-hover:scale-105">
                <span className="text-6xl md:text-8xl font-black text-blue-600 font-headline leading-none">4</span>
                <span className="text-blue-600 font-black text-xs md:text-sm uppercase tracking-[0.2em]">Meses</span>
              </div>
              {/* Decorative Rings */}
              <div className="absolute inset-0 border border-blue-100 rounded-full scale-110 animate-pulse"></div>
            </div>

            {/* Text Part */}
            <div className="text-center md:text-left flex-grow">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">Dado Estatístico</span>
              </div>
              
              <h4 className="text-slate-900 text-2xl md:text-4xl font-black leading-tight uppercase font-headline tracking-tighter mb-4 md:mb-6">
                A maioria dos motoristas descobre multas <span className="text-blue-600">tarde demais.</span>
              </h4>
              
              <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed mb-6 max-w-xl">
                Sem um sistema de alerta, o tempo médio para tomar conhecimento de uma infração é de <span className="text-black font-bold">120 dias</span>. Nesse ponto, recursos e descontos já foram perdidos.
              </p>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="h-px w-12 bg-slate-200 hidden md:block mt-3"></div>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">
                  Fonte: Levantamento Alerta Multas 2025
                </p>
              </div>
            </div>

            {/* Background Shape */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
