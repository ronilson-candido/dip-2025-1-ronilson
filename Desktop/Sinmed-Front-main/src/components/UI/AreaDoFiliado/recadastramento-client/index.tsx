"use client";

import RegisterFormRec from "@/components/Forms/RegisterFormRec";
import FiliadoContainerRec from "../filiado-container-rec";
import LeftWindowRec from "../LeftLoginWindowRec";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RecadastramentoClient() {
  const searchParams = useSearchParams();
  const nome = searchParams.get("nome");
  const cpf = searchParams.get("cpf");
  const router = useRouter();

  useEffect(() => {
    if (!cpf) {
      router.push("/redirecionamento");
    }
  }, [cpf, router]);

  if (!cpf) return null;

  return (
    <FiliadoContainerRec>
      <LeftWindowRec />
      <RegisterFormRec />
    </FiliadoContainerRec>
  );
}
