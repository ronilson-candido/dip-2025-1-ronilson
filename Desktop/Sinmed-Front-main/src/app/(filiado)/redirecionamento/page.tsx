import { ArrowRight } from "lucide-react";
import styles from "./page.module.scss";
import RecadastramentoBackground from "@/components/UI/AreaDoFiliado/recadastramento";
import { Lexend } from "next/font/google";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { formatStringAsNumber } from "@/utils/number-format";
import AtualizacaoCadastralClient from "@/components/UI/AreaDoFiliado/atualizacao-cadastral";

export const metadata: Metadata = {
  title: "Atualização Cadastral | SINMED-AL",
  description:
    "Mantenha seus dados atualizados no novo sistema do Sindicado dos Médicos de Alagoas",
};

export default function Redirecionamento() {
  return <AtualizacaoCadastralClient></AtualizacaoCadastralClient>;
}
