import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import Image from "next/image";

export const metadata: Metadata = {
  title: "História | SINMED-AL",
  description: "História do Sinmed Alagoas",
};

export default function Historia() {
  return (
    <>
      <section className={styles.openingFrame}>
        <Header />

        <div className={styles.openingFrameContent}>
          <h1>
            Saiba sobre o <br />
            <span> Sindicato dos Médicos de Alagoas </span>
          </h1>
        </div>
      </section>
      <section className={styles.descriptionContainer}>
        <div className={styles.descriptionContent}>
          <div>
            <h2>
              <span>
                Conheça mais <br /> sobre
              </span>{" "}
              nossa <br /> história
            </h2>
            <div className={styles.infoCard}>
              <div>
                <h3>Fundado em 1978</h3>
                <div>
                  <Image
                    src="/icons/doctor-icon.svg"
                    alt=""
                    width={29}
                    height={29}
                  />
                </div>
              </div>
              <p>
                Na década de 1970, médicos do serviço público estadual
                enfrentaram condições de trabalho precárias e baixos salários.
                Em busca das suas valorizações, alguns se reuniram e criaram o
                Sindicato dos Médicos de Alagoas.
              </p>
            </div>
          </div>
          <div className={styles.infoCard}>
            <div>
              <h3>Sede do Sindicato</h3>
              <div>
                <Image
                  src="/icons/building-icon.svg"
                  alt=""
                  width={26}
                  height={26}
                />
              </div>
            </div>
            <p>
              Inicialmente, o sindicato funcionava na antiga Fundação Governador
              Lamenha Filho (Funglaf), em uma sala improvisada. Depois, mudou-se
              para o Edifício Breda no centro. Atualmente, possui sede própria
              na Rua Teonilo Gama, 186, Trapiche da Barra, com auditório
              moderno, espaço cultural e gourmet.
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContent}>
              <div>
                <Image
                  src="/images/sinmed-photo.jpeg"
                  alt="Foto do Sindicato dos Médicos de Alagoas"
                  width={248}
                  height={182}
                />
              </div>
            </div>
            <div className={styles.imageContent}>
              <div>
                <Image
                  src="/images/sinmed-place.jpeg"
                  alt="Foto do Sindicato dos Médicos de Alagoas"
                  width={208}
                  height={182}
                />
              </div>
            </div>
          </div>
          <div className={styles.bottomInfo}>
            <p>
              Apesar dos grandes desafios, os membros continuam inspirados pela
              memória <br />
              de pioneiros como: <span>José Oscar de Mello</span>,{" "}
              <span>Júlio Bandeira</span>,<span> Henrique Pedrosa</span>, entre
              outros. <br />
              Desde o primeiro presidente,{" "}
              <span>Luiz Alberto Fonseca de Lima</span>, até o atual,{" "}
              <span>Marcos de Holanda Pessoa</span>, <br />o sindicato tem
              construído uma trajetória vitoriosa.
            </p>
            <p>
              Embora os desafios persistam, é inegável o progresso <br />
              alcançado ao longo dos últimos quarenta anos
            </p>
          </div>
        </div>
      </section>
      <section className={styles.detailsContainer}>
        <div className={styles.detailsContent}>
          <div>
            <h2>Missão</h2>
            <p>
              Defender a categoria médica buscando a valorização do trabalho
              através da união, mobilização, ética e comunicação com os
              gestores.
            </p>
          </div>
          <div className={styles.infoWrapper}>
            <div>
              <h2>Visão</h2>
              <p>
                Ser um sindicato forte,
                <br /> reconhecido e independente.
              </p>
            </div>
            <div>
              <h2>Valores</h2>
              <p>
                Ética, respeito, legitimidade,
                <br /> comprometimento,
                <br /> transparência e parcerias.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
