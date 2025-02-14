import Link from "next/link";
import styles from "./styles.module.scss";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link href="/" className={styles.backButton}>
      <ArrowLeft size={20} />
      <span>Voltar para a Home</span>
    </Link>
  );
}
