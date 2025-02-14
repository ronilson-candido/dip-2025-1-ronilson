import OuvidoriaClient from "@/components/UI/ouvidoria/ouvidoria-client";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ouvidoria | SINMED-AL",
  description:
    "Faça alguma sugestão ou reclamação do Sindicato dos Médicos de Alagoas",
};
export default function Ouvidoria() {
  return <OuvidoriaClient></OuvidoriaClient>;
}
