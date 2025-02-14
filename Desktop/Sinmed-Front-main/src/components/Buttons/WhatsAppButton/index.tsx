"use client";

import Image from "next/image";
import styles from "./styles.module.scss";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.location.href =
      "https://wa.me/5582993228087?text=Olá, gostaria de obter mais informações sobre os planos da Unimed";
  };

  return (
    <button className={styles.whatsAppButton} onClick={handleWhatsAppClick}>
      <Image
        src="/icons/whatsapp-icon.svg"
        alt="WhatsApp Logo"
        width={36}
        height={36}
      />
      <b>Clique aqui</b>
    </button>
  );
};

export default WhatsAppButton;
