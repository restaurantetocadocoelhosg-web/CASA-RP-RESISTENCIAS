"use client";

import { useState } from "react";

const WA_NUMBER = "5521965987979";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da Casa RP Resistências e gostaria de fazer um orçamento.")}`;
const IG_URL = "https://instagram.com/rp_resistencias";
const SHOPEE_URL = "https://shopee.com.br/casarp";
const MAPS_URL = "https://maps.google.com/?q=Rua+Visconde+do+Uruguai+264+Centro+Niteroi+RJ";

const products = [
  { icon: "🚿", tag: "Doméstico", name: "Resistência para Chuveiro", desc: "Lorenzetti, Corona, Hydra e diversas marcas. Peças novas com qualidade e segurança." },
  { icon: "🍟", tag: "Comercial", name: "Resistência para Fritadeiras", desc: "Linha comercial com alto desempenho. Fabricação própria e sob medida." },
  { icon: "📡", tag: "Conserto", name: "Conserto de Micro-ondas", desc: "Diagnóstico, manutenção e troca de componentes com atendimento especializado." },
  { icon: "🍳", tag: "Industrial", name: "Conserto de Equipamentos Industriais", desc: "Manutenção especializada para fritadeiras, estufas e linha gastronômica. Peças de qualidade e serviço confiável." },
  { icon: "⚗️", tag: "Hospitalar", name: "Resistência para Autoclaves", desc: "Desempenho térmico, durabilidade e fabricação sob medida para autoclaves." },
  { icon: "💧", tag: "Industrial", name: "Resistência de Imersão", desc: "Para aquecimento de água, boilers e aplicações industriais. Alta durabilidade." },
  { icon: "🔩", tag: "Reposição", name: "Resistência Tubular U", desc: "Solução prática para reposição e manutenção de diversos equipamentos térmicos." },
  { icon: "〰️", tag: "Reposição", name: "Resistência Tubular Ondulada", desc: "Aquecimento uniforme e ótimo desempenho para reposição em equipamentos variados." },
  { icon: "🍲", tag: "Alimentício", name: "Resistência para Banho-Maria", desc: "Ideal para aquecer e manter a água pronta para uso no banho-maria comercial." },
  { icon: "🏥", tag: "Hospitalar", name: "Secadoras Hospitalares", desc: "Eficiência térmica, segurança e peças sob medida para secadoras hospitalares." },
  { icon: "〰", tag: "Sob Medida", name: "Fio Resistência", desc: "Precisão, durabilidade e excelente desempenho térmico. Fabricação sob medida." },
  { icon: "⚓", tag: "Naval", name: "Resistências Navais", desc: "Para embarcações e equipamentos navais com alta resistência e durabilidade." },
  { icon: "🏭", tag: "Fabricação", name: "Peças Sob Medida", desc: "Fabricação própria de resistências personalizadas para qualquer equipamento." },
];

const diferenciais = [
  { icon: "✅", title: "Qualidade e Segurança", desc: "Produtos testados e certificados" },
  { icon: "📦", title: "Peças Novas e Sob Medida", desc: "Fabricação própria e reposição original" },
  { icon: "🎧", title: "Atendimento Especializado", desc: "Equipe técnica pronta para ajudar" },
  { icon: "🚚", title: "Envio para Todo o Brasil", desc: "Entrega rápida e com segurança" },
  { icon: "⚡", title: "Entrega Rápida", desc: "RJ, Niterói e São Gonçalo" },
  { icon: "🔧", title: "Fabricação Própria", desc: "Soluções exclusivas sob medida" },
];

function WaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.836L.057 23.714c-.077.298.197.573.495.496l5.878-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.715.918.936-3.604-.234-.371A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}

function IgIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function ShopeeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.274 6.836A7.314 7.314 0 0012 0a7.314 7.314 0 00-7.274 6.836H1.5L0 24h24L22.5 6.836h-3.226zM12 1.8a5.514 5.514 0 015.46 5.036H6.54A5.514 5.514 0 0112 1.8zm0 10.476a2.106 2.106 0 110 4.212 2.106 2.106 0 010-4.212z" />
    </svg>
  );
}

const tagColors: Record<string, string> = {
  Doméstico: "bg-blue-900/60 text-blue-300",
  Comercial: "bg-amber-900/60 text-amber-300",
  Conserto: "bg-purple-900/60 text-purple-300",
  Hospitalar: "bg-green-900/60 text-green-300",
  Industrial: "bg-orange-900/60 text-orange-300",
  Reposição: "bg-yellow-900/60 text-yellow-300",
  Alimentício: "bg-red-900/60 text-red-300",
  "Sob Medida": "bg-indigo-900/60 text-indigo-300",
  Naval: "bg-cyan-900/60 text-cyan-300",
  Fabricação: "bg-teal-900/60 text-teal-300",
};

export default function Home() {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);
  const [floatOpen, setFloatOpen] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(`Olá! Me chamo ${form.nome}.\n${form.mensagem}\nTelefone: ${form.telefone}`);
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
    setEnviado(true);
    setForm({ nome: "", telefone: "", mensagem: "" });
    setTimeout(() => setEnviado(false), 4000);
  }

  return (
    <main className="font-sans bg-[#07111f]">

      {/* BOTÕES FLUTUANTES */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
        {floatOpen && (
          <>
            <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 text-sm font-bold">
              <ShopeeIcon className="w-4 h-4" /> Shopee
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 text-sm font-bold">
              <IgIcon className="w-4 h-4" /> Instagram
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 text-sm font-bold">
              <WaIcon className="w-4 h-4" /> WhatsApp
            </a>
          </>
        )}
        <button onClick={() => setFloatOpen(!floatOpen)}
          className="w-14 h-14 rounded-full bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] shadow-xl flex items-center justify-center transition-all hover:scale-110 font-bold">
          {floatOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <WaIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#07111f]/95 backdrop-blur-sm border-b border-[#F5B800]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#F5B800] rounded flex items-center justify-center font-black text-[#07111f] text-sm leading-none transform rotate-45 shrink-0">
              <span className="-rotate-45">RP</span>
            </div>
            <div className="ml-1">
              <span className="font-black text-white text-base leading-tight block tracking-wide">CASA RP</span>
              <span className="text-[#F5B800] text-[10px] font-semibold leading-tight block tracking-widest uppercase">Resistências</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#produtos" className="text-gray-300 hover:text-[#F5B800] transition-colors">Produtos</a>
            <a href="#sobre" className="text-gray-300 hover:text-[#F5B800] transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-300 hover:text-[#F5B800] transition-colors">Contato</a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 transition-colors flex items-center gap-1">
              <IgIcon className="w-4 h-4" /> Instagram
            </a>
            <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-400 transition-colors">Shopee</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black px-5 py-2 rounded-full transition-all hover:scale-105 flex items-center gap-2">
              <WaIcon className="w-4 h-4" /> WhatsApp
            </a>
          </div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="md:hidden bg-[#F5B800] text-[#07111f] px-3 py-1.5 rounded-full text-sm font-black">
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center bg-[#07111f] relative overflow-hidden pt-16">
        {/* Background dots pattern */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle, #F5B800 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5B800]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#F5B800]" />
              <span className="text-[#F5B800] font-bold text-sm tracking-[0.2em] uppercase">Soluções que Aquecem</span>
              <div className="h-px w-8 bg-[#F5B800]" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-none mb-2 tracking-tight">
              CASA RP
            </h1>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F5B800] leading-none mb-8 tracking-tight">
              RESISTÊNCIAS
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-3">
              Resistências domésticas, comerciais, industriais, navais e hospitalares.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Há mais de 20 anos em Niterói/RJ, com envio para todo o Brasil.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-yellow-900/30 flex items-center gap-3 text-base">
                <WaIcon className="w-5 h-5" /> Solicite seu Orçamento
              </a>
              <a href="#produtos"
                className="border-2 border-[#F5B800]/50 hover:border-[#F5B800] text-[#F5B800] font-bold px-8 py-4 rounded-xl transition-all hover:bg-[#F5B800]/5 text-base">
                Ver Produtos
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors text-sm font-medium">
                <IgIcon className="w-4 h-4" /> @rp_resistencias
              </a>
              <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium">
                <ShopeeIcon className="w-4 h-4" /> Loja na Shopee
              </a>
            </div>
          </div>

          {/* Lado direito hero */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F5B800]/10 rounded-3xl blur-2xl scale-110" />
              <div className="relative bg-[#0d1f3c] border border-[#F5B800]/30 rounded-3xl p-8 space-y-4 w-80">
                <div className="text-center border-b border-[#F5B800]/20 pb-4">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="w-8 h-8 bg-[#F5B800] rounded flex items-center justify-center font-black text-[#07111f] text-xs transform rotate-45">
                      <span className="-rotate-45">RP</span>
                    </div>
                    <span className="text-white font-black text-lg tracking-wide">CASA RP</span>
                  </div>
                  <span className="text-[#F5B800] text-xs font-bold tracking-widest uppercase">Resistências</span>
                </div>
                {[
                  "Resistências Domésticas",
                  "Resistências Comerciais",
                  "Resistências Industriais",
                  "Resistências Navais",
                  "Resistências Hospitalares",
                  "Conserto de Equipamentos",
                  "Fabricação Sob Medida",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#F5B800] rounded-full shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="block w-full mt-4 bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black py-3 rounded-xl text-center text-sm transition-all hover:scale-105">
                  SOLICITE SEU ORÇAMENTO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-[#F5B800] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#07111f]">
            {[
              { num: "20+", label: "Anos de mercado" },
              { num: "500+", label: "Clientes atendidos" },
              { num: "100+", label: "Produtos disponíveis" },
              { num: "BR", label: "Envio para todo o Brasil" },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-black">{s.num}</div>
                <div className="text-[#07111f]/70 text-sm mt-1 font-semibold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-24 bg-[#07111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-[#F5B800]" />
              <span className="text-[#F5B800] font-bold text-sm tracking-[0.2em] uppercase">Nossos Produtos</span>
              <div className="h-px w-10 bg-[#F5B800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Soluções para cada <span className="text-[#F5B800]">necessidade</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Trabalhamos com resistências domésticas, comerciais, industriais, navais e hospitalares.
              Peças novas, originais e fabricação sob medida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <a key={i} href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="group bg-[#0d1f3c] border border-white/5 hover:border-[#F5B800]/50 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-900/20 block">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{p.icon}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${tagColors[p.tag] ?? "bg-gray-800 text-gray-400"}`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#F5B800] transition-colors leading-snug">
                  {p.name}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex items-center gap-2 text-[#F5B800] text-sm font-bold">
                  <WaIcon className="w-4 h-4" />
                  Solicitar orçamento
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Veja mais produtos e compre online</p>
            <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105 shadow-md">
              <ShopeeIcon className="w-5 h-5" />
              Visitar nossa Shopee
            </a>
          </div>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="py-20 bg-[#0d1f3c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle, #F5B800 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#F5B800]" />
            <span className="text-[#F5B800] font-bold text-sm tracking-widest uppercase">Atendimento Rápido</span>
            <div className="h-px w-8 bg-[#F5B800]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-3">
            PRECISANDO DAQUELA
          </h2>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F5B800] leading-tight mb-6">
            RESISTÊNCIA COM URGÊNCIA?
          </h2>
          <p className="text-gray-300 text-lg mb-4">
            Atendimento rápido para <strong className="text-white">Rio de Janeiro, Niterói e São Gonçalo</strong>
          </p>
          <p className="text-gray-400 mb-10">Envio para todo o Brasil • Entrega rápida • Peças novas e sob medida</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105 shadow-xl shadow-yellow-900/30 flex items-center gap-3">
              <WaIcon className="w-6 h-6" />
              FAÇA SEU ORÇAMENTO
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 mt-10 text-sm text-gray-400">
            {[
              { icon: "🚚", label: "Entrega Rápida" },
              { icon: "🎧", label: "Atendimento Especializado" },
              { icon: "📦", label: "Peças Novas e Sob Medida" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 font-semibold">
                <span>{item.icon}</span>
                <span className="text-white">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 bg-[#07111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#F5B800]" />
                <span className="text-[#F5B800] font-bold text-sm tracking-widest uppercase">Sobre Nós</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                Tradição e qualidade em{" "}
                <span className="text-[#F5B800]">resistências elétricas</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A Casa RP Resistências é uma empresa especializada em soluções de aquecimento elétrico,
                localizada no Centro de <strong className="text-white">Niterói, RJ</strong>. Com mais de 20 anos de
                experiência, somos referência em qualidade, confiabilidade e atendimento técnico especializado.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Trabalhamos com resistências domésticas, comerciais, industriais, navais e hospitalares —
                desde a reposição de peças originais até fabricação sob medida para qualquer equipamento.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Atendemos Rio de Janeiro, Niterói e São Gonçalo com entrega rápida, e enviamos para todo o Brasil.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black px-6 py-3 rounded-xl transition-all hover:scale-105">
                  <WaIcon className="w-4 h-4" /> Fale conosco
                </a>
                <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-pink-400/60 text-white hover:text-pink-400 font-semibold px-6 py-3 rounded-xl transition-colors">
                  <IgIcon className="w-4 h-4" /> @rp_resistencias
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3">
              {diferenciais.map((d, i) => (
                <div key={i}
                  className="flex items-center gap-4 bg-[#0d1f3c] border border-white/5 hover:border-[#F5B800]/30 rounded-xl p-4 transition-colors">
                  <span className="text-2xl">{d.icon}</span>
                  <div>
                    <div className="text-white font-bold text-sm">{d.title}</div>
                    <div className="text-gray-400 text-xs mt-0.5">{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#F5B800]" />
              <span className="text-[#F5B800] font-bold text-sm tracking-widest uppercase">Contato</span>
              <div className="h-px w-8 bg-[#F5B800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Fale com a gente</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Atendimento rápido e especializado. Envie sua mensagem ou ligue agora.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Formulário */}
            <form onSubmit={handleSubmit} className="bg-[#07111f] border border-white/10 rounded-2xl p-8 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Nome</label>
                <input type="text" name="nome" value={form.nome} onChange={handleChange} required
                  placeholder="Seu nome"
                  className="w-full bg-[#0d1f3c] border border-white/10 focus:border-[#F5B800]/60 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Telefone / WhatsApp</label>
                <input type="tel" name="telefone" value={form.telefone} onChange={handleChange} required
                  placeholder="(21) 99999-9999"
                  className="w-full bg-[#0d1f3c] border border-white/10 focus:border-[#F5B800]/60 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Mensagem</label>
                <textarea name="mensagem" value={form.mensagem} onChange={handleChange} required rows={4}
                  placeholder="Qual produto ou serviço você precisa?"
                  className="w-full bg-[#0d1f3c] border border-white/10 focus:border-[#F5B800]/60 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black py-3.5 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <WaIcon className="w-5 h-5" />
                {enviado ? "Mensagem enviada! ✓" : "Enviar pelo WhatsApp"}
              </button>
            </form>

            {/* Cards de contato */}
            <div className="space-y-3">
              {[
                {
                  href: WA_URL, bg: "hover:border-green-500/40",
                  iconBg: "bg-green-900/50 text-green-400",
                  icon: <WaIcon className="w-5 h-5" />,
                  title: "WhatsApp",
                  value: "(21) 96598-7979",
                  sub: "Atendimento rápido",
                },
                {
                  href: "tel:+552126208167", bg: "hover:border-blue-500/40",
                  iconBg: "bg-blue-900/50 text-blue-400",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  title: "Telefone Fixo",
                  value: "(21) 2620-8167",
                  sub: "Seg–Sex 8h às 18h · Sáb 8h às 12h",
                },
                {
                  href: "mailto:casarpresistenciaseletrica@hotmail.com", bg: "hover:border-yellow-500/40",
                  iconBg: "bg-yellow-900/50 text-yellow-400",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  title: "E-mail",
                  value: "casarpresistenciaseletrica@hotmail.com",
                  sub: "Resposta em até 24h",
                },
                {
                  href: MAPS_URL, bg: "hover:border-[#F5B800]/40",
                  iconBg: "bg-[#F5B800]/20 text-[#F5B800]",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  title: "Endereço",
                  value: "Rua Visconde do Uruguai, 264",
                  sub: "Centro – Niterói, RJ",
                },
                {
                  href: IG_URL, bg: "hover:border-pink-500/40",
                  iconBg: "bg-pink-900/50 text-pink-400",
                  icon: <IgIcon className="w-5 h-5" />,
                  title: "Instagram",
                  value: "@rp_resistencias",
                  sub: "Siga e veja novidades",
                },
                {
                  href: SHOPEE_URL, bg: "hover:border-orange-500/40",
                  iconBg: "bg-orange-900/50 text-orange-400",
                  icon: <ShopeeIcon className="w-5 h-5" />,
                  title: "Shopee",
                  value: "shopee.com.br/casarp",
                  sub: "Compre online com segurança",
                },
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 bg-[#07111f] border border-white/5 ${c.bg} rounded-xl p-4 transition-all hover:shadow-md group`}>
                  <div className={`${c.iconBg} rounded-xl p-2.5 shrink-0`}>{c.icon}</div>
                  <div className="min-w-0">
                    <div className="text-gray-400 text-xs font-semibold uppercase tracking-wide">{c.title}</div>
                    <div className="text-white font-semibold text-sm truncate">{c.value}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#030c17] border-t border-[#F5B800]/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F5B800] rounded flex items-center justify-center font-black text-[#07111f] text-xs transform rotate-45 shrink-0">
                <span className="-rotate-45">RP</span>
              </div>
              <div>
                <span className="text-white font-black tracking-wide block">CASA RP RESISTÊNCIAS</span>
                <span className="text-[#F5B800] text-xs tracking-widest uppercase">Soluções que Aquecem</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">Rua Visconde do Uruguai, 264 – Centro, Niterói/RJ</p>
              <p className="text-gray-500 text-sm mt-0.5">
                <a href="tel:+552126208167" className="hover:text-white">(21) 2620-8167</a>
                {" · "}
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B800]">(21) 96598-7979</a>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-400 transition-colors">
                <IgIcon className="w-5 h-5" />
              </a>
              <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors">
                <ShopeeIcon className="w-5 h-5" />
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
                <WaIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Casa RP Resistências. Todos os direitos reservados.</p>
            <p className="text-[#F5B800] text-xs font-bold tracking-widest uppercase">🚚 Envio para todo o Brasil</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
