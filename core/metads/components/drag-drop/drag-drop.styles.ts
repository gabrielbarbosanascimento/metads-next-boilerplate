import styled from 'styled-components';
import { BORDER, SEMANTIC_COLORS, OPACITY_LEVEL } from '../../utils';

export default styled.div`
  border-width: ${BORDER.WIDTH.THIN};
  border-radius: ${BORDER.RADIUS.MD};
  border-color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
  border-style: dashed;
  max-width: unset;
  min-height: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &.over {
    background-color: rgba(147, 147, 147, ${OPACITY_LEVEL.MEDIUM});
  }

`;
