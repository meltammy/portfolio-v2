import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../../style/index.scss";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "400", "500", "600", "700"], // ajuste conforme necessário
});

export const metadata: Metadata = {
  title: "Melissa Tammy | Desenvolvedora Frontend e Full Stack",
  description:
    "Conheça os projetos de Melissa Tammy, desenvolvedora web com atuação em frontend e backend, criando interfaces eficientes e aplicações escaláveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="dark">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
