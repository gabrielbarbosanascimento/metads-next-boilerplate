import React from 'react';
import MaskedInput, { Mask } from 'react-text-mask';
import InputStyles from './input.styles';

type MetaInputType = {
  type?: React.HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
  label?: string;
  placeholder?: string;
  mask?: Mask;
  onEnterPresses?: (e: React.KeyboardEvent) => void;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  error?: string;
};

export const MetaInput: React.FC<MetaInputType> = ({
  type = 'text',
  name = '',
  id = `${Date.now()}`,
  className = '',
  disabled,
  label,
  error,
  placeholder,
  mask,
  onEnterPresses = () => {},
  value,
  onChange,
}) => {
  return (
    <InputStyles className={disabled ? ' disabled' : ''}>
      <label htmlFor={id}>{label}</label>
      {mask ? (
        <MaskedInput
          mask={mask}
          placeholder={placeholder}
          guide={false}
          id={id}
          className={className}
          disabled={disabled}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          onBlur={() => {}}
        />
      ) : (
        <input
          id={id}
          className={className}
          disabled={disabled}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          placeholder={placeholder}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onEnterPresses(e);
            }
          }}
        />
      )}
      <div className="error-message">{error}</div>
    </InputStyles>
  );
};
