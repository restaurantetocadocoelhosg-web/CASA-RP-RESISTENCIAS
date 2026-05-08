import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Casa RP Resistências | Soluções em Aquecimento Industrial",
  description:
    "Especialistas em resistências elétricas industriais, elementos aquecedores, termopares e controladores de temperatura. Qualidade e atendimento que você pode confiar.",
  keywords:
    "resistências elétricas, resistências industriais, aquecimento industrial, termopares, controladores de temperatura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
