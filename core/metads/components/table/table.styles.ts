import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import { BORDER, SEMANTIC_COLORS, FONT, OPACITY_LEVEL, SPACING } from '../../utils';

export default styled.table`
  background-color: transparent;
  border-collapse: separate;
  border-spacing: 0 ${SPACING.NANO};
  width: 100%;

  td,
  th {
    border-style: none;
    padding: ${SPACING.NANO} !important;
    vertical-align: middle !important;
  }

  thead,
  tr,
  th,
  tbody table.m-table tr,
  td {
    border: ${BORDER.WIDTH.NONE};
  }

  thead {
    > tr {
      height: 40px;
    }

    tr th {
      font-size: ${FONT.SIZE.XS};
      line-height: ${FONT.SIZE.XS};
      font-weight: ${FONT.WEIGHT.BOLD};
      text-align: left;
    }
  }

  tbody {
    > tr {
      height: 64px;
    }

    tr {
      &:hover {
        background-color: ${ColorHelper.hexToRGB(
          SEMANTIC_COLORS.NEUTRAL.BLACK,
          OPACITY_LEVEL.SEMITRANSPARENT
        )};
      }
    }

    td {
      &:first-child {
        border-top-left-radius: ${BORDER.RADIUS.MD};
        border-bottom-left-radius: ${BORDER.RADIUS.MD};
      }

      &:last-child {
        border-bottom-right-radius: ${BORDER.RADIUS.MD};
        border-top-right-radius: ${BORDER.RADIUS.MD};
      }
    }
  }
`;
