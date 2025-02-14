"use client";

import { ToastContainer, toast } from "react-toastify";
import { MoveRight } from "lucide-react";
import styles from "./styles.module.scss";

interface CheckboxToastProps {
  isIdentifiedChecked: boolean;
  isAnonymousChecked: boolean;
}

const CheckboxToast = ({
  isIdentifiedChecked,
  isAnonymousChecked,
}: CheckboxToastProps) => {
  const notify = (message: string) => toast(message);

  const handleSubmit = () => {
    if (!isIdentifiedChecked && !isAnonymousChecked) {
      notify("Por favor, selecione uma das opções antes de prosseguir");
    }
  };

  return (
    <>
      <button onClick={handleSubmit}>
        Avançar
        <MoveRight size={24} color="white" />
      </button>
      <ToastContainer />
    </>
  );
};

export default CheckboxToast;
