"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "./styles.module.scss";

export default function FiliateChangeButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isLoginRoute = pathname === "/login";
  const isRegisterRoute = pathname === "/registro";

  return (
    <div className={styles.changeArea}>
      <button
        className={isLoginRoute ? styles.activeButton : styles.inactiveButton}
        onClick={() => router.push("/login")}
      >
        Entrar
      </button>
      <button
        className={
          isRegisterRoute ? styles.activeButton : styles.inactiveButton
        }
        onClick={() => router.push("/registro")}
      >
        Filie-se
      </button>
    </div>
  );
}
