import styled from 'styled-components';
import { BORDER, SEMANTIC_COLORS, OPACITY_LEVEL, SPACING } from '../../utils';

export const MetaCard = styled.div`
  background: ${SEMANTIC_COLORS.NEUTRAL.WHITE};
  border-radius: ${BORDER.RADIUS.MD};
  padding: ${SPACING.XXXS};
  box-shadow: 0px 16px 48px rgba(0, 0, 170, ${OPACITY_LEVEL.LIGHT});
`;
