import styles from "./styles.module.scss";
import Image from "next/image";

export default function LeftWindow() {
  return (
    <div className={styles.leftWindowSide}>
      <div>
        <Image
          src="/images/sinmed-filiado-logo.png"
          alt="Logo do Sindicato dos Médicos de Alagoas"
          width={392}
          height={110}
        />
        <h1>Área do Filiado</h1>
      </div>
    </div>
  );
}
