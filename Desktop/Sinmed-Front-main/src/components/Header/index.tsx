"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import SinmedLogo from "../../../public/images/sinmed-logo.svg";
import AffiliateButton from "../Buttons/AffiliateButton";
import Link from "next/link";
import { links } from "../links";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isJuridicoPage = pathname.includes('juridico'); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className={`${styles.headerContainer} ${inter.className} ${isJuridicoPage ? styles.whiteText + ' ' + styles.headerGray : ""}`}>
      <div className={styles.leftWrapper}>
        <Link href="/">
          <Image src={SinmedLogo} alt="Sinmed-Logo" />
        </Link>
      </div>

      <div className={styles.hamburgerMenu} onClick={toggleMenu}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <ul>
          {links.map((link) => (
            <li
              key={link.path}
              className={link.name === "Outros" ? styles.dropdownContainer : ""}
            >
              {link.name === "Outros" ? (
                <>
                  <Link
                    href={link.path}
                    className={pathname === link.path ? styles.active : ""}
                  >
                    {link.name}
                  </Link>
                  <ul className={link.name === "Outros" ? styles.secondDropdownMenu : ""}>
                    <div className={styles.dropdownWrapper}>
                      <div className={styles.singleColumn}>
                        <li>
                          <Link href="/noticias">
                            <div>
                              <span>Notícias</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/ouvidoria">
                            <div>
                              <span>Ouvidoria</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/beneficios">
                            <div>
                              <span>Benefícios</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/unimed">
                            <div>
                              <span>Unimed</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/diretoria">
                            <div>
                              <span>Diretoria</span>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link href="/estatuto">
                            <div>
                              <span>Estatuto</span>
                            </div>
                          </Link>
                        </li>
                      </div>
                    </div>
                  </ul>
                </>
              ) : (
                <Link
                  href={link.path}
                  className={pathname === link.path ? styles.active : ""}
                >
                  {link.name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.rightWrapper}>
        <AffiliateButton />
      </div>
    </header>
  );
}

export default Header;
