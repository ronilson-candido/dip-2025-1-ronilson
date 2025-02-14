import Image from "next/image";
import PersonIcon from "../../../../public/icons/person-icon.svg";
import styles from "./styles.module.scss";
import Link from "next/link";

function AffiliateButton() {
  return (
    <Link href="/login">
      <button className={styles.affiliateButton}>
        Área do Filiado
        <Image className={styles.img} src={PersonIcon} alt="Filiado Icon" />
      </button>
    </Link>
  );
}

export default AffiliateButton;
