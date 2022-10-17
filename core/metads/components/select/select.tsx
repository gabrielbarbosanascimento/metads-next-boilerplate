import React, { useRef } from 'react';
import ReactSelect, { components, GroupBase, StylesConfig } from 'react-select';
import { BORDER, SEMANTIC_COLORS, FONT, SPACING } from '../../utils';
import SelectStyles from './select.styles';

type MetaSelectType = {
  name?: string;
  isMulti?: boolean;
  options: Array<{ label: string; value: any }>;
  label?: string;
  defaultValue?: any;
  value: any;
  placeholder?: string;
  isSearchable?: boolean;
  emptyMessage?: string;
  onColor?: boolean;
  style?: any;
  error?: string;
  disabled?: boolean;
  onChange: (e: ReactSelectOnChangeType | any) => void;
  onInputChange?: (newValue: string) => void;
  menuPortalTarget?: HTMLElement;
  controlBackgroundColor?: string;
};

type ReactSelectOnChangeTarget = {
  name: string;
  value: any;
};
type ReactSelectOnChangeType = {
  target: ReactSelectOnChangeTarget;
};

const MetaSelect: React.FC<MetaSelectType> = ({
  options = [],
  isMulti = false,
  name,
  label,
  error,
  defaultValue,
  value,
  placeholder,
  isSearchable = false,
  style,
  onChange = () => {},
  onInputChange = () => {},
  disabled,
  onColor = false,
  emptyMessage = '',
  controlBackgroundColor,
  menuPortalTarget,
}) => {
  const ref = useRef(null);

  const customStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
    placeholder: (defaultStyles) => {
      return {
        ...defaultStyles,
        color: onColor ? '#FFF' : '#000000A3',
        fontWeight: FONT.WEIGHT.REGULAR,
        fontSize: FONT.SIZE.XS,
      };
    },
    option: (provided, state) => {
      return {
        ...provided,
      };
    },
    control: (base, state) => ({
      display: 'flex',
      backgroundColor: controlBackgroundColor
        ? controlBackgroundColor
        : SEMANTIC_COLORS.HIGH.LIGHT,
      borderRadius: SPACING.NANO,
      border: `${BORDER.WIDTH.THIN} solid ${
        state.isFocused
          ? SEMANTIC_COLORS.ACCENT.PURE
          : SEMANTIC_COLORS.NEUTRAL.BLACK
      }`,
      height: 48,
      padding: `0 ${SPACING.XXXS}`,
      boxShadow: 'none',
      fontWeight: FONT.WEIGHT.REGULAR,
      fontSize: FONT.SIZE.XS,
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const color = state.hasValue
        ? onColor
          ? SEMANTIC_COLORS.NEUTRAL.WHITE
          : provided.color
        : provided.color;
      const transition = 'opacity 300ms';
      return { ...provided, opacity, color, transition };
    },
    menu: (base) => ({
      ...base,
      fontSize: 16,
      lineHeight: '16px',
      paddingHorizontal: 40,
      paddingVertical: 16,
    }),
    menuPortal: (base) => ({ ...base, zIndex: 9 }),
  };

  function getValue() {
    return options.find((op) => op.value === value);
  }

  function DropdownIndicator(e: any) {
    return (
      <i
        className={
          'material-icons' + (e.selectProps.menuIsOpen ? ` rotate180` : '')
        }
        style={{
          fontSize: 24,
          color: onColor
            ? 'var(--neutral-color-high-pure)'
            : 'var(--neutral-color-low-pure)',
          transition: 'transform 500ms ease',
        }}
      >
        {'keyboard_arrow_down'}
      </i>
    );
  }

  function NoOptionsMessage(props: any) {
    return (
      <components.NoOptionsMessage {...props}>
        {emptyMessage ? emptyMessage : 'Sem opções'}
      </components.NoOptionsMessage>
    );
  }

  return (
    <SelectStyles style={style}>
      <label>{label}</label>
      <div>
        <React.Suspense fallback={<>...</>}>
          <ReactSelect
            menuPlacement="auto"
            menuPosition="fixed"
            menuShouldBlockScroll
            name={name}
            openMenuOnFocus={true}
            onInputChange={(e) =>
              e && isSearchable && onInputChange ? onInputChange(e) : () => {}
            }
            styles={customStyles}
            defaultValue={defaultValue}
            value={getValue()}
            ref={ref}
            menuPortalTarget={menuPortalTarget}
            onChange={(e: any) => {
              if (name?.length) {
                let event: ReactSelectOnChangeType = {
                  target: { name, value: e.value },
                };
                onChange(event);
              } else {
                onChange(e.value);
              }
            }}
            isDisabled={disabled}
            placeholder={placeholder}
            isSearchable={isSearchable}
            isMulti={isMulti}
            components={{
              DropdownIndicator,
              NoOptionsMessage,
              IndicatorSeparator: () => null,
            }}
            options={options}
            className="react-select"
          />
        </React.Suspense>
      </div>
      <div className="error-message">{error}</div>
    </SelectStyles>
  );
};

export default MetaSelect;
