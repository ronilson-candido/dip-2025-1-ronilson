import { ReactNode } from "react";
import styles from "./styles.module.scss";

export default function LoggedContainer({ children }: { children: ReactNode }) {
  return (
    <section className={styles.mainContainer}>
      <main className={styles.mainContent}>{children}</main>
    </section>
  );
}
