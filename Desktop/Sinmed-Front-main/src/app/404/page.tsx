import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.scss";

export default function NotFoundPage() {
  return (
    <main className={styles.notFoundContainer}>
      <div className={styles.notFoundContent}>
        <Image
          src="/images/404-medic.png"
          alt="Página não encontrada"
          width={529}
          height={353}
        />
        <h1>Página não encontrada!</h1>
        <p>Não foi possível carregar essa página.</p>

        <Link href="/">
          <button className={styles.redirectButton}>
            Clique aqui para ser redirecionado
          </button>
        </Link>
      </div>
    </main>
  );
}
