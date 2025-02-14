"use client";

import { useState } from "react";
import styles from "./styles.module.scss";

interface FilterBarProps {
  onOrderChange: (order: string) => void;
}

export default function FilterBar({ onOrderChange }: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOrderChange = (order: string) => {
    onOrderChange(order);
    setIsOpen(false);
  };

  return (
    <div className={styles.filterBarContainer}>
      <button
        className={`${styles.filterBar} ${isOpen ? styles.open : ""}`}
        onClick={handleOpen}
      >
        Organizar por
      </button>
      {isOpen && (
        <ul className={styles.priorityFilter}>
          <li onClick={() => handleOrderChange("desc")}>Mais novas</li>
          <li onClick={() => handleOrderChange("asc")}>Mais antigas</li>
          <li onClick={() => handleOrderChange("alpha")}>Ordem alfabética</li>
        </ul>
      )}
    </div>
  );
}
