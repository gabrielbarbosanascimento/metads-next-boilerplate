import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import { BORDER, SEMANTIC_COLORS, OPACITY_LEVEL } from '../../utils';

export default styled.div`
  position: relative;

  label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    border: 0 solid #bbb;
    border-radius: ${BORDER.RADIUS.PILL};

    .switch-container {
      border: ${BORDER.WIDTH.THIN} solid black;
      height: 17.78px;
      width: 36px;
      border-radius: ${BORDER.RADIUS.PILL};
      position: relative;
      padding: 1px;
    }

    .switch-round {
      cursor: pointer;
      width: 12.52px;
      height: 12.52px;
      border-radius: ${BORDER.RADIUS.PILL};
      background-color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
      display: block;
      position: absolute;
      left: 2px;
      transition: all 0.3s ease-in 0s;
    }
  }

  input {
    display: none;
  }

  &.on > label {
    .switch-container {
      background-color: ${SEMANTIC_COLORS.ACCENT.PURE};
      border-color: ${SEMANTIC_COLORS.ACCENT.PURE};
    }

    .switch-round {
      background-color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};
      left: 17px;
    }
  }

  /* Disabled */
  &.disabled {
    label {
      cursor: auto;

      .switch-container {
        background-color: transparent;
        border-color: ${ColorHelper.hexToRGB(
          SEMANTIC_COLORS.NEUTRAL.BLACK,
          OPACITY_LEVEL.MEDIUM
        )};
      }
      .switch-round {
        background-color: ${ColorHelper.hexToRGB(
          SEMANTIC_COLORS.NEUTRAL.BLACK,
          OPACITY_LEVEL.MEDIUM
        )};
        cursor: auto;
      }
    }

    + .switch-label {
      color: ${ColorHelper.hexToRGB(
        SEMANTIC_COLORS.NEUTRAL.BLACK,
        OPACITY_LEVEL.MEDIUM
      )};
    }
  }

  .switch-label {
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
  }
`;
