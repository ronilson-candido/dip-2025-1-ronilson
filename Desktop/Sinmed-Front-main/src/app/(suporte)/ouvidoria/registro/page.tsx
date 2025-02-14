"use client";

import Header from "@/components/Header";
import styles from "./page.module.scss";
import Link from "next/link";
import { MoveRight, ArrowBigLeft } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";

export default function Registro() {
  const [isIdentifiedChecked, setIsIdentifiedChecked] = useState(false);
  const [isAnonymousChecked, setIsAnonymousChecked] = useState(false);
  const router = useRouter();

  const handleIdentifiedDivClick = () => {
    setIsIdentifiedChecked(!isIdentifiedChecked);
    setIsAnonymousChecked(false);
  };

  const handleAnonymousDivClick = () => {
    setIsAnonymousChecked(!isAnonymousChecked);
    setIsIdentifiedChecked(false);
  };

  const handleSubmit = () => {
    if (!isIdentifiedChecked && !isAnonymousChecked) {
      toast.error("Selecione uma das opções acima para prosseguir!");
    } else if (isIdentifiedChecked) {
      router.push("/ouvidoria/registro/identificado");
    } else {
      router.push("/ouvidoria/registro/anonimo");
    }
  };

  return (
    <main className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <section className={styles.registerSection}>
          <h1>Registro de Denúncia</h1>
          <h2>Qual categoria de manifestação deseja utilizar?</h2>
          <div className={styles.backBtn}>
            <Link href="/ouvidoria">
              <div>
                <ArrowBigLeft size={24} color="#226C5F" />
                <span>Voltar</span>
              </div>
            </Link>
          </div>
          <div className={styles.optionContainer}>
            <div onClick={handleIdentifiedDivClick}>
              <div className={styles.optionWrapper}>
                <b>Identificada</b>
                <p>
                  Seus dados pessoais poderão ser <br />
                  visualizados por quem fará o <br />
                  atendimento
                </p>
              </div>
              <input
                type="checkbox"
                checked={isIdentifiedChecked}
                onChange={() => setIsIdentifiedChecked(!isIdentifiedChecked)}
              />
            </div>
            <div onClick={handleAnonymousDivClick}>
              <div className={styles.optionWrapper}>
                <b>Anônima</b>
                <p>
                  Nenhum tipo de dado pessoal <br />
                  será solicitado
                </p>
              </div>
              <input
                type="checkbox"
                checked={isAnonymousChecked}
                onChange={() => setIsAnonymousChecked(!isAnonymousChecked)}
              />
            </div>
          </div>
          <hr />
          <div className={styles.btnWrapper}>
            <Toaster
              richColors
              toastOptions={{
                style: {
                  background: "#000000",
                  color: "white",
                },
              }}
            />
            <button onClick={handleSubmit}>
              Avançar
              <MoveRight size={24} color="white" />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
