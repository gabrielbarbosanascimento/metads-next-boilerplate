import styled from 'styled-components';
import { SEMANTIC_COLORS, FONT } from '../utils';

type Size = 'XXS' | 'XS' | 'SM' | 'MD' | 'LG' | 'XL';
type Props = {
  size?: Size;
};

function getFontSize(size?: Size) {
  let sizes = {
    XXS: FONT.SIZE.XXS,
    XS: FONT.SIZE.XS,
    SM: FONT.SIZE.SM,
    MD: FONT.SIZE.MD,
    LG: FONT.SIZE.LG,
    XL: FONT.SIZE.XL,
  };

  if (!size || size === 'LG') {
    return sizes.LG;
  } else {
    return sizes[size];
  }
}

export const MetaSubtitle = styled.div<Props>`
  font-size: ${(props: Props) => getFontSize(props.size)};
  font-weight: ${FONT.WEIGHT.MEDIUM};
  line-height: ${FONT.LINE_HEIGHT.LG};
  color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
`;
