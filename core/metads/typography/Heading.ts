import styled from 'styled-components';
import { SEMANTIC_COLORS, FONT } from '../utils';

type Size = 'DISPLAY' | 'XL' | 'LG' | 'MD' | 'SM' | 'XS';
type Props = {
  size?: Size;
};

function getFontSize(size?: Size, isMediaQuery = false) {
  let sizes = {
    DISPLAY: FONT.SIZE.DISPLAY,
    XL: FONT.SIZE.XXL,
    LG: FONT.SIZE.XL,
    MD: FONT.SIZE.LG,
    SM: FONT.SIZE.MD,
    XS: FONT.SIZE.XS,
  };

  if (!size) {
    return isMediaQuery ? FONT.SIZE.XXL : FONT.SIZE.DISPLAY;
  } else if (!isMediaQuery) {
    return sizes[size];
  } else {
    sizes = {
      DISPLAY: FONT.SIZE.XXL,
      XL: FONT.SIZE.XL,
      LG: FONT.SIZE.LG,
      MD: FONT.SIZE.MD,
      SM: FONT.SIZE.XS,
      XS: FONT.SIZE.XXS,
    };
    return sizes[size];
  }
}

export const MetaHeading = styled.div<Props>`
  font-size: ${(props: Props) => getFontSize(props.size)};
  font-weight: ${FONT.WEIGHT.BOLD};
  line-height: ${FONT.LINE_HEIGHT.DEFAULT};
  color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};

  @media screen and (max-width: 1023px) {
    font-size: ${(props: Props) => getFontSize(props.size, true)};
  }
`;
