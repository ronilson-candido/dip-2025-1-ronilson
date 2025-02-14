import LeftWindow from "@/components/UI/AreaDoFiliado/LeftLoginWindow";
import styles from "./page.module.scss";
import FiliadoContainer from "@/components/UI/AreaDoFiliado/filiado-container";
import FiliateChangeButton from "@/components/Buttons/FiliateChangeButton";
import RegisterForm from "@/components/Forms/RegisterForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registro | SINMED-AL",
  description: "Tela de Registro Sinmed Alagoas",
};

export default function Registro() {
  return (
    <FiliadoContainer>
      <LeftWindow />
      <FiliateChangeButton />
      <RegisterForm />
    </FiliadoContainer>
  );
}
