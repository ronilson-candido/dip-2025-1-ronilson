"use client";
import styles from "./styles.module.scss";
import RecadastramentoBackground from "@/components/UI/AreaDoFiliado/recadastramento";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Lexend } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "700"] });

export default function BemVindoClient() {
  const searchParams = useSearchParams();
  const name = searchParams.get("nome");
  const cpf = searchParams.get("cpf");
  const router = useRouter();

  const getFormattedName = (fullName: string | null) => {
    if (!fullName) return "";

    const firstName = fullName.split(" ")[0];
    return `Dr(a) ${firstName.charAt(0).toUpperCase()}${firstName
      .slice(1)
      .toLowerCase()}`;
  };

  const formattedName = name
    ? getFormattedName(decodeURIComponent(name))
    : "Dr(a).";

  return (
    <RecadastramentoBackground>
      <div className={`${styles.firstWrapper} ${lexend.className}`}>
        <Image
          src="/images/sinmed-green-logo.png"
          alt="Foto do Sindicato dos Médicos de Alagoas"
          width={217}
          height={62}
        />
        <div>
          <h1 className={lexend.className}>
            Seja muito bem-vindo(a), {formattedName}
          </h1>
          <p className={`${styles.description} ${lexend.className}`}>
            Revise suas informações para aproveitar todos os recursos <br /> da
            nova plataforma
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <Link href="/redirecionamento">
            <button className={styles.backButton}>
              <ArrowLeft size={20} />
              Voltar
            </button>
          </Link>
          <Link
            href={{
              pathname: "/cadastro",
              query: { cpf: cpf, nome: name },
            }}
          >
            <button className={styles.confirmButton}>
              Confirmar
              <ArrowRight size={20} />
            </button>
          </Link>
        </div>
      </div>
    </RecadastramentoBackground>
  );
}
