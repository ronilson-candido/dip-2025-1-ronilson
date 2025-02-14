"use client";
import ContentWrapper from "@/components/UI/AreaDoFiliado/content-wrapper";
import styles from "./styles.module.scss";
import LoggedContainer from "@/components/UI/AreaDoFiliado/logged-container";
import { useState } from "react";
import Image from "next/image";

export default function FiliadoClient() {
  const [activeTab, setActiveTab] = useState<string>("default");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "perfil":
        return <div>Conteúdo de Perfil</div>;
      case "eventos":
        return <div>Conteúdo de Eventos</div>;
      case "agendamento":
        return <div>Conteúdo de Agendamento</div>;
      case "filiação":
        return <div>Conteúdo de Filiação</div>;
      case "benefícios":
        return <div>Conteúdo de Benefícios</div>;
      default:
        return (
          <div className={styles.background}>
            <h3>Bem vindo à Área do Marketing</h3>
            <div>
              <Image
                src="/images/sinmed-blue-logo.png"
                alt="Ícone azul do Sinmed"
                width={477}
                height={132}
              />
            </div>
          </div>
        );
    }
  };

  return (
    <LoggedContainer>
      <div className={styles.profileOptions}>
        <section className={styles.adminHeader}>
          <Image
            src="/icons/admin-icon.svg"
            alt="Ícone de administrado"
            width={34}
            height={34}
          />
          <div className={styles.profileInfo}>
            <h3>Milton de Moraes</h3>
            <h4>CRM 0000000-0/BR</h4>
          </div>
        </section>
        <button
          className={styles.exitBtn}
          onClick={() => handleTabChange("perfil")}
        >
          <Image
            src="/icons/user-icon.svg"
            alt="Ícone de administrador"
            width={26}
            height={26}
          />
          Ver Perfil
        </button>
        <button className={styles.exitBtn}>
          <Image
            src="/icons/exit-icon.svg"
            alt="Ícone de administrador"
            width={26}
            height={26}
          />
          Sair
        </button>

        <div className={styles.separator}></div>
        <p>Gerenciamento</p>
        <button onClick={() => handleTabChange("eventos")}>
          <Image
            src="/icons/eventos-icon.svg"
            alt="Ícone de logout"
            width={26}
            height={26}
          />
          Eventos
        </button>
        <button onClick={() => handleTabChange("agendamento")}>
          <Image
            src="/icons/agendamento-icon.svg"
            alt="Ícone de cadastro"
            width={26}
            height={26}
          />
          Agendamento
        </button>
        <p>Financeiro</p>
        <button onClick={() => handleTabChange("filiação")}>
          <Image
            src="/icons/financeiro-icon.svg"
            alt="Ícone de cadastro"
            width={26}
            height={26}
          />
          Filiação
        </button>
        <p>Mais</p>
        <button onClick={() => handleTabChange("benefícios")}>
          <Image
            src="/icons/receba.svg"
            alt="Ícone de cadastro"
            width={26}
            height={26}
          />
          Benefícios
        </button>
        <div className={styles.footerSeparator}></div>
        <div>
          <Image
            src="/images/sinmed-blue-logo.png"
            alt="Ícone azul do Sinmed"
            width={196}
            height={53}
          />
        </div>
      </div>
      <ContentWrapper>{renderContent()}</ContentWrapper>
    </LoggedContainer>
  );
}
