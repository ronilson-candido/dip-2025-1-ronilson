import Image from "next/image";
import SinmedLogo from "../../../public/images/sinmed-logo.svg";
import InstagramLogo from "../../../public/icons/instagram-green-logo.svg";
import FacebookLogo from "../../../public/icons/facebook-green-logo.svg";
import { Mail, Phone } from "lucide-react";
import styles from "./styles.module.scss";
import Link from "next/link";

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.infoContent}>
        <Image src={SinmedLogo} alt="Sinmed Logo" />
        <p>Siga nossas Redes Sociais</p>
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMediaContent}>
            <a href="https://www.instagram.com/sinmedalagoas" target="_blank">
              <Image
                src={InstagramLogo}
                alt="Instagram Logo"
                height={22}
                width={22}
              />
            </a>
          </div>
          <div className={styles.socialMediaContent}>
            <a href="https://www.facebook.com/ascomsimed" target="_blank">
              <Image
                src={FacebookLogo}
                alt="Facebook Logo"
                height={22}
                width={22}
              />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerWrapper}>
        <div className={styles.footerContent}>
          <b>Recursos</b>
          <ul>
            <li>
              <Link href="/beneficios">
                <span>Benefícios</span>
              </Link>
            </li>
            <li>
              <Link href="/unimed">
                <span>Unimed</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerContent}>
          <b>Comunicação</b>
          <ul>
            <li>
              <Link href="/noticias">
                <span>Notícias</span>
              </Link>
            </li>
            <li>
              <Link href="/multimidia">
                <span>Fotos</span>
              </Link>
            </li>
            <li>
              <Link href="/multimidia">
                <span>Vídeos</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerContent}>
          <b>Suporte</b>
          <ul>
            <li>
              <Link href="/ouvidoria">
                <span>Ouvidoria</span>
              </Link>
            </li>
            <li>
              <Link href="/faleconosco">
                <span>Fale Conosco</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.footerContent}>
          <b>Contate-nos</b>
          <ul>
            <li className={styles.addressWrap}>
              R. Prof. Teonilo Gama, 186 - Trapiche da Barra - Maceió/AL <br />
              CEP: 57010-384
            </li>
            <li>
              <div className={styles.flexWrap}>
                <Phone size={15} />
                (82) 3221-0461
              </div>
            </li>
            <li>
              <div className={styles.flexWrap}>
                <Mail size={15} />
                comunicacao@sinmedal.com.br
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p>© Copyright 2024 SINMED-AL. Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;
