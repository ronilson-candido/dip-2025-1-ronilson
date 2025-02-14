import LeftWindowRec from "@/components/UI/AreaDoFiliado/LeftLoginWindowRec";
import styles from "./page.module.scss";
import FiliadoContainerRec from "@/components/UI/AreaDoFiliado/filiado-container-rec";
import RegisterFormRec from "@/components/Forms/RegisterFormRec";
import { Metadata } from "next";
import RecadastramentoClient from "@/components/UI/AreaDoFiliado/recadastramento-client";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Cadastro | SINMED-AL",
  description: "Página de cadastro do Sindicato dos Médicos de Alagoas",
};

export default function Registro() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <RecadastramentoClient />
    </Suspense>
  );
}
