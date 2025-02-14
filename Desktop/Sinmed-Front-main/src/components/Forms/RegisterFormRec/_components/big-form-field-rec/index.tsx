import React from "react";
import styles from "./styles.module.scss";

interface BigFormFieldPropsRec {
  label: string;
  type: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const BigFormFieldRec = React.forwardRef<HTMLInputElement, BigFormFieldPropsRec>(
  ({ label, type, value, onChange, readOnly, ...rest }, ref) => {
    return (
      <div className={styles.formFieldRec}>
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

BigFormFieldRec.displayName = "BigFormFieldRec";

export default BigFormFieldRec;
