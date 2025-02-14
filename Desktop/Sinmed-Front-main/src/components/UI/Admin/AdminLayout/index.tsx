"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

import LoggedContainer from "../../AreaDoFiliado/logged-container";
import ContentWrapper from "../../AreaDoFiliado/content-wrapper";
import { usePathname } from "next/navigation";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  const getLinkClassName = (path: string) => {
    return ` ${isActive(path) ? styles.active : ""}`;
  };
  return (
    <LoggedContainer>
      <nav className={styles.profileOptions}>
        <header className={styles.adminHeader}>
          <Image
            src="/icons/admin-icon.svg"
            alt="Ícone de administrado"
            width={34}
            height={34}
          />
          <h3>Administrador</h3>
        </header>
        <button className={styles.exitBtn}>
          <Image
            src="/icons/exit-icon.svg"
            alt="Ícone de administrador"
            width={24}
            height={24}
          />
          Sair
        </button>

        <div className={styles.separator}></div>
        <p>Gerenciamento</p>
        <ul>
          <li>
            <Link
              href="/auth/admin/perfil"
              className={getLinkClassName("/auth/admin/perfil")}
            >
              <Image
                src="/icons/cadastros-icon.svg"
                alt="Ícone de cadastro"
                width={24}
                height={24}
              />
              Perfil
            </Link>
          </li>
          <li>
            <Link
              href="/auth/admin/financeiro"
              className={getLinkClassName("/auth/admin/financeiro")}
            >
              <Image
                src="/icons/cifrao-icon.svg"
                alt="Ícone de financeiro"
                width={24}
                height={24}
              />
              Financeiro
            </Link>
          </li>
          <li>
            <Link
              href="/auth/admin/usuarios"
              className={getLinkClassName("/auth/admin/usuarios")}
            >
              <Image
                src="/icons/users-round.svg"
                alt="Ícone de usuários"
                width={24}
                height={24}
              />
              Usuários
            </Link>
          </li>
        </ul>
        <div className={styles.footerSeparator}></div>
        <div>
          <Image
            src="/images/sinmed-blue-logo.png"
            alt="Ícone azul do Sinmed"
            width={196}
            height={53}
          />
        </div>
      </nav>
      <ContentWrapper>{children}</ContentWrapper>
    </LoggedContainer>
  );
}
