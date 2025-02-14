"use client";
import Header from "@/components/Header";
import styles from "./styles.module.scss";
import {
  MessageCircleMore,
  Megaphone,
  ThumbsUp,
  ThumbsDown,
  Search,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function OuvidoriaClient() {
  const router = useRouter();

  const handleCardClick = () => {
    router.push("./ouvidoria/registro");
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <Header />
        <main className={styles.mainContent}>
          <h1>Qual tipo de manifestação você deseja fazer?</h1>
          <h2>
            Selecione um dos tipos de manifestação abaixo para falar com a
            ouvidoria do Sinmed-AL
          </h2>
          <div className={styles.cardWrapper}>
            <div className={styles.card} onClick={handleCardClick}>
              <div className={styles.cardContent}>
                <div>
                  <Megaphone size={50} color="white" />
                </div>
                <b>
                  Fazer uma <br /> Denúncia
                </b>
                <p>
                  Informe um ato ilícito praticado em nossa <br />
                  unidade
                </p>
              </div>
            </div>
            <div className={styles.card} onClick={handleCardClick}>
              <div className={styles.cardContent}>
                <div className={styles.cardAlign}>
                  <ThumbsUp size={48} color="white" />
                </div>
                <b>
                  Fazer um <br /> Elogio
                </b>
                <p>Expresse se você está satisfeito com um atendimento nosso</p>
              </div>
            </div>
            <div className={styles.card} onClick={handleCardClick}>
              <div className={styles.cardContent}>
                <div>
                  <ThumbsDown size={50} color="white" />
                </div>
                <b>
                  Fazer uma <br /> Reclamação
                </b>
                <p>
                  Manifeste sua insatisfação com um serviço prestado pelo
                  Sinmed-AL
                </p>
              </div>
            </div>
            <div className={styles.card} onClick={handleCardClick}>
              <div className={styles.cardContent}>
                <div className={styles.cardAlign}>
                  <MessageCircleMore size={48} color="white" />
                </div>
                <b>
                  Fazer uma <br /> Sugestão
                </b>
                <p>
                  Envie uma ideia ou <br />
                  proposta de melhoria <br />
                  dos nosso serviços
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <section className={styles.consultingContainer}>
        <div className={styles.consultingContent}>
          <h2>Deseja consultar uma manifestação?</h2>
          <p>
            Informe o protocolo da Manifestação e o Código de Acesso abaixo para
            consultá-la
          </p>
          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <div className={styles.fullInput}>
                <label htmlFor="protocol">Protocolo</label>
                <input required name="protocol" type="number" />
              </div>
              <div className={styles.fullInput}>
                <label htmlFor="accesscode">Código de Acesso</label>
                <input required name="accesscode" type="number" />
              </div>
            </div>
            <button type="submit">
              Buscar
              <Search size={17} color="white" />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
