import styled from 'styled-components';
import { SEMANTIC_COLORS, FONT } from '../utils';

type Size = 'LG' | 'SM';
type Props = {
  size?: Size;
};

export const MetaCaption = styled.div<Props>`
  font-size: ${(props: Props) => props.size === 'SM' ? FONT.SIZE.XXXS : FONT.SIZE.XXS};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  line-height: ${FONT.LINE_HEIGHT.MD};
  color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
`;
