
import React from 'react';

export const WhatsappMockup: React.FC = () => {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-block bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 border border-blue-100">
            Exemplo de Notificação
          </div>
        </div>

        <div className="max-w-[380px] mx-auto relative">
          {/* Phone Frame */}
          <div className="bg-[#111b21] rounded-[3rem] p-3 shadow-2xl border-[6px] border-[#222c32]">
            <div className="bg-[#e5ddd5] rounded-[2.2rem] overflow-hidden aspect-[9/18] flex flex-col relative">
              {/* WhatsApp Background Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.08] pointer-events-none z-0" 
                style={{ 
                  backgroundImage: `url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")`,
                  backgroundSize: '400px'
                }} 
              />
              
              {/* Header */}
              <div className="bg-[#075e54] pt-8 pb-3 px-4 flex items-center justify-between relative z-10 shadow-md">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                  </svg>
                  <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 border border-white/20 overflow-hidden">
                    <div className="bg-blue-600 w-full h-full flex items-center justify-center text-white text-[10px] font-bold">AM</div>
                  </div>
                  <div className="flex flex-col">
                    <div className="text-white font-bold text-[14px] leading-tight">Alerta Multas</div>
                    <div className="text-emerald-100/80 text-[11px] font-medium">online</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.3 12.6l-2.1 2.1c-1.1-.6-2.2-1.4-3.2-2.4s-1.8-2.1-2.4-3.2l2.1-2.1c.2-.2.3-.5.2-.7L10.5 2c-.1-.3-.4-.5-.7-.5H5.5c-.4 0-.7.3-.7.7 0 9.3 7.6 16.8 16.8 16.8.4 0 .7-.3.7-.7v-4.3c0-.3-.2-.6-.5-.7l-4.3-1.4c-.3-.1-.6 0-.7.2z"/></svg>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </div>
              </div>

              {/* Chat Area */}
              <div className="flex-grow p-4 flex flex-col gap-3 relative z-10">
                <div className="self-center bg-[#d1d7db] text-slate-600 text-[11px] font-bold px-3 py-1 rounded-lg uppercase tracking-wider my-2 shadow-sm">Hoje</div>
                
                {/* Incoming Message Bubble */}
                <div className="self-start relative group max-w-[88%]">
                  {/* Bubble Tail */}
                  <div className="absolute top-0 -left-2 w-4 h-4 text-white">
                    <svg viewBox="0 0 16 16" className="w-full h-full" fill="currentColor">
                      <path d="M16 0H0V16L16 0Z" />
                    </svg>
                  </div>
                  
                  <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-[0_1px_1px_rgba(0,0,0,0.15)]">
                    <div className="text-[#111b21] text-[13.5px] leading-[1.4] space-y-2">
                      <p className="font-bold text-[14.5px]">🚨 Nova multa identificada</p>
                      <div className="space-y-0.5">
                        <p>Veículo: <span className="font-bold">ABC1D23</span></p>
                        <p>Data do registro: <span className="font-bold">08/08/2026</span></p>
                        <p>Órgão responsável: <span className="font-bold">DETRAN</span></p>
                      </div>
                      <p className="pt-2 font-bold text-[#0062CC] border-t border-slate-100 mt-2">
                        Veja os detalhes e prazos disponíveis.
                      </p>
                    </div>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className="text-[10px] text-slate-400 font-medium">14:32</span>
                    </div>
                  </div>
                </div>

                {/* System Info Message */}
                <div className="self-center bg-[#f0f2f5]/90 border border-slate-200/50 text-slate-500 text-[11px] font-medium px-4 py-1.5 rounded-lg text-center shadow-sm max-w-[80%] my-2 leading-tight">
                  🔒 As mensagens e chamadas são protegidas com a criptografia de ponta a ponta.
                </div>
              </div>

              {/* Input Area */}
              <div className="p-2 flex items-center gap-2 relative z-10 bg-[#f0f2f5]">
                <div className="flex-grow bg-white rounded-full h-11 px-4 flex items-center gap-3 shadow-sm border border-slate-200/50">
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <div className="flex-grow text-slate-400 text-[15px]">Mensagem</div>
                  <svg className="w-5 h-5 text-slate-400 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.415a6 6 0 108.486 8.486L20.5 13" /></svg>
                  <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div className="w-11 h-11 rounded-full bg-[#128c7e] flex items-center justify-center text-white shadow-md flex-shrink-0">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Shadows/Elements */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/10 blur-xl rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};
