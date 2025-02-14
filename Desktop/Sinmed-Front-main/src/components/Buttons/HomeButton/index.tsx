import Link from "next/link";
import styles from "./styles.module.scss";

function HomeButton() {
  return (
    <Link href="/beneficios">
      <button className={styles.btn}>Saiba mais</button>
    </Link>
  );
}

export default HomeButton;
