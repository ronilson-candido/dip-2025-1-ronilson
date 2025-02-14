"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./styles.module.scss";
import usePasswordToggle from "@/hooks/usePasswordToggle";
import { formatStringAsNumber } from "@/utils/number-format";
import { toast, Toaster } from "sonner";
import Link from "next/link";

export default function LoginForm() {
  const { InputType, Icon, toggleVisibility } = usePasswordToggle();
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  // Função para carregar os usuários do arquivo txt
  const loadUsers = async (): Promise<{ [key: string]: string }> => {
    try {
      const response = await fetch("/dados_medicos.txt"); // Caminho relativo do arquivo
      const text = await response.text(); // Lê o conteúdo do arquivo
      const usersObj: { [key: string]: string } = {};

      // Processa o conteúdo do arquivo e cria um objeto com CPF como chave e nome como valor
      const lines = text.split("\n");
      lines.forEach((line) => {
        const [cpf, name] = line.split(","); // Divide CPF e Nome
        if (cpf && name) {
          usersObj[cpf.trim()] = name.trim(); // Adiciona ao objeto de usuários
        }
      });

      return usersObj;
    } catch (error) {
      console.error("Erro ao carregar o arquivo:", error);
      return {};
    }
  };

  // Carregar os dados de usuários ao montar o componente
  useEffect(() => {
    const fetchData = async () => {
      const usersData = await loadUsers();
      setUsers(usersData); // Armazena os dados carregados
    };
    fetchData();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const userName = users[cpf]; // Busca o nome do usuário pelo CPF

    if (userName) {
      router.push(`/redirecionamento?name=${encodeURIComponent(userName)}`);
    } else {
      toast.error("CPF não encontrado!", {
        style: { backgroundColor: "#9c1515" },
      });
    }
  };

  return (
    <div className={styles.loginArea}>
      <h2>Login</h2>
      <div className={styles.separator}></div>
      <p>Informe seus dados para entrar</p>

      <Toaster
        richColors
        toastOptions={{
          style: { color: "white" },
        }}
        position="top-right"
      />
      <form onSubmit={handleLogin}>
        <div className={styles.cpfInput}>
          <h3>CPF</h3>
          <input
            autoComplete="off"
            type="text"
            id="cpf"
            value={cpf}
            placeholder="Digite seu CPF"
            maxLength={11}
            onChange={(e) => setCpf(formatStringAsNumber(e.target.value))}
          />
        </div>
        <div className={styles.passwordInput}>
          <h3>Senha</h3>
          <input
            type={InputType}
            autoComplete="off"
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <span onClick={toggleVisibility}>
            <Icon />
          </span>
        </div>
        <Link href="/esqueceu-a-senha">
          <span className={styles.forgetPassword}>Esqueceu a senha?</span>
        </Link>
        <button className={styles.loginBtn} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
}
