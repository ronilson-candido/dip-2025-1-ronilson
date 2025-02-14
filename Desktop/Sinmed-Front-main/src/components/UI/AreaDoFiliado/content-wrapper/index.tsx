import styles from "./styles.module.scss";

interface ContentWrapperProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: ContentWrapperProps) {
  return <main className={styles.main}>{children}</main>;
}
