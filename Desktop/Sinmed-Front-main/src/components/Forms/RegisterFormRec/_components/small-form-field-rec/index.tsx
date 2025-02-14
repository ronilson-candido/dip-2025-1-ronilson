import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { NumericFormat, PatternFormat } from "react-number-format";

import InputMask from "react-input-mask-next";

interface SmallFormFieldPropsRec {
  label: string;
  type: string;
  value?: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  max?: string | number;
  readOnly?: boolean;
  options?: string[];
  mask?: string;
}

const SmallFormFieldRec = React.forwardRef<
  HTMLInputElement | HTMLSelectElement,
  SmallFormFieldPropsRec
>(
  (
    {
      label,
      type,
      value,
      onChange,
      onBlur,
      max,
      readOnly,
      options,
      mask,

      ...rest
    },
    ref: React.Ref<HTMLInputElement | HTMLSelectElement>
  ) => {
    const [numSelects, setNumSelects] = useState(1);
    const [selectedValues, setSelectedValues] = useState(
      options ? [options[0]] : [""]
    );

    const handleSelectChange = (
      e: React.ChangeEvent<HTMLSelectElement>,
      index: number
    ) => {
      const newSelectedValues = [...selectedValues];
      newSelectedValues[index] = e.target.value;
      setSelectedValues(newSelectedValues);
      if (onChange) {
        onChange(e);
      }
    };
    return (
      <div className={styles.formFieldRec}>
        <div>
          <h3>{label}</h3>

          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={styles.input}
            maxLength={typeof max === "number" ? max : undefined}
            readOnly={readOnly}
            {...rest}
          />

          {type === "password" && <span>*Mínimo de 8 caracteres</span>}
        </div>
      </div>
    );
  }
);

SmallFormFieldRec.displayName = "SmallFormFieldRec";

export default SmallFormFieldRec;
