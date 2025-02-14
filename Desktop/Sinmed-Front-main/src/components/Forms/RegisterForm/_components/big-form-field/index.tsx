import React from "react";
import styles from "./styles.module.scss";

interface BigFormFieldProps {
  label: string;
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const BigFormField = React.forwardRef<HTMLInputElement, BigFormFieldProps>(
  ({ label, type, value, onChange, readOnly, ...rest }, ref) => {
    return (
      <div className={styles.formField}>
        <h3>{label}</h3>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChange}
          className={styles.input}
          readOnly={readOnly}
          {...rest}
        />
      </div>
    );
  }
);

BigFormField.displayName = "BigFormField";

export default BigFormField;
