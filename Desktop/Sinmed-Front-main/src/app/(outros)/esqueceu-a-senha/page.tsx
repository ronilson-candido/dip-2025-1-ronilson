import FiliadoContainer from "@/components/UI/AreaDoFiliado/filiado-container";
import styles from "./page.module.scss";
import FiliadoContainerRec from "@/components/UI/AreaDoFiliado/filiado-container-rec";
import Recadastramento from "@/components/UI/AreaDoFiliado/recadastramento";
import RecadastramentoBackground from "@/components/UI/AreaDoFiliado/recadastramento";
import Image from "next/image";
import { Lexend } from "next/font/google";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Recuperação de Senha | SINMED-AL",
  description: "Recupere sua senha de login do Sinmed Alagoas",
};

export default function EsqueceuASenha() {
  return (
    <RecadastramentoBackground>
      <div className={`${styles.firstWrapper} ${lexend.className}`}>
        <Image
          src="/images/sinmed-logo.svg"
          alt="Foto do Sindicato dos Médicos de Alagoas"
          width={217}
          height={62}
        />
        <h1>Recuperação de Senha</h1>
        <div className={lexend.className}>
          <p className={lexend.className}>
            Insira seu email para prosseguir com a recuperação de sua senha
          </p>
          <input type="email" className={styles.input} />
        </div>
        <button>
          Avançar
          <ArrowRight size={20} />
        </button>
      </div>
    </RecadastramentoBackground>
  );
}
