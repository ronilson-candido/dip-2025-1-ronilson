import styles from "./styles.module.scss";

interface SeeMoreNewsButtonProps {
  onClick: () => void;
}

export default function SeeMoreNewsButton({ onClick }: SeeMoreNewsButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Ver mais notícias
    </button>
  );
}
