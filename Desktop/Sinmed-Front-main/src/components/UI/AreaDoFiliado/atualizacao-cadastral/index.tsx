"use client";

import { ArrowRight } from "lucide-react";
import styles from "./styles.module.scss";
import RecadastramentoBackground from "@/components/UI/AreaDoFiliado/recadastramento";
import { Lexend } from "next/font/google";
import Image from "next/image";
import { toast, Toaster } from "sonner";
import { useCallback, useEffect, useState } from "react";
import { formatCPF, formatStringAsNumber } from "@/utils/number-format";
import { useRouter } from "next/navigation";
import dadosFiliados from "../../../../../dados_extraidos.js";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "700"] });

export default function AtualizacaoCadastralClient() {
  const [cpf, setCpf] = useState("");
  const [isCpfValid, setIsCpfValid] = useState(false);
  const router = useRouter();

  const checkCpfExists = async (cpf: string): Promise<boolean> => {
    try {
      const response = await fetch("/api/verify-cpf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cpf }),
      });

      const data = await response.json();
      return data.exists;
    } catch (error) {
      console.error("Erro ao verificar CPF:", error);
      return false;
    }
  };
  const removeFormatting = (cpf: string) => {
    return cpf.replace(/\D/g, "");
  };

  const verifyCpf = useCallback((cpfInserido: string) => {
    const cpfComFormatacao = formatCPF(cpfInserido);

    const filiadoEncontrado = dadosFiliados.find(
      (filiado) =>
        removeFormatting(filiado.cpf) === removeFormatting(cpfInserido)
    );

    setIsCpfValid(!!filiadoEncontrado);

    if (filiadoEncontrado) {
      console.log("Filiado encontrado:", {
        cpf: formatCPF(filiadoEncontrado.cpf),
        nome: filiadoEncontrado.nome,
      });
    }

    return filiadoEncontrado;
  }, []);

  useEffect(() => {
    if (cpf) {
      verifyCpf(cpf);
    }
  }, [cpf, verifyCpf]);

  const handleClick = async () => {
    if (!cpf) {
      toast.error("Por favor, insira um CPF antes de avançar.");
      return;
    }

    const filiado = verifyCpf(cpf);
    const cpfSemFormatacao = removeFormatting(cpf);

    if (cpfSemFormatacao.length < 11) {
      toast.error("Formato do CPF inválido. Insira um CPF Válido!");
      return;
    }

    /*const cpfExists = await checkCpfExists(formatCPF(cpf));

    if (cpfExists) {
      toast.error("Este CPF já está cadastrado no sistema!");
      return;
    }*/

    if (filiado) {
      const nomeCodedUri = encodeURIComponent(filiado.nome);
      router.push(
        `/redirecionamento/bem-vindo?nome=${nomeCodedUri}&cpf=${cpfSemFormatacao}`
      );
    } else {
      router.push(`/redirecionamento/bem-vindo?cpf=${cpfSemFormatacao}`);
    }
  };

  return (
    <RecadastramentoBackground>
      <Toaster
        richColors
        toastOptions={{
          style: {
            background: "#9c1515",
            color: "white",
            position: "fixed",
            top: "10px",
            right: "10px",
          },
        }}
        position="top-right"
      />
      <div className={`${styles.firstWrapper} ${lexend.className}`}>
        <Image
          src="/images/sinmed-logo.svg"
          alt="Foto do Sindicato dos Médicos de Alagoas"
          width={217}
          height={62}
        />
        <div>
          <h1>Mantenha seus dados sempre atualizados</h1>
          <p className={styles.description}>
            Com o cadastro atualizado, você se conecta às melhores oportunidades{" "}
            <br />e tem prioridade no recebimento de convites exclusivos
          </p>
        </div>
        <div className={lexend.className}>
          <p className={lexend.className}>
            Insira seu CPF para garantir a identificação correta. 
          </p>
          <input
            type="text"
            className={styles.input}
            value={formatCPF(cpf)}
            placeholder="Digite seu CPF"
            onChange={(e) => setCpf(formatStringAsNumber(e.target.value))}
          />
        </div>
        <button onClick={handleClick}>
          Avançar
          <ArrowRight size={20} />
        </button>
      </div>
    </RecadastramentoBackground>
  );
}
