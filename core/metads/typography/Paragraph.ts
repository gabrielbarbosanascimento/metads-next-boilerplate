import styled from 'styled-components';
import { SEMANTIC_COLORS, FONT, OPACITY_LEVEL } from '../utils';

type Size = 'XS' | 'SM' | 'MD' | 'LG';
type Props = {
  size?: Size;
};

function getFontSize(size?: Size) {
  let sizes = {
    XS: FONT.SIZE.XXXS,
    SM: FONT.SIZE.XXS,
    MD: FONT.SIZE.XS,
    LG: FONT.SIZE.SM,
  };

  if (!size || size === 'LG') {
    return sizes.LG;
  } else {
    return sizes[size];
  }
}

export const MetaParagraph = styled.div<Props>`
  font-size: ${(props) => getFontSize(props.size)};
  font-weight: ${FONT.WEIGHT.REGULAR};
  line-height: ${(props) =>
    props.size === 'LG' ? FONT.LINE_HEIGHT.SM : FONT.LINE_HEIGHT.LG};
  color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
  opacity: ${OPACITY_LEVEL.SEMIOPAQUE};
`;
