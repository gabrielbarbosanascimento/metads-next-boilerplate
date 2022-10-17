import styled from 'styled-components';
import { SEMANTIC_COLORS, FONT } from '../utils';

type Size = 'LG' | 'SM';
type Props = {
  size?: Size;
};

export const MetaSubtitle = styled.div<Props>`
  font-size: ${(props: Props) => props.size === 'SM' ? FONT.SIZE.SM : FONT.SIZE.MD};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  line-height: ${FONT.LINE_HEIGHT.LG};
  color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
`;
