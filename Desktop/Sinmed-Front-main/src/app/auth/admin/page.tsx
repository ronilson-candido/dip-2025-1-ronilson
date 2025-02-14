import ContentWrapper from "@/components/UI/AreaDoFiliado/content-wrapper";
import styles from "./styles.module.scss";
import FiliadoContainer from "@/components/UI/AreaDoFiliado/filiado-container";
import Image from "next/image";
import LoggedContainer from "@/components/UI/AreaDoFiliado/logged-container";
import { Metadata } from "next";
import AdminClient from "./AdminClient";

export const metadata: Metadata = {
  title: "Área do Admin",
  description: "Área do Administrador do Sinmed",
};

export default function Admin() {
  return <AdminClient />;
}
