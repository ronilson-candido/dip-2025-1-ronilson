"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";

interface SmallFormFieldProps {
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

const SmallFormField = React.forwardRef<
  HTMLInputElement | HTMLSelectElement,
  SmallFormFieldProps
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
    ref
  ) => {
    const [numSelects, setNumSelects] = useState(1);
    const [selectedValues, setSelectedValues] = useState([""]);

    const handleAddSelect = () => {
      setNumSelects(numSelects + 1);
      setSelectedValues([...selectedValues, ""]);
    };

    const handleRemoveSelect = () => {
      setNumSelects(numSelects - 1);
      setSelectedValues(selectedValues.slice(0, -1));
    };

    const handleSelectChange = (index: number, value: string) => {
      setSelectedValues(
        selectedValues.map((val, i) => (i === index ? value : val))
      );
    };

    return (
      <div className={styles.formField}>
        <div>
          <h3>{label}</h3>
          {type === "select" && options ? (
            <div className={styles.selectWrapper}>
              {[...Array(numSelects)].map((_, index) => (
                <select
                  key={index}
                  value={selectedValues[index]}
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                  onBlur={onBlur}
                  className={styles.input}
                  {...rest}
                >
                  {options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ))}
              {numSelects < 2 && options.length > 5 && (
                <button className={styles.addButton} onClick={handleAddSelect}>
                  +
                </button>
              )}
              {numSelects == 2 && options.length > 5 && (
                <button
                  className={styles.removeButton}
                  onClick={handleRemoveSelect}
                >
                  -
                </button>
              )}
            </div>
          ) : (
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
          )}
        </div>
      </div>
    );
  }
);

SmallFormField.displayName = "SmallFormField";

export default SmallFormField;
