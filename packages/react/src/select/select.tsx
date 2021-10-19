import React, { useRef } from 'react';
import clsx from 'clsx';

export const SelectSizes = ['s', 'm', 'l', 'xl'] as const;
export type SelectSizesType = typeof SelectSizes[number];

export interface SelectProps {
  className?: string;
  value?: string;
  size?: SelectSizesType;
  disabled?: boolean;
  options?: {
    label: string;
    value: string;
    disabled: boolean;
  }[];
}

const Select: React.FC<SelectProps> = ({
  className = '',
  disabled = false,
  options = [],
  value = '',
  size = 'l',
  ...otherProps
}) => {
  const field = useRef(null);

  return (
    <>
      <div
        className={clsx(
          'db-select',
          { 'db-select--disabled': disabled },
          `db-select--size-${size}`,
          className
        )}
      >
        <select ref={field} {...otherProps} disabled={disabled ?? false} value={value ?? ''}>
          {(options ?? []).map(({ label, value: optionValue, disabled: optionDisabled }) => (
            <option
              key={`option_${optionValue}`}
              value={optionValue}
              disabled={optionDisabled ?? false}
            >
              {label}
            </option>
          ))}
        </select>
        <svg viewBox="0 0 16 10">
          <path d="M1 2l6 6l6-6" />
        </svg>
      </div>
      <span className="db-inline-spacer"> </span>
    </>
  );
};

export default Select;
