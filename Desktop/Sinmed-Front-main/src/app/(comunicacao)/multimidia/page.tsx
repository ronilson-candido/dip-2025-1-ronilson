import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import { Lexend } from "next/font/google";

export const metadata: Metadata = {
  title: "Multimídia | SINMED-AL",
  description: "Multimídia | SINMED-AL",
};

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "700"] });

export default function Multimidia() {
  return (
    <div className={styles.containerWrapper}>
      <Header />
      <main className={styles.mainContent}>
        <div className={styles.multimediaHeading}>
          <h1 className={lexend.className}>Multimídia</h1>
        </div>
        <section className={styles.infoGrid}></section>
      </main>
    </div>
  );
}
