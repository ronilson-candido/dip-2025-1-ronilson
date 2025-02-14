import Header from "@/components/Header";
import Image from "next/image";
import styles from "./Juridico.module.scss";
import { Metadata } from "next";
import { Lato, Lexend, Manrope } from "next/font/google";

export const metadata: Metadata = {
  title: "Jurídico | SINMED-AL",
  description: "Conheça sobre o jurídico do Sindicato dos Médicos de Alagoas",
};

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Juridico() {
  return (
    <div className={styles.juridicoContainer}>
      <Header />
      <div className={styles.rectangle}>
        <p className={lexend.className}>
          Somos seu apoio jurídico em todas as etapas da sua carreira médica.
        </p>
        <div className={styles.rectangle2}>
          <h3 className={lexend.className}>Diretrizes</h3>
          <div className={styles.btnWrapper}>
            <button className={`${styles.button} ${manrope.className}`}>
              Termos de Consentimento
            </button>
            <button className={`${styles.button} ${manrope.className}`}>
              Informes Jurídicos
            </button>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.square}>
            <h1 className={`${styles.title} ${lexend.className}`}>
              Conheça nossa equipe
            </h1>
            <div className={styles.teamGrid}>
              <div className={styles.teamMember1}>
                <Image
                  src="/images/Thaisa.png"
                  alt="Thaisa Gameleira"
                  width={207}
                  height={273}
                  className={styles.teamImage}
                />
              </div>
              <div className={styles.teamMember2}>
                <Image
                  src="/images/Ednaldo.png"
                  alt="Ednaldo Maiorano"
                  width={207}
                  height={273}
                  className={styles.teamImage}
                />
              </div>
              <div className={styles.teamMember3}>
                <Image
                  src="/images/Renata.png"
                  alt="Renata Almeida"
                  width={207}
                  height={273}
                  className={styles.teamImage}
                />
              </div>
              <div className={styles.teamMember4}>
                <Image
                  src="/images/Felipe.png"
                  alt="Felipe Bruno Calheiros"
                  width={207}
                  height={273}
                  className={styles.teamImage}
                />
              </div>
            </div>
          </div>
          <div className={styles.specialties}>
            <h3 className={lexend.className}>Nossas Especialidades</h3>
            <div className={styles.secondBtnWrapper}>
              <button className={`${styles.button3} ${manrope.className}`}>
                Direito Médico
              </button>
              <button className={`${styles.button3} ${manrope.className}`}>
                Direito Público e Civil
              </button>
              <button className={`${styles.button3} ${manrope.className}`}>
                Direito Previdenciário
              </button>
            </div>
          </div>
        </div>

        <div className={styles.rectangle3}>
          <div className={styles.attendanceSection}>
            <h4 className={`${styles.attendanceTitle} ${lexend.className}`}>
              Atendimento
            </h4>
            <p className={`${styles.mainText} ${lato.className}`}>
              Para ter acesso à equipe jurídica, você pode ir até a{" "}
              <a
                href="https://www.google.com/maps/place/SINMED+-+Sindicato+dos+M%C3%A9dicos+de+Alagoas/@-9.6824205,-35.7468351,17z/data=!3m1!4b1!4m6!3m5!1s0x701459fd8ef404d:0xd582be407a9cc4fc!8m2!3d-9.6824205!4d-35.7446464!16s%2Fg%2F1tdn7w4r"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.highlightLink}
              >
                sede do sindicato
              </a>
              .
            </p>
            <p className={`${styles.subText} ${lato.className}`}>
              Além disso, os advogados também fazem serviços externos, um
              exemplo é o<br />
              acompanhamento das audiências nos Tribunais e no Conselho de
              Medicina.
            </p>
            <p className={`${styles.importantText} ${lato.className}`}>
              Por conta disso, é recomendável{" "}
              <a className={styles.highlightLink2}>agendar</a> o <br />
              atendimento com os Doutores.
            </p>
            <p className={`${styles.footerText} ${lato.className}`}>
              Estes que trabalham tanto em ações individuais, analisando a
              particularidade de
              <br />
              cada caso, quanto em demandas coletivas, aquelas que envolvem
              interesses de
              <br />
              grupos de médicos da rede pública e privada.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
