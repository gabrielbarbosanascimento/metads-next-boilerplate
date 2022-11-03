import styled from 'styled-components';
import { BORDER, SEMANTIC_COLORS, FONT, SPACING } from '../../utils';
import MetaIcon from '../icon/icon.styles';

export default styled.div`
  position: relative;
  overflow-x: auto;

  tbody tr {
    background-color: ${SEMANTIC_COLORS.HIGH.LIGHT};
  }

  .page {
    background-color: ${SEMANTIC_COLORS.LOW.MID};
    color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};
    border-radius: ${BORDER.RADIUS.SM};
    margin: 0 ${SPACING.QUARCK};
    height: 40px;
    line-height: 0.6;
  }

  .current-page {
    background-color: ${SEMANTIC_COLORS.PRIMARY.PURE};
    color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};
  }

  .loader-container {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: ${BORDER.RADIUS.SM};
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    ${MetaIcon} {
      font-size: ${FONT.SIZE.XXL};
      width: ${FONT.SIZE.XXL};
      height: ${FONT.SIZE.XXL};
      color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};
    }
  }
`;
