import FiliadoContainer from "@/components/UI/AreaDoFiliado/filiado-container";
import LoggedContainer from "@/components/UI/AreaDoFiliado/logged-container";
import styles from "./styles.module.scss";
import Image from "next/image";
import ContentWrapper from "@/components/UI/AreaDoFiliado/content-wrapper";
import { Metadata } from "next";
import { useState } from "react";
import FiliadoClient from "./FiliadoClient";

export const metadata: Metadata = {
  title: "Área do Filiado",
  description: "Área do Filiado do Sinmed",
};

export default function Filiado() {
  return <FiliadoClient />;
}
