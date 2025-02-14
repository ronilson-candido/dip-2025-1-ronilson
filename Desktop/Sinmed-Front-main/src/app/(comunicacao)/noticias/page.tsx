import Header from "@/components/Header";
import { Poppins } from "next/font/google";
import styles from "./page.module.scss";

import { Metadata } from "next";
import NewsContent from "./_components/NewsContent";

export const metadata: Metadata = {
  title: "Notícias | SINMED-AL",
  description: "Notícias do Sinmed Alagoas",
};

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function Noticias() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.content} ${poppins.className}`}>
        <div>
          <h1>Últimas Notícias</h1>
        </div>
        <div className={styles.separator}></div>
        <NewsContent />
      </main>
    </div>
  );
}
