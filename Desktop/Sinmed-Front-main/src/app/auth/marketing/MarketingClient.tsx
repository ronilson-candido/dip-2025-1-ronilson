"use client";
import ContentWrapper from "@/components/UI/AreaDoFiliado/content-wrapper";
import styles from "./styles.module.scss";
import LoggedContainer from "@/components/UI/AreaDoFiliado/logged-container";
import { useState } from "react";

import Image from "next/image";
import { convertFileToBase64 } from "@/utils/imageUtils";
import { Base64Format } from "@/utils/String-Format";

export default function MarketingClient() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJTaW5tZWQiLCJzdWIiOiJiN2E0MjgyMC00NDIwLTQyMjUtYTIzNi0zN2ExYjMxNDMwODkiLCJleHAiOjE3NjM5NjIxMjUsImlhdCI6MTczMzk2MjEyNSwic2NvcGUiOiJST0xFX01BUktFVElORyJ9.qjTlakeduEDQHaJIeXTf0lIfLPG_-fXRT8LlGwZnJBU.zUCcNkGrNyC4VhWwclKPzbfKh5wjqr19x7xe-hgHMdM.eyJpc3MiOiJTaW5tZWQiLCJzdWIiOiJiN2E0MjgyMC00NDIwLTQyMjUtYTIzNi0zN2ExYjMxNDMwODkiLCJleHAiOjE3NjM5NTk5NDYsImlhdCI6MTczMzk1OTk0Niwic2NvcGUiOiJST0xFX01BUktFVElORyJ9.2azwTM2_xuQOo7y86H_L2rANNPCNgt68feCpRwsSgFY";
  const [activeTab, setActiveTab] = useState<string>("default");
  const [postContentTab, setPostContentTab] = useState<string>("default");
  const [mainImageBase64, setMainImageBase64] = useState<string | null>(null);
  const [asideImages, setAsideImages] = useState<string[]>([]);

  async function processForm(formData: FormData) {
    const title = formData.get("title");
    const body = formData.get("body");

    const requestBody = {
      mainImage: mainImageBase64,
      asideImages,
      title,
      body,
    };
    try {
      const response = await fetch("http://localhost:8080/notices", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const result = await response.json();
        console.log("Notícia criada com sucesso:", result);
      } else {
        console.error("Erro ao criar notícia:", response.statusText);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  }
  const handleMainImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      convertFileToBase64(file, (base64) => {
        setMainImageBase64(Base64Format(base64));
      });
    }
  };

  const handleAsideImagesChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files);

      Promise.all(
        filesArray.map(
          (file) =>
            new Promise<string>((resolve) => {
              convertFileToBase64(file, resolve);
            })
        )
      ).then((base64Images) => {
        const formattedImages = base64Images.map((base64) =>
          Base64Format(base64)
        );
        setAsideImages(formattedImages);
      });
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderPostContent = () => {
    switch (postContentTab) {
      case "createNews":
        return (
          <form action={processForm} className={styles.newsForm}>
            <div>
              <label>Título:</label>
              <input type="text" name="title" className={styles.textField} />
            </div>
            <div>
              <label>Descrição:</label>
              <textarea name="body" />
            </div>
            <div>
              <label>Imagem principal da Notícia:</label>
              <input
                type="file"
                name="mainImage"
                onChange={handleMainImageChange}
              />
            </div>
            <div>
              <label>Imagens Secundárias:</label>
              <input
                type="file"
                name="asideImages"
                multiple
                onChange={handleAsideImagesChange}
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              Enviar
            </button>
          </form>
        );
      case "viewNews":
        return <div>ver noticia</div>;
      default:
        return <div>Selecione uma opção acima para gerenciar as notícias</div>;
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "cadastros":
        return <div>Conteúdo de Cadastros</div>;
      case "beneficios":
        return <div>Conteúdo de Benefícios</div>;
      case "noticias":
        return (
          <div className={styles.postArea}>
            <div className={styles.btnWrapper}>
              <button onClick={() => setPostContentTab("createNews")}>
                Criar Nova Notícia
              </button>
              <button onClick={() => setPostContentTab("viewNews")}>
                Ver notícias
              </button>
            </div>
            <section className={styles.postContent}>
              {renderPostContent()}
            </section>
          </div>
        );
      case "midias":
        return <div>Conteúdo de Mídias</div>;
      case "ouvidoria":
        return <div>Conteúdo de Ouvidoria</div>;
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
        <section className={styles.marketingHeader}>
          <Image
            src="/icons/marketing-icon-oficial.png"
            alt="Ícone de administrador"
            width={34}
            height={34}
          />
          <h3>Marketing</h3>
        </section>
        <button className={styles.exitBtn}>
          <Image
            src="/icons/exit-icon.svg"
            alt="Ícone de administrador"
            width={24}
            height={24}
          />
          Sair
        </button>

        <div className={styles.separator}></div>
        <p>Gerenciamento</p>

        <button onClick={() => handleTabChange("beneficios")}>
          <Image
            src="/icons/cifrao-icon.svg"
            alt="Ícone de benefícios"
            width={24}
            height={24}
          />
          Benefícios
        </button>
        <div className={styles.separator}></div>
        <p>Comunicação</p>
        <button onClick={() => handleTabChange("noticias")}>
          <Image
            src="/icons/noticias-icon.svg"
            alt="Ícone de notícias"
            width={24}
            height={24}
          />
          Notícias
        </button>
        <button onClick={() => handleTabChange("noticias")}>
          <Image
            src="/icons/calendar-days.svg"
            alt="Ícone de notícias"
            width={24}
            height={24}
          />
          Eventos
        </button>
        <button onClick={() => handleTabChange("midias")}>
          <Image
            src="/icons/midias-icon.svg"
            alt="Ícone de mídias"
            width={24}
            height={24}
          />
          Multimídia
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
