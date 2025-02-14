import React from "react";
import styles from "./styles.module.scss";

interface LoaderProps {
  size?: "small" | "medium" | "large";
  color?: string;
}

export const Loader: React.FC<LoaderProps> = ({
  size = "medium",
  color = "#0070f3",
}) => {
  const sizeMap = {
    small: "24px",
    medium: "32px",
    large: "48px",
  };

  return (
    <div
      className={styles.loader}
      style={{
        width: sizeMap[size],
        height: sizeMap[size],
        borderTopColor: color,
      }}
    />
  );
};

export default Loader;
