import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";

export default function ReadMoreButton({ id }: { id: string }) {
  return (
    <Link href={`/noticias/${id}`}>
      <button className={styles.btn}>Ler mais</button>
    </Link>
  );
}
