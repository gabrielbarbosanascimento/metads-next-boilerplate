import React from 'react';
import CheckBoxStyles from './checkbox.styles';

type CheckboxType = {
  id: string;
  label: string;
  style?: any;
  name?: string;
  value: boolean | any;
  onToggle?: (value: boolean) => void;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
export const MetaCheckbox: React.FC<CheckboxType> = ({
  disabled,
  id,
  label,
  style,
  name,
  value = false,
  onChange = () => {},
  onToggle,
}) => {
  return (
    <CheckBoxStyles style={style}>
      <input
        id={id}
        disabled={disabled}
        type="checkbox"
        name={name}
        value={value}
        checked={value}
        onChange={(e) => (onToggle ? onToggle(!value) : onChange(e))}
      />
      <label htmlFor={id}>{label}</label>
    </CheckBoxStyles>
  );
};
