import { ReactNode } from "react";
import styles from "./styles.module.scss";
import BackButton from "@/components/Buttons/BackButton";

export default function FiliadoContainer({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className={styles.mainContainer}>
      <BackButton />
      <main className={styles.mainContent}>{children}</main>
    </section>
  );
}
