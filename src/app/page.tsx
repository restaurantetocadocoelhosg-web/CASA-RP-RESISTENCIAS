"use client";

import { useState } from "react";
import Image from "next/image";

const WA_NUMBER = "5521965987979";
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Olá! Vim pelo site da Casa RP Resistências e gostaria de fazer um orçamento.")}`;
const EMAIL = "casarpresistenciaseletrica@gmail.com";
const EMAIL_URL = `mailto:${EMAIL}?subject=Orçamento - Casa RP Resistências`;
const IG_URL = "https://instagram.com/rp_resistencias";
const SHOPEE_URL = "https://shopee.com.br/casarp";
const FB_URL = "https://facebook.com/casarpresistencias";
const GOOGLE_URL = "https://share.google/mSyFVx1wQX8W0FIFe";
const MAPS_URL = "https://maps.google.com/?q=Rua+Visconde+do+Uruguai+264+Centro+Niteroi+RJ";

// ── ícones reutilizáveis ────────────────────────────────────────
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
function FbIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// ── produtos ────────────────────────────────────────────────────
const products = [
  {
    emoji: "🔩", grad: "from-[#0a1a2e] to-[#0f2a45]",
    tag: "Versátil", tagColor: "bg-blue-900/60 text-blue-300",
    name: "Resistência Tubular de Inox",
    price: "A partir de R$ 35,00",
    desc: "Resistência versátil em aço inoxidável para aquecimento de líquidos e gases. Disponível nos formatos reto, U, duplo U e espiral.",
    use: "Banho-maria, caldeiras, marmiteiros, aquecedores",
    power: "200W – 6.000W (sob medida)",
    voltage: "110V / 220V / 380V",
    material: "Inox AISI 304/316",
    obs: "Fabricação sob medida. Tempo de aquecimento: 3–10 min.",
  },
  {
    emoji: "💧", grad: "from-[#001833] to-[#002a52]",
    tag: "Industrial", tagColor: "bg-indigo-900/60 text-indigo-300",
    name: "Resistência de Imersão",
    price: "A partir de R$ 75,00",
    desc: "Para imersão direta em líquidos como água, óleo e soluções industriais. Com flange ou rosca BSP para fixação no reservatório.",
    use: "Tanques industriais, boilers, aquecedores, reservatórios",
    power: "1.000W – 12.000W",
    voltage: "110V / 220V / 380V (tri)",
    material: "Inox ou cobre",
    obs: "Aquecimento: 10–30 min. Flange ou rosca BSP sob medida.",
  },
  {
    emoji: "🍲", grad: "from-[#1a0a00] to-[#3d1500]",
    tag: "Restaurante", tagColor: "bg-amber-900/60 text-amber-300",
    name: "Resistência para Banho-Maria",
    price: "A partir de R$ 30,00",
    desc: "Resistência específica para banho-maria de cozinhas profissionais. Compatível com Progás, Elgin, Croydon e outras marcas.",
    use: "Restaurantes, buffets, hospitais, cozinhas industriais",
    power: "300W – 2.000W",
    voltage: "110V / 220V",
    material: "Inox",
    obs: "Aquecimento: 5–15 min. Peça sob medida ou original.",
  },
  {
    emoji: "🍽️", grad: "from-[#1a0800] to-[#2d1200]",
    tag: "Comercial", tagColor: "bg-orange-900/60 text-orange-300",
    name: "Resistência para Buffet Self-Service",
    price: "A partir de R$ 40,00",
    desc: "Para balcões térmicos e buffets de self-service. Mantém os alimentos a temperatura segura e constante durante o serviço.",
    use: "Restaurantes, lanchonetes, padarias, self-service",
    power: "500W – 3.000W",
    voltage: "110V / 220V",
    material: "Inox",
    obs: "Opera 60°C–90°C. Aquecimento: 5–20 min. Fabricação conforme o balcão.",
  },
  {
    emoji: "🔌", grad: "from-[#1a0000] to-[#2d0000]",
    tag: "Precisão", tagColor: "bg-red-900/60 text-red-300",
    name: "Resistência Cartucho",
    price: "A partir de R$ 20,00",
    desc: "Resistência cilíndrica de alta densidade para aquecimento localizado e preciso. Ideal para moldes, ferramentas e máquinas industriais.",
    use: "Moldes de injeção, selos, ferramentas, máquinas",
    power: "50W – 2.000W",
    voltage: "110V / 220V / 380V",
    material: "Inox com núcleo MgO",
    obs: "Diâmetros: 8, 10, 12, 16mm e outros. Aquecimento: 1–5 min.",
  },
  {
    emoji: "⭕", grad: "from-[#0d0020] to-[#180033]",
    tag: "Plástico", tagColor: "bg-purple-900/60 text-purple-300",
    name: "Resistência Coleira Mica",
    price: "A partir de R$ 25,00",
    desc: "Em formato de anel, abraça o cilindro para aquecimento uniforme. Muito usada em extrusoras e injetoras de plástico.",
    use: "Extrusoras, injetoras de plástico, cilindros industriais",
    power: "100W – 5.000W",
    voltage: "110V / 220V / 380V",
    material: "Mica com fio Ni-Cr",
    obs: "Medidas sob consulta — diâmetro e largura conforme equipamento.",
  },
  {
    emoji: "🔧", grad: "from-[#0a0f1a] to-[#12192e]",
    tag: "Alta Potência", tagColor: "bg-slate-700/60 text-slate-300",
    name: "Resistência Flangeada",
    price: "A partir de R$ 90,00",
    desc: "Com flange para fixação em tanques e reservatórios. Alta capacidade de aquecimento para indústria e comércio.",
    use: "Boilers, caldeiras, tanques industriais, aquecedores",
    power: "1.000W – 18.000W",
    voltage: "220V / 380V (mono/tri)",
    material: "Inox ou aço carbono",
    obs: "Flange 1\", 1.1/4\", 1.1/2\", 2\" e especiais. Aq.: 15–45 min.",
  },
  {
    emoji: "🌬️", grad: "from-[#001a10] to-[#002d1c]",
    tag: "Ar Quente", tagColor: "bg-teal-900/60 text-teal-300",
    name: "Resistência Aletada",
    price: "Sob consulta",
    desc: "Tubular com aletas de alumínio para aquecimento eficiente de ar em passagem forçada. Alta eficiência em fornos de convecção.",
    use: "Fornos de convecção, secadores industriais, aquecedores de ar",
    power: "500W – 6.000W (sob medida)",
    voltage: "220V / 380V",
    material: "Tubo inox + aletas alumínio",
    obs: "Pode ser usada em baterias. Aquecimento: 2–10 min.",
  },
  {
    emoji: "🔴", grad: "from-[#1a0f00] to-[#2d1800]",
    tag: "Infravermelho", tagColor: "bg-yellow-900/60 text-yellow-300",
    name: "Resistência Cerâmica Infravermelha",
    price: "A partir de R$ 55,00",
    desc: "Emite calor por radiação infravermelha. Alta eficiência energética, longa vida útil e aquecimento imediato sem contato.",
    use: "Sauna, secagem de tinta, termoplásticos, cabines de pintura",
    power: "100W – 1.000W",
    voltage: "110V / 220V",
    material: "Corpo cerâmico + filamento Ni-Cr",
    obs: "Vida útil: até 10.000h. Aquecimento: 1–3 min.",
  },
  {
    emoji: "🏭", grad: "from-[#1a0800] to-[#331200]",
    tag: "Forno", tagColor: "bg-orange-900/60 text-orange-300",
    name: "Resistência para Forno Industrial",
    price: "A partir de R$ 55,00",
    desc: "Para fornos de panificação, confeitaria, pizzaria e câmaras de calor industriais. Suporta altas temperaturas com durabilidade.",
    use: "Fornos padaria, pizzaria, confeitaria, câmaras de calor",
    power: "1.000W – 8.000W",
    voltage: "220V / 380V",
    material: "Inox alta temperatura / quartzo",
    obs: "Suporta acima de 300°C. Fabricação conforme o forno. Aq.: 5–20 min.",
  },
  {
    emoji: "🔥", grad: "from-[#1a0200] to-[#2d0500]",
    tag: "Doméstico", tagColor: "bg-red-900/60 text-red-300",
    name: "Resistência para Churrasqueira Elétrica",
    price: "A partir de R$ 35,00",
    desc: "Para churrasqueiras elétricas domésticas e comerciais. Compatível com Mueller, Mondial, Cadence, Elgin e outras marcas.",
    use: "Churrasqueiras elétricas e grelhadores comerciais",
    power: "1.000W – 3.000W",
    voltage: "110V / 220V",
    material: "Inox / quartzo",
    obs: "Peça original ou compatível disponível. Aquecimento: 5–15 min.",
  },
  {
    emoji: "🧖", grad: "from-[#1a1000] to-[#2d1c00]",
    tag: "Sauna", tagColor: "bg-amber-900/60 text-amber-300",
    name: "Resistência para Sauna Seca",
    price: "A partir de R$ 80,00",
    desc: "Alta potência para saunas secas residenciais e comerciais. Opera em altas temperaturas com segurança e durabilidade certificada.",
    use: "Saunas secas, spas, academias, clínicas",
    power: "3.000W – 18.000W",
    voltage: "220V / 380V",
    material: "Inox com pedras vulcânicas",
    obs: "Temperatura 70°C–100°C. Instalar com profissional habilitado. Aq.: 20–40 min.",
  },
];

// ── serviços extras (dos flyers) ────────────────────────────────
const servicos = [
  {
    emoji: "🚿",
    name: "Resistência para Chuveiro",
    desc: "Lorenzetti, Corona, Hydra e diversas marcas. Peças novas originais e compatíveis com qualidade e segurança.",
    img: "/flyers/chuveiro.jpg",
  },
  {
    emoji: "📡",
    name: "Conserto de Micro-ondas",
    desc: "Diagnóstico, manutenção e troca de componentes de micro-ondas com atendimento técnico especializado.",
    img: "/flyers/microondas.jpg",
  },
  {
    emoji: "🍳",
    name: "Conserto de Equipamentos Industriais",
    desc: "Manutenção especializada para fritadeiras, estufas e linha gastronômica. Peças de qualidade e serviço confiável.",
    img: "/flyers/industrial.jpg",
  },
  {
    emoji: "⚗️",
    name: "Resistência para Autoclaves",
    desc: "Desempenho térmico, durabilidade e fabricação sob medida para autoclaves hospitalares e industriais.",
    img: "/flyers/autoclave.jpg",
  },
  {
    emoji: "🏥",
    name: "Secadoras Hospitalares",
    desc: "Eficiência térmica, segurança e peças sob medida para secadoras de uso hospitalar e industrial.",
    img: "/flyers/secadora.jpg",
  },
  {
    emoji: "⚓",
    name: "Resistências Navais",
    desc: "Para embarcações e equipamentos navais. Alta resistência à corrosão, durabilidade e fabricação sob medida.",
    img: null,
  },
];

const diferenciais = [
  { icon: "🏭", title: "Fabricação Sob Medida", desc: "Produzimos nas especificações exatas do seu equipamento — potência, voltagem, formato e material." },
  { icon: "⚡", title: "Alta Durabilidade", desc: "Materiais de qualidade: inox AISI 304/316, mica, cerâmica e Ni-Cr para máxima vida útil." },
  { icon: "🔧", title: "Atendimento Técnico", desc: "Orientamos sobre o tipo correto de resistência, potência e instalação para cada equipamento." },
  { icon: "🍽️", title: "Múltiplos Equipamentos", desc: "Buffet, banho-maria, forno, churrasqueira, sauna, autoclave, marmiteiro e máquinas industriais." },
  { icon: "✅", title: "Qualidade Garantida", desc: "Peças testadas antes do envio. Trabalhamos com produtos novos, originais e compatíveis." },
  { icon: "🚚", title: "Envio para Todo o Brasil", desc: "Atendemos presencialmente em Niterói/RJ e enviamos para qualquer estado com entrega rápida." },
];

const tagColors: Record<string, string> = {
  Versátil: "bg-blue-900/60 text-blue-300",
  Industrial: "bg-indigo-900/60 text-indigo-300",
  Restaurante: "bg-amber-900/60 text-amber-300",
  Comercial: "bg-orange-900/60 text-orange-300",
  Precisão: "bg-red-900/60 text-red-300",
  Plástico: "bg-purple-900/60 text-purple-300",
  "Alta Potência": "bg-slate-700/60 text-slate-300",
  "Ar Quente": "bg-teal-900/60 text-teal-300",
  Infravermelho: "bg-yellow-900/60 text-yellow-300",
  Forno: "bg-orange-900/60 text-orange-300",
  Doméstico: "bg-red-900/60 text-red-300",
  Sauna: "bg-amber-900/60 text-amber-300",
};

// ── componente principal ────────────────────────────────────────
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

      {/* ── BOTÕES FLUTUANTES ── */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
        {floatOpen && (
          <div className="flex flex-col items-end gap-2.5 animate-in slide-in-from-bottom-4">
            {[
              { href: GOOGLE_URL, bg: "bg-white", icon: "⭐", label: "Google", text: "text-yellow-500" },
              { href: SHOPEE_URL, bg: "bg-orange-500 hover:bg-orange-600", icon: <ShopeeIcon className="w-5 h-5" />, label: "Shopee", text: "text-white" },
              { href: FB_URL, bg: "bg-[#1877f2] hover:bg-blue-700", icon: <FbIcon className="w-5 h-5" />, label: "Facebook", text: "text-white" },
              { href: IG_URL, bg: "bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90", icon: <IgIcon className="w-5 h-5" />, label: "Instagram", text: "text-white" },
              { href: EMAIL_URL, bg: "bg-[#F5B800] hover:bg-yellow-400", icon: "✉", label: "E-mail", text: "text-[#07111f] font-bold" },
              { href: WA_URL, bg: "bg-green-500 hover:bg-green-600", icon: <WaIcon className="w-5 h-5" />, label: "(21) 96598-7979", text: "text-white" },
            ].map((btn, i) => (
              <a key={i} href={btn.href} target="_blank" rel="noopener noreferrer"
                className={`flex items-center gap-2.5 ${btn.bg} ${btn.text} px-4 py-2.5 rounded-full shadow-lg transition-all hover:scale-105 text-sm font-semibold`}>
                {typeof btn.icon === "string" ? <span>{btn.icon}</span> : btn.icon}
                {btn.label}
              </a>
            ))}
          </div>
        )}
        <button onClick={() => setFloatOpen(!floatOpen)}
          className="w-14 h-14 rounded-full bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] shadow-xl flex items-center justify-center transition-all hover:scale-110 font-black text-xl"
          aria-label="Contato rápido">
          {floatOpen ? "✕" : <WaIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#07111f]/95 backdrop-blur-sm border-b border-[#F5B800]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#F5B800] rounded flex items-center justify-center font-black text-[#07111f] text-sm transform rotate-45 shrink-0">
              <span className="-rotate-45">RP</span>
            </div>
            <div className="ml-1">
              <span className="font-black text-white text-base leading-tight block tracking-wide">CASA RP</span>
              <span className="text-[#F5B800] text-[10px] font-semibold leading-tight block tracking-widest uppercase">Resistências Elétricas</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <a href="#sobre" className="text-gray-300 hover:text-[#F5B800] transition-colors">Sobre</a>
            <a href="#catalogo" className="text-gray-300 hover:text-[#F5B800] transition-colors">Catálogo</a>
            <a href="#servicos" className="text-gray-300 hover:text-[#F5B800] transition-colors">Serviços</a>
            <a href="#avaliacoes" className="text-gray-300 hover:text-[#F5B800] transition-colors">Avaliações</a>
            <a href="#contato" className="text-gray-300 hover:text-[#F5B800] transition-colors">Contato</a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black px-5 py-2 rounded-full transition-all hover:scale-105 flex items-center gap-2">
              <WaIcon className="w-4 h-4" /> Orçamento
            </a>
          </div>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer"
            className="md:hidden bg-[#F5B800] text-[#07111f] px-3 py-1.5 rounded-full text-sm font-black">
            Orçamento
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="min-h-screen flex items-center bg-[#07111f] relative overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle,#F5B800 1px,transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F5B800]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#F5B800]" />
              <span className="text-[#F5B800] font-bold text-sm tracking-[0.2em] uppercase">Soluções que Aquecem</span>
              <div className="h-px w-8 bg-[#F5B800]" />
            </div>
            <h1 className="font-black text-white leading-none mb-3 tracking-tight" style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}>
              Resistências Elétricas
            </h1>
            <h2 className="font-black text-[#F5B800] leading-none mb-8 tracking-tight" style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}>
              para Aquecimento<br />Industrial e Comercial
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-2">
              Fabricação, manutenção e reposição sob medida.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Buffet · Banho-maria · Forno · Churrasqueira · Sauna · Autoclave · Marmiteiro · Máquinas Industriais
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={EMAIL_URL}
                className="bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-yellow-900/30 text-base">
                ✉ Solicitar Orçamento
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-black px-8 py-4 rounded-xl transition-all hover:scale-105 flex items-center gap-2 text-base">
                <WaIcon className="w-5 h-5" /> WhatsApp
              </a>
              <a href="#catalogo"
                className="border-2 border-[#F5B800]/40 hover:border-[#F5B800] text-[#F5B800] font-bold px-8 py-4 rounded-xl transition-all text-base">
                Ver Catálogo
              </a>
            </div>
            <div className="flex flex-wrap gap-6 mt-8">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-pink-400 transition-colors text-sm font-medium">
                <IgIcon className="w-4 h-4" /> @rp_resistencias
              </a>
              <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors text-sm font-medium">
                <ShopeeIcon className="w-4 h-4" /> Nossa Shopee
              </a>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors text-sm font-medium">
                ⭐ Avaliações Google
              </a>
            </div>
          </div>

          {/* card lateral hero */}
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#F5B800]/10 rounded-3xl blur-2xl scale-110" />
              <div className="relative bg-[#0d1f3c] border border-[#F5B800]/30 rounded-3xl p-8 w-80">
                <div className="text-center border-b border-[#F5B800]/20 pb-4 mb-5">
                  <p className="text-[#F5B800] font-black text-xs tracking-[0.2em] uppercase mb-1">Atendemos</p>
                  <p className="text-white font-black text-sm">RJ · Niterói · São Gonçalo<br/>e todo o Brasil</p>
                </div>
                {[
                  "Resistências para Chuveiro",
                  "Banho-Maria e Buffet",
                  "Forno e Churrasqueira",
                  "Sauna Seca",
                  "Autoclave e Hospitalar",
                  "Máquinas Industriais",
                  "Marmiteiro e Estufa",
                  "Fabricação Sob Medida",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 mb-3">
                    <div className="w-1.5 h-1.5 bg-[#F5B800] rounded-full shrink-0" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
                <a href={EMAIL_URL}
                  className="block w-full mt-5 bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black py-3 rounded-xl text-center text-sm transition-all hover:scale-105">
                  SOLICITE SEU ORÇAMENTO
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#F5B800] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-[#07111f]">
            {[
              { num: "20+", label: "Anos de mercado" },
              { num: "500+", label: "Clientes atendidos" },
              { num: "12+", label: "Tipos de resistência" },
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

      {/* ── SOBRE ── */}
      <section id="sobre" className="py-24 bg-[#07111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-8 bg-[#F5B800]" />
                <span className="text-[#F5B800] font-bold text-sm tracking-widest uppercase">Sobre Nós</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-6 leading-tight">
                A <span className="text-[#F5B800]">Casa RP</span> Resistências Elétricas
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A Casa RP Resistências Elétricas é especializada em soluções de aquecimento elétrico para equipamentos comerciais e industriais, localizada no Centro de <strong className="text-white">Niterói/RJ</strong>. Com mais de 20 anos de mercado, somos referência em fabricação, manutenção e reposição de resistências elétricas.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                Atendemos quem precisa de resistências para calor: buffet self-service, banho-maria, forno industrial, churrasqueira elétrica, sauna seca, autoclave, marmiteiro, máquinas industriais, aquecedores — e muito mais.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Trabalhamos com resistências tubulares, cartucho, coleira, flangeadas, aletadas, cerâmicas e <strong className="text-white">fabricação sob medida</strong> para qualquer equipamento.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={EMAIL_URL}
                  className="inline-flex items-center gap-2 bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black px-6 py-3 rounded-xl transition-all hover:scale-105">
                  ✉ Solicitar Orçamento
                </a>
                <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-white/20 hover:border-yellow-400/60 text-white hover:text-yellow-400 font-semibold px-6 py-3 rounded-xl transition-colors">
                  ⭐ Ver Avaliações
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {diferenciais.map((d, i) => (
                <div key={i} className="flex items-center gap-4 bg-[#0d1f3c] border border-white/5 hover:border-[#F5B800]/30 rounded-xl p-4 transition-colors">
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

      {/* ── CATÁLOGO ── */}
      <section id="catalogo" className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-[#F5B800]" />
              <span className="text-[#F5B800] font-bold text-sm tracking-[0.2em] uppercase">Catálogo Completo</span>
              <div className="h-px w-10 bg-[#F5B800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              12 Tipos de <span className="text-[#F5B800]">Resistências Elétricas</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Fabricação sob medida ou reposição imediata. Solicite orçamento por e-mail ou WhatsApp.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <article key={i}
                className="bg-[#07111f] border border-white/5 hover:border-[#F5B800]/50 rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-900/20 group">
                {/* header com gradiente */}
                <div className={`h-36 bg-gradient-to-br ${p.grad} flex items-center justify-center text-5xl relative`}>
                  <span className="drop-shadow-lg">{p.emoji}</span>
                  <div className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${p.tagColor}`}>
                    {p.tag}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-white font-black text-base leading-snug group-hover:text-[#F5B800] transition-colors">
                      {p.name}
                    </h3>
                    <span className="text-[#F5B800] text-xs font-bold px-2 py-1 bg-[#F5B800]/10 border border-[#F5B800]/20 rounded-full whitespace-nowrap shrink-0">
                      {p.price}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    {[
                      { l: "⚡ Potência", v: p.power },
                      { l: "🔌 Voltagem", v: p.voltage },
                      { l: "🔩 Material", v: p.material },
                      { l: "📍 Uso", v: p.use },
                    ].map((s, j) => (
                      <div key={j} className="bg-[#0d1f3c] rounded-lg p-2">
                        <div className="text-gray-500 text-[10px] mb-0.5">{s.l}</div>
                        <div className="text-gray-300 font-medium leading-tight">{s.v}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500 border-l-2 border-[#F5B800]/40 pl-3 leading-relaxed">
                    {p.obs}
                  </div>
                  <a href={`${EMAIL_URL}&body=Olá! Tenho interesse em: ${p.name}`}
                    className="mt-auto block text-center bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black py-2.5 rounded-xl text-sm transition-all hover:scale-105">
                    Solicitar Orçamento
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-4">Veja mais produtos e compre online</p>
            <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all hover:scale-105">
              <ShopeeIcon className="w-5 h-5" /> Visitar nossa Shopee
            </a>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS / FLYERS ── */}
      <section id="servicos" className="py-24 bg-[#07111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-10 bg-[#F5B800]" />
              <span className="text-[#F5B800] font-bold text-sm tracking-[0.2em] uppercase">Também Atendemos</span>
              <div className="h-px w-10 bg-[#F5B800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Serviços <span className="text-[#F5B800]">Especializados</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicos.map((s, i) => (
              <a key={i} href={`${EMAIL_URL}&body=Olá! Preciso de informações sobre: ${s.name}`}
                className="group bg-[#0d1f3c] border border-white/5 hover:border-[#F5B800]/50 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-900/20">
                <div className="h-44 bg-gradient-to-br from-[#07111f] to-[#0d1f3c] flex items-center justify-center text-6xl relative overflow-hidden">
                  {s.img ? (
                    <Image
                      src={s.img}
                      alt={s.name}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                      sizes="(max-width:768px) 100vw, 33vw"
                    />
                  ) : null}
                  <span className={`relative z-10 drop-shadow-lg ${s.img ? "text-5xl" : ""}`}>{s.emoji}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-black text-base mb-2 group-hover:text-[#F5B800] transition-colors leading-snug">{s.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="text-[#F5B800] text-sm font-bold flex items-center gap-1">
                    Solicitar orçamento
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── URGÊNCIA ── */}
      <section className="py-20 bg-[#0d1f3c] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "radial-gradient(circle,#F5B800 1px,transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#F5B800]" />
            <span className="text-[#F5B800] font-bold text-sm tracking-widest uppercase">Atendimento Rápido</span>
            <div className="h-px w-8 bg-[#F5B800]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-3">PRECISANDO DAQUELA</h2>
          <h2 className="text-4xl sm:text-5xl font-black text-[#F5B800] leading-tight mb-6">RESISTÊNCIA COM URGÊNCIA?</h2>
          <p className="text-gray-300 text-lg mb-2">
            Atendimento rápido para <strong className="text-white">Rio de Janeiro, Niterói e São Gonçalo</strong>
          </p>
          <p className="text-gray-400 mb-10">Envio para todo o Brasil · Entrega rápida · Peças novas e sob medida</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={EMAIL_URL}
              className="bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105 shadow-xl shadow-yellow-900/30">
              ✉ FAÇA SEU ORÇAMENTO
            </a>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-black px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105 flex items-center gap-3">
              <WaIcon className="w-6 h-6" /> WHATSAPP
            </a>
          </div>
        </div>
      </section>

      {/* ── AVALIAÇÕES ── */}
      <section id="avaliacoes" className="py-24 bg-[#07111f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#F5B800]" />
              <span className="text-[#F5B800] font-bold text-sm tracking-widest uppercase">O que dizem nossos clientes</span>
              <div className="h-px w-8 bg-[#F5B800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Avaliações <span className="text-[#F5B800]">dos Clientes</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              Confira as avaliações reais no Google. Sua opinião é muito importante para nós.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-10">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="bg-[#0d1f3c] border border-white/5 rounded-2xl p-6">
                <div className="text-[#F5B800] text-lg mb-3">★★★★★</div>
                <p className="text-gray-400 text-sm italic leading-relaxed mb-4">
                  "Espaço reservado para depoimento real. Acesse nossas avaliações no Google para ver o que nossos clientes dizem."
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <span className="text-xl">👤</span>
                  <span>Cliente verificado · Google</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border-2 border-[#F5B800]/40 hover:border-[#F5B800] text-[#F5B800] font-black px-8 py-4 rounded-xl transition-all hover:bg-[#F5B800]/5 text-base">
              ⭐ Ver todas as avaliações no Google
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="py-24 bg-[#0d1f3c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-8 bg-[#F5B800]" />
              <span className="text-[#F5B800] font-bold text-sm tracking-widest uppercase">Contato</span>
              <div className="h-px w-8 bg-[#F5B800]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">Fale com a gente</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-[#07111f] border border-white/10 rounded-2xl p-8 space-y-5">
              <h3 className="text-white font-black text-xl">Descreva sua necessidade</h3>
              {[
                { label: "Nome", name: "nome", type: "text", placeholder: "Seu nome ou empresa" },
                { label: "Telefone / WhatsApp", name: "telefone", type: "tel", placeholder: "(21) 99999-9999" },
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-semibold text-gray-300 mb-1.5">{f.label}</label>
                  <input type={f.type} name={f.name} value={(form as any)[f.name]} onChange={handleChange} required
                    placeholder={f.placeholder}
                    className="w-full bg-[#0d1f3c] border border-white/10 focus:border-[#F5B800]/60 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition" />
                </div>
              ))}
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-1.5">Mensagem</label>
                <textarea name="mensagem" value={form.mensagem} onChange={handleChange} required rows={4}
                  placeholder="Qual resistência você precisa? Informe o equipamento, potência, voltagem e urgência."
                  className="w-full bg-[#0d1f3c] border border-white/10 focus:border-[#F5B800]/60 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none transition resize-none" />
              </div>
              <button type="submit"
                className="w-full bg-[#F5B800] hover:bg-yellow-400 text-[#07111f] font-black py-3.5 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                <WaIcon className="w-5 h-5" />
                {enviado ? "Mensagem enviada! ✓" : "Enviar pelo WhatsApp"}
              </button>
              <p className="text-center text-xs text-gray-500">ou envie por e-mail: <a href={EMAIL_URL} className="text-[#F5B800] hover:underline">{EMAIL}</a></p>
            </form>

            <div className="space-y-3">
              {[
                { href: WA_URL, iconBg: "bg-green-900/50 text-green-400", icon: <WaIcon className="w-5 h-5" />, title: "WhatsApp", value: "(21) 96598-7979", sub: "Atendimento rápido" },
                { href: "tel:+552126208167", iconBg: "bg-blue-900/50 text-blue-400", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>, title: "Telefone Fixo", value: "(21) 2620-8167", sub: "Seg–Sex 8h às 18h · Sáb 8h às 12h" },
                { href: EMAIL_URL, iconBg: "bg-[#F5B800]/20 text-[#F5B800]", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>, title: "E-mail", value: EMAIL, sub: "Resposta em até 24h" },
                { href: MAPS_URL, iconBg: "bg-blue-900/50 text-blue-400", icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>, title: "Endereço", value: "Rua Visconde do Uruguai, 264", sub: "Centro – Niterói, RJ" },
                { href: GOOGLE_URL, iconBg: "bg-yellow-900/50 text-yellow-400", icon: <span className="text-base">⭐</span>, title: "Google Avaliações", value: "Ver no Google", sub: "Avaliações reais de clientes" },
                { href: IG_URL, iconBg: "bg-pink-900/50 text-pink-400", icon: <IgIcon className="w-5 h-5" />, title: "Instagram", value: "@rp_resistencias", sub: "Siga e veja novidades" },
                { href: FB_URL, iconBg: "bg-blue-900/50 text-blue-400", icon: <FbIcon className="w-5 h-5" />, title: "Facebook", value: "Casa RP Resistências", sub: "Curtiu? Deixa uma avaliação" },
                { href: SHOPEE_URL, iconBg: "bg-orange-900/50 text-orange-400", icon: <ShopeeIcon className="w-5 h-5" />, title: "Shopee", value: "shopee.com.br/casarp", sub: "Compre online com segurança" },
              ].map((c, i) => (
                <a key={i} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 bg-[#07111f] border border-white/5 hover:border-[#F5B800]/30 rounded-xl p-3.5 transition-all hover:shadow-md group">
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

      {/* ── FOOTER ── */}
      <footer className="bg-[#030c17] border-t border-[#F5B800]/20 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#F5B800] rounded flex items-center justify-center font-black text-[#07111f] text-xs transform rotate-45 shrink-0">
                <span className="-rotate-45">RP</span>
              </div>
              <div>
                <span className="text-white font-black tracking-wide block">CASA RP RESISTÊNCIAS ELÉTRICAS</span>
                <span className="text-[#F5B800] text-xs tracking-widest uppercase">Soluções que Aquecem</span>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">Rua Visconde do Uruguai, 264 – Centro, Niterói/RJ</p>
              <p className="text-gray-500 text-sm mt-0.5">
                <a href="tel:+552126208167" className="hover:text-white">(21) 2620-8167</a>
                {" · "}
                <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#F5B800]">(21) 96598-7979</a>
                {" · "}
                <a href={EMAIL_URL} className="hover:text-[#F5B800]">{EMAIL}</a>
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-400 transition-colors"><IgIcon className="w-5 h-5" /></a>
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors"><FbIcon className="w-5 h-5" /></a>
              <a href={SHOPEE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors"><ShopeeIcon className="w-5 h-5" /></a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors"><WaIcon className="w-5 h-5" /></a>
              <a href={GOOGLE_URL} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-yellow-400 transition-colors text-base">⭐</a>
            </div>
          </div>
          <div className="border-t border-white/5 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
            <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Casa RP Resistências Elétricas. Todos os direitos reservados.</p>
            <p className="text-[#F5B800] text-xs font-bold tracking-widest uppercase">🚚 Envio para todo o Brasil</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
