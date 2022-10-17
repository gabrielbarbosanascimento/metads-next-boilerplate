import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import { BORDER, SEMANTIC_COLORS, FONT, OPACITY_LEVEL, SPACING } from '../../utils';

export default styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: baseline;

  input {
    width: ${SPACING.XXXS};
    min-width: ${SPACING.XXXS};
    height: ${SPACING.XXXS};
    margin: 0 ${SPACING.NANO} 0 0;

    &[type='checkbox'] {
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: transparent;
      border-radius: 2px;
      border-width: 2px;
      border-style: solid;

      :hover {
        background-color: ${ColorHelper.hexToRGB(
          SEMANTIC_COLORS.NEUTRAL.BLACK,
          OPACITY_LEVEL.INTENSE
        )};
      }

      :checked {
        background-color: ${SEMANTIC_COLORS.ACCENT.PURE};
        border-color: ${SEMANTIC_COLORS.ACCENT.PURE};
      }

      :checked::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 5px;
        background: transparent;
        top: 4px;
        left: 2px;
        border: ${BORDER.WIDTH.THIN} solid ${SEMANTIC_COLORS.NEUTRAL.WHITE};
        border-top: none;
        border-right: none;
        -webkit-transform: rotate(-45deg);
        -moz-transform: rotate(-45deg);
        -o-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
        transform: rotate(-45deg);
      }

      /* DISABLED*/
      :disabled,
      .disabled {
        cursor: auto;

        :hover {
          background-color: transparent;
        }

        :checked {
          background-color: ${SEMANTIC_COLORS.LOW.LIGHT};
          border-color: ${SEMANTIC_COLORS.LOW.LIGHT};
        }

        + label {
          cursor: auto;
        }
      }
    }
  }

  label {
    all: unset;
    color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
    font-size: ${FONT.SIZE.XS};
    font-weight: ${FONT.WEIGHT.REGULAR};
    line-height: 16px;
    cursor: pointer;
    user-select: none;
    top: -4px;
    position: relative;
  }

  /**/
`;
