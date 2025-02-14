import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import { Download } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Estatuto | SINMED-AL",
  description: "Estatuto - Sinmed Alagoas",
};

export default function Estatuto() {
  return (
    <main className={styles.mainContainer}>
      <Header />
      <div>
        <h1>
          Tenha acesso a nosso <span>Estatuto Vigente</span>
        </h1>
        <Image
          src="/images/separator.png"
          alt="Seta Separadora"
          width={993}
          height={11}
        />
        <a href="/Estatuto-SinmedAL.pdf" download="Estatuto Sinmed-AL">
          <span>Estatuto Sinmed-AL 2024</span>
          <Download size={21} strokeWidth={2.5} />
        </a>
        <div>
          <Image
            src="/images/doctor-animated.png"
            alt="Imagem de animação de um médico"
            width={375}
            height={253}
          />
        </div>
      </div>
    </main>
  );
}
