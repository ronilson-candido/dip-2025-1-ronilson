import styles from "./styles.module.scss";
import Image from "next/image";

export default function LeftWindowRec() {
  return (
    <div className={styles.leftWindowSide}>
      <div>
        <Image
          src="/images/sinmed-filiado-logo.png"
          alt="Logo do Sindicato dos Médicos de Alagoas"
          width={150}
          height={90}
        />
      </div>
    </div>
  );
}
