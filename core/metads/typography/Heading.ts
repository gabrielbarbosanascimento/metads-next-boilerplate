import styled from 'styled-components';
import { SEMANTIC_COLORS, FONT } from '../utils';

type Size =
  | 'GIANT'
  | 'DISPLAY'
  | 'XXXL'
  | 'XXL'
  | 'XL'
  | 'LG'
  | 'MD'
  | 'SM'
  | 'XS'
  | 'XXS'
  | 'XXXS';
type Props = {
  size?: Size;
};

function getFontSize(size?: Size, isMediaQuery = false) {
  let sizes = {
    GIANT: FONT.SIZE.GIANT,
    DISPLAY: FONT.SIZE.DISPLAY,
    XXXL: FONT.SIZE.XXXL,
    XXL: FONT.SIZE.XXL,
    XL: FONT.SIZE.XL,
    LG: FONT.SIZE.LG,
    MD: FONT.SIZE.MD,
    SM: FONT.SIZE.SM,
    XS: FONT.SIZE.XS,
    XXS: FONT.SIZE.XXS,
    XXXS: FONT.SIZE.XXXS,
  };

  if (!size) {
    return FONT.SIZE.DISPLAY;
  } else if (!isMediaQuery) {
    return sizes[size];
  }
}

export const MetaHeading = styled.div<Props>`
  font-size: ${(props: Props) => getFontSize(props.size)};
  font-weight: ${FONT.WEIGHT.BOLD};
  line-height: ${FONT.LINE_HEIGHT.DEFAULT};
  color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
`;
