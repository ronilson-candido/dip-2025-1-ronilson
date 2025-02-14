import { Metadata } from "next";
import Header from "@/components/Header";
import styles from "./page.module.scss";
import Image from "next/image";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Fale Conosco | SINMED-AL",
  description: "Fale Conosco - Sinmed Alagoas",
};

export default function FaleConosco() {
  return (
    <div className={styles.containerWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <section className={styles.infoGrid}>
          <div>
            <Image
              src="/icons/address-icon.svg"
              alt="Ícone de endereço"
              width={52}
              height={52}
            />
            <b>
              Nossa <br />
              Localização
            </b>
            <p>
              R. Prof. Teonilo Gama, 186 - Trapiche da Barra Maceió/AL CEP:
              57010-384
            </p>
          </div>
          <div>
            <Phone size={52} color="#89D7E4" />
            <b>
              Número de <br />
              telefone
            </b>
            <p>(82) 3221-0461</p>
          </div>
          <div>
            <Image
              src="/icons/schedule-icon.svg"
              alt="Ícone de horário"
              width={52}
              height={52}
            />
            <b>Horários</b>
            <div className={styles.spanWrapper}>
              <div>
                <span>
                  Segunda a quinta-feira <br />
                </span>
                09 às 16h{" "}
              </div>
              <div>
                <span className={styles.secondSpan}>
                  <br />
                  Sexta-feira <br />
                </span>{" "}
                09 às 14h
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/icons/email-icon.svg"
              alt="Ícone de email"
              width={52}
              height={52}
            />
            <b>Email</b>
            <p>comunicacao@sinmedal.com.br</p>
          </div>
        </section>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <h1>Entre em contato conosco</h1>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input required name="email" id="email" type="text" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="textarea">Como podemos lhe ajudar?</label>
              <textarea required cols={50} rows={10} defaultValue="" />
            </div>
            <button type="submit" className={styles.formSubmitBtn}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
