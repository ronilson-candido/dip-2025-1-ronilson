import { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Benefícios | SINMED-AL",
  description: "Página de Benefícios do Filiado",
};

export default function Beneficios() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.intro}>
          <h1>Conheça todos os nossos benefícios</h1>
          <Image
            src="/images/sinmedbeneficios.png"
            alt="Benefícios Sinmed"
            width={400}
            height={100}
          />
        </section>

        <section className={styles.section}>
          <h2>Alimentação</h2>
          <div className={styles.divider}></div>
          <div className={styles.images}>
            <Image
              src="/images/sal.png"
              alt="Imagem de benefício alimentação 1"
              width={150}
              height={100}
            />
            <Image
              src="/images/janga.png"
              alt="Imagem de benefício alimentação 2"
              width={150}
              height={100}
            />
            <Image
              src="/images/bodega.png"
              alt="Imagem de benefício alimentação 3"
              width={150}
              height={100}
            />
            <Image
              src="/images/rodeios.png"
              alt="Imagem de benefício alimentação 4"
              width={150}
              height={100}
            />
          </div>
        </section>

        <section className={styles.section}>
          <h2>Contabilidade</h2>
          <div className={styles.divider}></div>
          <div className={styles.images}>
            <Image
              src="/images/esac.png"
              alt="Imagem de benefício alimentação 1"
              width={150}
              height={100}
            />
            <Image
              src="/images/conduta.png"
              alt="Imagem de benefício alimentação 2"
              width={400}
              height={150}
            />
            <Image
              src="/images/mag.png"
              alt="Imagem de benefício alimentação 3"
              width={150}
              height={100}
            />
          </div>
        </section>
        <section className={styles.section}>
          <h2>Outros</h2>
          <div className={styles.divider}></div>
          <div className={styles.images}>
            <Image
              src="/images/escola.png"
              alt="Imagem de benefício alimentação 1"
              width={150}
              height={100}
            />
            <Image
              src="/images/arena.png"
              alt="Imagem de benefício alimentação 2"
              width={150}
              height={100}
            />
            <Image
              src="/images/premium.png"
              alt="Imagem de benefício alimentação 3"
              width={150}
              height={100}
            />
            <Image
              src="/images/cert.png"
              alt="Imagem de benefício alimentação 4"
              width={150}
              height={100}
            />
          </div>
        </section>
      </main>
    </div>
  );
}
