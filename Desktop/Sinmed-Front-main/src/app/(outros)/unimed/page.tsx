import { Metadata } from "next";
import styles from "./page.module.scss";
import Header from "@/components/Header";
import { Lato } from "next/font/google";
import Image from "next/image";
import WhatsAppButton from "@/components/Buttons/WhatsAppButton";
import { Download, CheckCheck, CircleUserRound } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Unimed | SINMED-AL",
  description: "Planos Unimed Sinmed-Alagoas",
};

const lato = Lato({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
});

export default function Unimed() {
  return (
    <main className={styles.mainContainer}>
      <section className={styles.contractContainer}>
        <Header />
        <section className={styles.contractContent}>
          <div className={styles.initialInfo}>
            <div>
              <h1>PLANO DE SAÚDE UNIMED MACEIÓ</h1>
              <p>
                Você pode contratar um plano de <br />
                saúde nacional da Unimed Maceió. <br />
                <span>Aproveite essa oportunidade!</span>
              </p>
            </div>
            <Image
              src="/images/unimed.png"
              alt="Logo da Unimed"
              width={349}
              height={149}
            />
          </div>
          <div className={styles.contractInfo}>
            <div className={styles.leftWrapper}>
              <div>
                Quem está apto a contratar?
                <CheckCheck size={23} color="#3a9de4" />
              </div>
              <div>
                Qualquer filiado da SINMED-AL <br />e seus dependentes.
                <CheckCheck size={23} color="#3a9de4" />
              </div>
              <div>
                Onde eu consigo mais informações?
                <CheckCheck size={23} color="#3a9de4" />
              </div>
              <a href="https://wa.me/5582993228087?text=Olá, gostaria de obter mais informações sobre os planos da Unimed">
                <div>
                  <CircleUserRound size={35} color="var(--text-green)" />
                  <b>
                    Representante <br />
                    Unimed
                  </b>
                </div>
                <div className={styles.leftWrapperSeparator}></div>
                <p>
                  Conversar com <br />
                  <span>Escritório Representante</span>
                </p>
              </a>
            </div>
            <div className={styles.rightWrapper}>
              <div>
                <h2>Como contratar?</h2>
                <p>
                  No escritório representante da Elo Administradora,
                  <br /> de <span>segunda-feira a sexta-feira</span>, das{" "}
                  <span>8hs às 17hs.</span>
                </p>
              </div>
              <div className={styles.contactWrapper}>
                <p>Mais informações pelos telefones:</p>
                <div className={styles.contactInfo}>
                  <a href="tel:+558232418334">(82) 3241-8334 </a>
                  <div className={styles.separator}></div>
                  <a href="tel:+558232411122">3241-1122</a>
                  <div className={styles.separator}></div>
                  <a href="tel:+5582993228087">99322-8087</a>
                </div>
              </div>
              <div className={styles.whatsapp}>
                <p>Ou fale conosco pelo WhatsApp:</p>
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className={styles.archivesContainer}>
        <div className={styles.archivesContent}>
          <div>
            <h3>
              Saiba mais sobre o manual de orientação <br />
              para contratação do plano de saúde
            </h3>
            <a href="/GLC-e-Manual.pdf" download="GLC e Manual">
              GLC e MPS
              <Download size={21} />
            </a>
          </div>
          <div className={styles.archivesSeparator}></div>
          <div>
            <h3>
              Planos <br />
              Oferecidos
            </h3>
            <a
              href="/Tabela-de-Precos-SINMED-AL.pdf"
              download="Tabela de Preços SINMED-AL"
            >
              Tabela de Preços
              <Download size={21} />
            </a>
          </div>
        </div>
      </section>
      <section className={styles.documentSection}>
        <div className={styles.documentSectionContent}>
          <h2>Confira os Documentos Necessários</h2>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <h3>Titular</h3>
              <ol>
                <li>Número do CPF</li>
                <li>RG ou CNH</li>
                <li>Comprovante de vínculo com a entidade</li>
                <li>Comprovante de residência emitido há menos de 90 dias</li>
              </ol>
            </div>
            <div className={styles.card}>
              <h3>Dependentes</h3>
              <ol>
                <li>Número do CPF</li>
                <li>RG, CNH ou Certidão de Nascimento </li>
                <li>
                  Certidão de casamento ou declaração pública de união estável
                  expedida por cartório.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.portalSection}>
        <div className={styles.portalSectionContent}>
          <h2>
            Acesse agora o{" "}
            <Link href="https://sinmedal.ctesk.com.br/minha-conta/">
              <span>Portal do Cliente</span>
            </Link>
          </h2>
          <p>
            No Portal do Cliente, você tem acesso aos seguintes serviços e
            informações:
          </p>
          <ul>
            <li>Boletos</li>
            <li>Matrícula</li>
            <li>Inclusão de Dependente</li>
            <li>Cancelamento</li>
            <li>Alteração do Plano</li>
            <li>Fale Conosco</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
