
import React from 'react';
import { 
  ClipboardDocumentCheckIcon, 
  MagnifyingGlassIcon, 
  ChatBubbleLeftRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

export const HowItWorks: React.FC = () => {
  const steps = [
    { 
      num: "01", 
      title: "Cadastre sua placa", 
      desc: "Informe os dados básicos do seu veículo e o número do seu WhatsApp em menos de 1 minuto.", 
      icon: <ClipboardDocumentCheckIcon className="w-8 h-8" />,
      color: "bg-blue-600 text-white"
    },
    { 
      num: "02", 
      title: "Verificamos por você", 
      desc: "Nosso sistema realiza varreduras periódicas nos bancos de dados oficiais de trânsito.", 
      icon: <MagnifyingGlassIcon className="w-8 h-8" />,
      color: "bg-blue-600 text-white"
    },
    { 
      num: "03", 
      title: "Alerta no WhatsApp", 
      desc: "Se identificarmos qualquer nova multa, você recebe o alerta no celular com o link oficial.", 
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8" />,
      color: "bg-blue-600 text-white"
    }
  ];

  const trustFeatures = [
    {
      icon: <ClockIcon className="w-5 h-5" />,
      label: "Monitoramento 24h"
    },
    {
      icon: <ShieldCheckIcon className="w-5 h-5" />,
      label: "Dados Criptografados"
    },
    {
      icon: <UserGroupIcon className="w-5 h-5" />,
      label: "Suporte Especializado"
    }
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      {/* Background Decorative Elements Sutis */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.3em] mb-4 block">Fluxo de Proteção</span>
          <h2 className="text-3xl md:text-5xl font-black text-black mb-6 uppercase tracking-tight font-headline">
            Simplicidade em <span className="text-blue-600">3 Passos</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto font-medium text-base md:text-lg leading-relaxed">
            Criamos um processo transparente e direto ao ponto. Sem burocracia e com foco total na sua agilidade.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-slate-200/50 -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, idx) => (
              <div key={idx} className="relative group z-10">
                {/* Step Card */}
                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] hover:-translate-y-2 flex flex-col items-center text-center">
                  
                  {/* Icon & Number Bubble */}
                  <div className="relative mb-8">
                    <div className={`w-24 h-24 rounded-3xl flex items-center justify-center shadow-xl shadow-blue-100 transition-transform group-hover:scale-110 duration-500 ${step.color}`}>
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-xs font-black shadow-sm text-blue-600">
                      {step.num}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black text-black mb-4 uppercase font-headline tracking-tighter">
                    {step.title}
                  </h3>
                  
                  <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base">
                    {step.desc}
                  </p>

                  {/* Visual Progress Dot (Mobile Only View) */}
                  <div className="lg:hidden mt-8 w-1 h-8 bg-blue-50 rounded-full last:hidden"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Features aligned correctly */}
        <div className="mt-12 max-w-2xl mx-auto">
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-6 md:p-8 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center">
              {trustFeatures.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group justify-start md:justify-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 flex-shrink-0">
                    {feature.icon}
                  </div>
                  <span className="text-[10px] md:text-[9px] font-black uppercase tracking-widest text-slate-500 group-hover:text-black transition-colors leading-tight">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
