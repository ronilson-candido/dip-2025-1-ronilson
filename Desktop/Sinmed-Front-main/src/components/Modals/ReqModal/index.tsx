import Loader from "@/components/Loaders/ReqLoader";
import styles from "./styles.module.scss";
import { Lexend } from "next/font/google";

interface ReqModalProps {
  isOpen: boolean;
  message?: string;
}

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ReqModal: React.FC<ReqModalProps> = ({
  isOpen,
  message = "Cadastro em andamento...",
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <Loader size="large" />
        <p className={`${styles.message} ${lexend.className}`}>{message}</p>
      </div>
    </div>
  );
};

export default ReqModal;
