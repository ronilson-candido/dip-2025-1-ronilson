import styles from "./page.module.scss";
import Image from "next/image";
import Header from "@/components/Header";
import HomeButton from "@/components/Buttons/HomeButton";
import DropButton from "@/components/Buttons/DropButton";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { Lexend } from "next/font/google";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { Loader } from "@/components/Loaders/ReqLoader";
import ReqModal from "@/components/Modals/ReqModal";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <main className={`${styles.mainContent} ${lexend.className}`}>
          <Image
            className={styles.sinmedLogo}
            src="/images/logo-foda_optimized.png"
            alt="Logo do Sindicato Dos Médicos de Alagoas"
            width={562}
            height={164}
            quality={100}
          />
          <h1 className={lexend.className}>
            Atualização cadastral em andamento! Aproveite <br /> para revisar
            suas informações e garantir seu acesso <br />
            aos novos recursos.{" "}
          </h1>
          <p className={lexend.className}>
            Estamos quase lá! Atualize seus dados enquanto preparamos algo{" "}
            <br />
            especial para você.{" "}
            <span>
              Prepare-se para a futura plataforma que será feita pelo Sinmed-AL.{" "}
            </span>{" "}
          </p>
          <Link href="/redirecionamento">
            <button className={lexend.className}>
              Iniciar Atualização <ArrowRight size={20} />
            </button>
          </Link>
          <Image
            className={styles.medicPhoto}
            src="/images/medico-home.png"
            alt="Foto tipo animação de um médico"
            width={236}
            height={378}
            quality={100}
          />
        </main>
      </div>
    </>
  );
}
