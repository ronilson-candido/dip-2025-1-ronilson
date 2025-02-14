"use client";

import Header from "@/components/Header";
import styles from "./page.module.scss";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { useState } from "react";
import { Toaster, toast } from "sonner";

export default function Registro() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState(""); 
  const [registroType, setRegistroType] = useState("");

  const handleSubmit = () => {
    if (!subject || !message || !email || !registroType) {
      toast.error("Por favor, preencha todos os campos!");
      return;
    }

 
    toast.success("Registro enviado com sucesso!");

    setSubject("");
    setMessage("");
    setEmail("");
    setRegistroType("");
  };

  const getTitleAndDescription = () => {
    switch (registroType) {
      case "elogio":
        return {
          title: "Registro de Elogio",
          description: "Preencha os dados para efetuar seu elogio",
        };
      case "reclamacao":
        return {
          title: "Registro de Reclamação",
          description: "Preencha os dados para efetuar sua reclamação",
        };
      case "sugestao":
        return {
          title: "Registro de Sugestão",
          description: "Preencha os dados para efetuar sua sugestão",
        };
      default:
        return {
          title: "Registro de Denúncia",
          description: "Preencha os dados para efetuar sua denúncia",
        };
    }
  };

  const { title, description } = getTitleAndDescription();

  return (
    <main className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <section className={styles.registerSection}>
          <h1>{title}</h1>
          <h2>{description}</h2>
          <div className={styles.backBtn}>
            <Link href="/ouvidoria">
              <div>
                <ArrowBigLeft size={24} color="#226C5F" />
                <span>Voltar</span>
              </div>
            </Link>
          </div>
          <div className={styles.formContainer}>
            <div className={styles.inputWrapper}>
              <label htmlFor="subject">Assunto</label>
              <input
                type="text"
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Digite o assunto"
                required
              />
            </div>

            {}
            <div className={styles.inputWrapper}>
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className={styles.inputWrapper}>
              <label htmlFor="message">Fale a situação que deseja informar</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descreva a situação detalhadamente"
                required
              />
            </div>

            {}
            <div className={styles.radioWrapper}>
              <label>Tipo de registro</label>
              <div className={styles.radioOptions}>
                <div>
                  <input
                    type="radio"
                    id="denuncia"
                    name="registro"
                    value="denuncia"
                    checked={registroType === "denuncia"}
                    onChange={(e) => setRegistroType(e.target.value)}
                  />
                  <label htmlFor="denuncia">Denúncia</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="elogio"
                    name="registro"
                    value="elogio"
                    checked={registroType === "elogio"}
                    onChange={(e) => setRegistroType(e.target.value)}
                  />
                  <label htmlFor="elogio">Elogio</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="reclamacao"
                    name="registro"
                    value="reclamacao"
                    checked={registroType === "reclamacao"}
                    onChange={(e) => setRegistroType(e.target.value)}
                  />
                  <label htmlFor="reclamacao">Reclamação</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="sugestao"
                    name="registro"
                    value="sugestao"
                    checked={registroType === "sugestao"}
                    onChange={(e) => setRegistroType(e.target.value)}
                  />
                  <label htmlFor="sugestao">Sugestão</label>
                </div>
              </div>
            </div>

            <div className={styles.btnWrapper}>
              <Toaster
                richColors
                toastOptions={{
                  style: {
                    background: "#2da590",
                    color: "white",
                  },
                }}
              />
              <button onClick={handleSubmit}>
                Enviar Registro
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
