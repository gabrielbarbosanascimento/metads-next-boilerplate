import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import { BORDER, SEMANTIC_COLORS, FONT, OPACITY_LEVEL, SPACING } from '../../utils';

export default styled.div`
  label {
    display: block;
    font-weight: ${FONT.WEIGHT.BOLD};
    margin-bottom: ${SPACING.QUARCK};
  }

  input {
    background-color: transparent;
    border-radius: ${BORDER.RADIUS.SM};
    border: ${BORDER.WIDTH.THIN} solid ${SEMANTIC_COLORS.LOW.MID};
    color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
    font-size: ${FONT.SIZE.XS};
    line-height: ${FONT.LINE_HEIGHT.DEFAULT};
    height: 48px;
    padding: 16px;
    max-width: 100%;
    min-width: 100%;
    font-weight: ${FONT.WEIGHT.REGULAR};

    &::placeholder {
      opacity: ${OPACITY_LEVEL.INTENSE};
      font-weight: ${FONT.WEIGHT.REGULAR};
    }
  }

  &:not(.disabled):not(.error):not(.readonly) {
    input {
      :hover {
        background: ${ColorHelper.hexToRGB(
          SEMANTIC_COLORS.NEUTRAL.BLACK,
          OPACITY_LEVEL.SEMITRANSPARENT
        )};
      }

      ::placeholder {
        color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
      }

      :focus-visible {
        outline: 0;
        border-width: ${BORDER.WIDTH.THIN};
        border-color: ${SEMANTIC_COLORS.ACCENT.PURE};
        background: ${ColorHelper.hexToRGB(
          SEMANTIC_COLORS.NEUTRAL.BLACK,
          OPACITY_LEVEL.SEMITRANSPARENT
        )};
      }
    }
  }

  &.disabled,
  &.readonly {
    background-color: transparent;
    opacity: ${OPACITY_LEVEL.MEDIUM};
    pointer-events: none !important;

    * {
      pointer-events: none !important;
    }

    input {
      focus-visible {
        outline: 0;
      }
    }
  }

  /* REMOVER INPUT NUMBER BOTOES */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  .error-message {
    color: ${SEMANTIC_COLORS.WARNING.MID};
    margin-top: 2px;
  }
`;
