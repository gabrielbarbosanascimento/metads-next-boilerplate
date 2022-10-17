import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import { BORDER, SEMANTIC_COLORS, OPACITY_LEVEL, SPACING } from '../../utils';

export default styled.div`
  background: ${SEMANTIC_COLORS.LOW.MID};
  padding: ${SPACING.NANO} 0;
  box-shadow: 0px ${SPACING.NANO} ${SPACING.XXS} ${ColorHelper.hexToRGB(SEMANTIC_COLORS.NEUTRAL.BLACK, OPACITY_LEVEL.LIGHT)};
  border-radius: ${BORDER.RADIUS.SM};
  display: none;

  &[data-show] {
    display: block;
  }

  .dropdown-item {
    padding: ${SPACING.XXXS} ${SPACING.XXS};
    color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};
    cursor: pointer;
    position: relative;
    min-width: 176px;
    display: flex;
    align-items: center;

    :hover {
      background: #888888;
    }

    i {
      margin-right: ${SPACING.XXXS};
      font-size: 20px;
    }

    :not(:first-child)::after {
      background: ${SEMANTIC_COLORS.LOW.LIGHT};
      content: '';
      position: absolute;
      height: 2px;
      width: calc(100% - 48px);
      top: 0;
      left: 24px;
    }
  }
`;
