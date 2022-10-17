import styled from 'styled-components';
import { SEMANTIC_COLORS, FONT, OPACITY_LEVEL } from '../utils';

type Size = 'LG' | 'SM';
type Props = {
  size?: Size;
};

export const MetaParagraph = styled.div<Props>`
  font-size: ${(props: Props) =>
    props.size === 'SM' ? FONT.SIZE.XS : FONT.SIZE.SM};
  font-weight: ${FONT.WEIGHT.REGULAR};
  line-height: ${(props: Props) =>
    props.size === 'SM' ? FONT.LINE_HEIGHT.LG : FONT.LINE_HEIGHT.SM};
  color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
  opacity: ${OPACITY_LEVEL.SEMIOPAQUE};
`;
