import BemVindoClient from "@/components/UI/AreaDoFiliado/atualizacao-cadastral/bem-vindo";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Bem Vindo | SINMED-AL",
  description: "Bem vindo ao novo site do Sindicato dos Médicos de Alagoas",
};

export default function BemVindo() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <BemVindoClient />
    </Suspense>
  );
}
