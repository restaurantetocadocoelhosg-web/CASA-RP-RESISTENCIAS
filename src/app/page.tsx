"use client";

import { useState } from "react";

const WHATSAPP_NUMBER = "5511999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site da Casa RP Resistências e gostaria de mais informações."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const products = [
  {
    icon: "🔥",
    name: "Resistências Tubulares",
    description:
      "Ideais para aquecimento de ar, óleo, água e outros fluidos. Alta durabilidade e eficiência energética.",
  },
  {
    icon: "⚡",
    name: "Resistências de Cartucho",
    description:
      "Perfeitas para aquecimento localizado em moldes, matrizes e ferramentas industriais.",
  },
  {
    icon: "🌊",
    name: "Resistências de Imersão",
    description:
      "Para aquecimento direto de líquidos em tanques, caldeiras e reservatórios industriais.",
  },
  {
    icon: "🌡️",
    name: "Termopares e Sensores",
    description:
      "Sensores de temperatura de alta precisão para controle e monitoramento de processos.",
  },
  {
    icon: "🎛️",
    name: "Controladores de Temperatura",
    description:
      "Controladores digitais e analógicos para automação e controle de processos térmicos.",
  },
  {
    icon: "🔩",
    name: "Resistências Blindadas",
    description:
      "Resistências robustas para ambientes agressivos, com proteção contra umidade e corrosão.",
  },
];

const diferenciais = [
  { icon: "🏭", label: "Mais de 20 anos de experiência no mercado" },
  { icon: "✅", label: "Produtos com garantia e qualidade certificada" },
  { icon: "🚚", label: "Entrega para todo o Brasil" },
  { icon: "🤝", label: "Atendimento técnico especializado" },
  { icon: "💡", label: "Soluções sob medida para sua necessidade" },
  { icon: "⏱️", label: "Pronta entrega e fabricação rápida" },
];

export default function Home() {
  const [form, setForm] = useState({ nome: "", telefone: "", mensagem: "" });
  const [enviado, setEnviado] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Me chamo ${form.nome}.\n${form.mensagem}\nTelefone: ${form.telefone}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setEnviado(true);
    setForm({ nome: "", telefone: "", mensagem: "" });
    setTimeout(() => setEnviado(false), 4000);
  }

  return (
    <main className="font-sans">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔌</span>
            <div>
              <span className="font-bold text-red-700 text-lg leading-tight block">
                Casa RP
              </span>
              <span className="text-xs text-gray-500 leading-tight block -mt-0.5">
                Resistências
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#produtos" className="hover:text-red-700 transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="hover:text-red-700 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="hover:text-red-700 transition-colors">
              Contato
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors flex items-center gap-2"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.836L.057 23.714c-.077.298.197.573.495.496l5.878-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.715.918.936-3.604-.234-.371A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
              </svg>
              WhatsApp
            </a>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden bg-green-500 text-white px-3 py-1.5 rounded-full text-sm font-medium"
          >
            WhatsApp
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-red-700/30 text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-red-700/50">
              Especialistas em Aquecimento Industrial
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Casa RP{" "}
              <span className="text-red-400">Resistências</span>
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8">
              Soluções completas em resistências elétricas industriais, elementos
              aquecedores e controle de temperatura. Qualidade, experiência e
              atendimento especializado para a sua empresa.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-green-900/30 flex items-center gap-3"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.836L.057 23.714c-.077.298.197.573.495.496l5.878-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.715.918.936-3.604-.234-.371A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                </svg>
                Fale pelo WhatsApp
              </a>
              <a
                href="#produtos"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/5"
              >
                Ver Produtos
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-red-600/20 rounded-full blur-3xl" />
              <div className="relative flex items-center justify-center w-full h-full">
                <div className="text-center">
                  <div className="text-8xl mb-4">⚡</div>
                  <div className="grid grid-cols-3 gap-3">
                    {["🔥", "🌡️", "🔩", "🎛️", "🌊", "💡"].map((e, i) => (
                      <div
                        key={i}
                        className="bg-white/10 backdrop-blur rounded-xl p-3 text-3xl border border-white/20 hover:bg-white/20 transition-colors"
                      >
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-red-700 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { num: "20+", label: "Anos de mercado" },
              { num: "500+", label: "Clientes atendidos" },
              { num: "100+", label: "Produtos disponíveis" },
              { num: "100%", label: "Satisfação garantida" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-bold">{stat.num}</div>
                <div className="text-red-200 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="produtos" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-700 font-semibold text-sm uppercase tracking-widest">
              Nossos Produtos
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Soluções para cada necessidade
            </h2>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Trabalhamos com uma ampla linha de resistências elétricas e
              componentes de aquecimento industrial para atender qualquer
              aplicação.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-gray-100 group"
              >
                <div className="text-5xl mb-5">{p.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-700 transition-colors">
                  {p.name}
                </h3>
                <p className="text-gray-500 leading-relaxed">{p.description}</p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-red-700 font-medium hover:text-red-800 text-sm"
                >
                  Solicitar orçamento
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-red-700 font-semibold text-sm uppercase tracking-widest">
                Sobre Nós
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Tradição e qualidade em resistências elétricas
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A Casa RP Resistências é uma empresa especializada em soluções de
                aquecimento elétrico industrial. Com mais de 20 anos de experiência
                no mercado, nos tornamos referência em qualidade, confiabilidade e
                atendimento técnico especializado.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Atendemos empresas dos mais variados segmentos industriais,
                oferecendo produtos padronizados e soluções customizadas para cada
                projeto. Do simples ao complexo, estamos prontos para encontrar a
                melhor solução para o seu processo.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Fale com um especialista
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {diferenciais.map((d, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-gray-50 rounded-xl p-4 border border-gray-100"
                >
                  <span className="text-2xl">{d.icon}</span>
                  <span className="text-gray-700 font-medium">{d.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Precisa de um orçamento rápido?
          </h2>
          <p className="text-red-200 text-lg mb-8">
            Entre em contato pelo WhatsApp e receba atendimento especializado
            imediatamente.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:scale-105 shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.836L.057 23.714c-.077.298.197.573.495.496l5.878-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.715.918.936-3.604-.234-.371A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
            </svg>
            Chamar no WhatsApp agora
          </a>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-red-700 font-semibold text-sm uppercase tracking-widest">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
              Entre em contato
            </h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Envie uma mensagem e nossa equipe responderá o mais breve possível.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            {/* Formulário */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Nome
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={form.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    value={form.telefone}
                    onChange={handleChange}
                    required
                    placeholder="(11) 99999-9999"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Mensagem
                  </label>
                  <textarea
                    name="mensagem"
                    value={form.mensagem}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Descreva o produto ou serviço que precisa..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.836L.057 23.714c-.077.298.197.573.495.496l5.878-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.715.918.936-3.604-.234-.371A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                  </svg>
                  {enviado ? "Mensagem enviada! ✓" : "Enviar pelo WhatsApp"}
                </button>
              </div>
            </form>

            {/* Info de contato */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-green-100 text-green-600 rounded-xl p-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.549 4.107 1.51 5.836L.057 23.714c-.077.298.197.573.495.496l5.878-1.453A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.006-1.374l-.36-.214-3.715.918.936-3.604-.234-.371A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">WhatsApp</div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700"
                  >
                    (11) 99999-9999
                  </a>
                  <div className="text-gray-500 text-sm mt-0.5">Atendimento rápido</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-red-100 text-red-600 rounded-xl p-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">E-mail</div>
                  <span className="text-red-700">contato@casarp.com.br</span>
                  <div className="text-gray-500 text-sm mt-0.5">Resposta em até 24h</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 rounded-xl p-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Localização</div>
                  <span className="text-gray-600">São Paulo, SP – Brasil</span>
                  <div className="text-gray-500 text-sm mt-0.5">Entrega para todo o Brasil</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-yellow-100 text-yellow-600 rounded-xl p-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Horário</div>
                  <span className="text-gray-600">Seg–Sex: 8h às 18h</span>
                  <div className="text-gray-500 text-sm mt-0.5">Sáb: 8h às 12h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔌</span>
              <span className="text-white font-bold">Casa RP Resistências</span>
            </div>
            <p className="text-sm">
              © {new Date().getFullYear()} Casa RP Resistências. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#produtos" className="hover:text-white transition-colors">
                Produtos
              </a>
              <a href="#sobre" className="hover:text-white transition-colors">
                Sobre
              </a>
              <a href="#contato" className="hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
