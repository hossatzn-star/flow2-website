'use client';

import React, { useState } from 'react';

export default function Home() {
  const [showRegister, setShowRegister] = useState(false);

  const handleDownload = () => {
    window.location.href = 'https://github.com/hossatzn-star/Flow2_Patch-2.0/releases/download/v2.0/Flow2-Setup.exe';
  };

  return (
    <main className="relative min-h-screen w-full bg-black flex justify-center overflow-x-hidden">
      
      {/* SFONDO FISSO */}
      <div className="fixed inset-0 z-0">
        <img src="/images/bg.png" alt="bg" className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />
      </div>

      {/* STRUTTURA A TRE COLONNE */}
      <div className="relative z-10 flex w-full max-w-[1200px] min-h-screen gap-4 p-4">
        
        {/* 1. BANNER SINISTRO (LOGIN) */}
        <aside className="hidden lg:flex flex-col w-[200px] shrink-0">
          <div className="bg-[#0d0d0d]/80 border-2 border-[#5c4b37] p-[2px] shadow-lg">
            <div className="border border-[#3a2f22] p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
              <h3 className="text-[#e2c18d] text-[10px] font-bold uppercase mb-4 border-b border-[#3a2f22] pb-2 text-center">User Login</h3>
              <input type="text" placeholder="ID" className="w-full p-2 mb-2 bg-black border border-[#3a2f22] text-[#e2c18d] text-[10px] outline-none" />
              <input type="password" placeholder="***" className="w-full p-2 mb-3 bg-black border border-[#3a2f22] text-[#e2c18d] text-[10px] outline-none" />
              <button className="w-full h-8 bg-[#2a2a2a] border border-[#5c4b37] text-[#e2c18d] text-[9px] font-bold uppercase hover:bg-[#3a3a3a]">Entra</button>
            </div>
          </div>
        </aside>

        {/* 2. COLONNA CENTRALE (LOGO + CONTENUTO) */}
        <section className="flex-1 flex flex-col items-center">
          <img src="/images/logo.png" alt="Logo" className="w-[400px] mb-10 drop-shadow-xl" />

          {!showRegister ? (
            <div className="flex flex-col gap-4 w-full max-w-[220px]">
              <button onClick={handleDownload} className="h-[50px] bg-[#1c1c1c] border-2 border-[#5c4b37] flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] active:translate-y-[1px]">
                <span className="text-[#e2c18d] font-bold uppercase text-sm tracking-widest">Download</span>
              </button>
              <button onClick={() => setShowRegister(true)} className="h-[50px] bg-[#1c1c1c] border-2 border-[#5c4b37] flex items-center justify-center bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] active:translate-y-[1px]">
                <span className="text-[#e2c18d] font-bold uppercase text-sm tracking-widest">Registrati</span>
              </button>
              
              {/* NEWS BREVI SOTTO I TASTI */}
              <div className="mt-10 p-4 bg-black/60 border border-[#3a2f22] text-[10px] text-gray-400 italic text-center">
                Sincronizzazione Patcher v2.0 completata. Benvenuti su Flow2.
              </div>
            </div>
          ) : (
            /* BOX REGISTRAZIONE COMPATTO */
            <div className="w-full max-w-[300px] bg-[#0d0d0d] border-2 border-[#5c4b37] p-[2px] shadow-2xl animate-in zoom-in duration-300">
              <div className="border border-[#3a2f22] p-5 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[#e2c18d] font-bold uppercase text-[10px]">Nuovo Account</span>
                  <button onClick={() => setShowRegister(false)} className="text-[#5c4b37] text-xs">✕</button>
                </div>
                <form className="flex flex-col gap-3">
                  <input type="text" placeholder="USERNAME" className="w-full p-2.5 bg-black border border-[#3a2f22] text-[#e2c18d] text-[10px] outline-none uppercase" />
                  <input type="email" placeholder="EMAIL" className="w-full p-2.5 bg-black border border-[#3a2f22] text-[#e2c18d] text-[10px] outline-none uppercase" />
                  <input type="password" placeholder="PASSWORD" className="w-full p-2.5 bg-black border border-[#3a2f22] text-[#e2c18d] text-[10px] outline-none uppercase" />
                  <button className="h-10 mt-2 bg-[#4a3a2a] border border-[#5c4b37] text-[#e2c18d] text-[10px] font-bold uppercase">Conferma</button>
                </form>
              </div>
            </div>
          )}
        </section>

        {/* 3. BANNER DESTRO (CLASSIFICA) */}
        <aside className="hidden lg:flex flex-col w-[200px] shrink-0">
          <div className="bg-[#0d0d0d]/80 border-2 border-[#5c4b37] p-[2px] shadow-lg">
            <div className="border border-[#3a2f22] p-4 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
              <h3 className="text-[#e2c18d] text-[10px] font-bold uppercase mb-4 border-b border-[#3a2f22] pb-2 text-center">Top Players</h3>
              <div className="space-y-2 text-[9px] text-gray-400">
                <div className="flex justify-between border-b border-white/5 pb-1"><span>1. PlayerOne</span><span className="text-yellow-600">Lv. 99</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>2. KingFlow</span><span className="text-yellow-600">Lv. 95</span></div>
                <div className="flex justify-between border-b border-white/5 pb-1"><span>3. Shadow</span><span className="text-yellow-600">Lv. 92</span></div>
              </div>
            </div>
          </div>
        </aside>

      </div>

      <footer className="fixed bottom-4 text-[9px] text-[#3a2f22] font-bold uppercase tracking-[4px]">
        Flow 2 Dynasty
      </footer>
    </main>
  );
}