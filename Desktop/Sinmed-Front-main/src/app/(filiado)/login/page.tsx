import styles from "./page.module.scss";
import FiliadoContainer from "@/components/UI/AreaDoFiliado/filiado-container";
import LeftWindow from "@/components/UI/AreaDoFiliado/LeftLoginWindow";
import LoginForm from "@/components/Forms/LoginForm";
import FiliateChangeButton from "@/components/Buttons/FiliateChangeButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login | SINMED-AL",
  description: "Tela de Login do Sinmed Alagoas",
};

export default function Login() {
  return (
    <FiliadoContainer>
      <LeftWindow />
      <FiliateChangeButton />
      <LoginForm />
    </FiliadoContainer>
  );
}
