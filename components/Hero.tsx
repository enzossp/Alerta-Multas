
import React from 'react';
import { CheckCircleIcon, ShieldCheckIcon, BellAlertIcon, TruckIcon } from '@heroicons/react/24/outline';
import { CheckCircleIcon as CheckIconSolid } from '@heroicons/react/24/solid';

export const Hero: React.FC = () => {
  const features = [
    { icon: <BellAlertIcon className="w-5 h-5" />, text: "Monitoramento 24h" },
    { icon: <TruckIcon className="w-5 h-5" />, text: "Carros e Motos" },
    { icon: <ShieldCheckIcon className="w-5 h-5" />, text: "Aviso Anti-Juros" }
  ];

  return (
    <section className="relative pt-16 pb-8 md:pt-24 md:pb-12 overflow-hidden">
      {/* Elementos Decorativos de Fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-slate-200/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge de Confiança */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-slate-600 font-bold text-[10px] md:text-xs uppercase tracking-widest">Sistema Oficial Ativo</span>
          </div>

          {/* Headline Principal */}
          <h1 className="text-4xl md:text-7xl font-black text-slate-900 mb-8 leading-[1.05] tracking-tighter font-headline uppercase">
            Sua placa monitorada,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">sua mente tranquila.</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-slate-500 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Esqueça as consultas manuais. Nós verificamos multas no seu veículo periodicamente e te avisamos no WhatsApp no momento do registro.
          </p>
          
          {/* Seção de Botão e Prova Social */}
          <div className="flex flex-col items-center gap-8 mb-16">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <a 
                href="#planos"
                className="relative inline-block w-full sm:w-auto bg-blue-600 hover:bg-slate-900 text-white font-black text-lg md:text-xl px-16 py-6 rounded-2xl transition-all shadow-xl uppercase tracking-widest"
              >
                Monitorar minha placa agora
              </a>
            </div>

            <div className="flex items-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-slate-200/60">
              <div className="flex -space-x-3">
                 {[
                   "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=64&h=64",
                   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=64&h=64",
                   "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=64&h=64"
                 ].map((img, i) => (
                   <img key={i} src={img} alt="Avatar" className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
                 ))}
              </div>
              <p className="text-slate-600 text-[11px] md:text-xs font-bold uppercase tracking-tighter">
                <span className="text-blue-600">+12 mil</span> motoristas protegidos no Brasil
              </p>
            </div>
          </div>

          {/* Grid de Benefícios Rápido */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { title: "Verificação Automática", desc: "Monitoramento periódico constante" },
              { title: "Alerta Instantâneo", desc: "Direto no seu WhatsApp pessoal" },
              { title: "Economia Real", desc: "Pague com desconto e evite juros" }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md p-6 rounded-3xl border border-white shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.1)] transition-all flex flex-col items-center text-center group">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <CheckIconSolid className="w-5 h-5" />
                </div>
                <h3 className="text-slate-900 font-black text-sm uppercase tracking-tight mb-1">{feature.title}</h3>
                <p className="text-slate-400 text-xs font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Floating UI Elements (Atmospheric) */}
      <div className="hidden lg:block absolute top-1/4 left-10 animate-bounce transition-all duration-[3000ms]">
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3">
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">ABC-1D23 Verificada</span>
        </div>
      </div>
      <div className="hidden lg:block absolute bottom-1/3 right-10 animate-pulse transition-all duration-[4000ms]">
        <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-100 flex items-center gap-3">
          <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
          <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">Sem novas infrações</span>
        </div>
      </div>
    </section>
  );
};
