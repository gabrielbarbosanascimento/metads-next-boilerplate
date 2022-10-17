import styled from 'styled-components';
import { BORDER, SEMANTIC_COLORS, FONT, SPACING } from '../../utils';

type Size = 'XL' | 'LG' | 'MD' | 'SM';
type Props = {
  size?: Size;
  light?: boolean;
};

function getDimensions(size?: Size) {
  let dim = {
    width: '40px',
    height: '40px',
    i: {
      height: '20px',
      width: '20px',
      fontSize: '20px',
    },
  };

  if (!size || size === 'MD') return dim;
  if (size === 'XL') {
    dim = {
      width: '96px',
      height: '96px',
      i: {
        height: FONT.SIZE.XL,
        width: FONT.SIZE.XL,
        fontSize: FONT.SIZE.XL,
      },
    };
  } else if (size === 'LG') {
    dim = {
      width: SPACING.XL,
      height: SPACING.XL,
      i: {
        height: SPACING.XS,
        width: SPACING.XS,
        fontSize: SPACING.XS,
      },
    };
  } else {
    dim = {
      width: SPACING.XXS,
      height: SPACING.XXS,
      i: {
        height: FONT.SIZE.XXS,
        width: FONT.SIZE.XXS,
        fontSize: FONT.SIZE.XXS,
      },
    };
  }

  return dim;
}

export const MetaAvatar = styled.div<Props>`
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.light ? SEMANTIC_COLORS.NEUTRAL.WHITE : SEMANTIC_COLORS.NEUTRAL.BLACK };
  border-radius: ${BORDER.RADIUS.PILL};
  border-width: ${BORDER.WIDTH.NONE};
  color: ${SEMANTIC_COLORS.HIGH.MID};
  background-size: cover;

  width: ${(props) => getDimensions(props.size).width};
  height: ${(props) => getDimensions(props.size).height};

  i {
    cursor: default;
    color: ${props => props.light ? SEMANTIC_COLORS.HIGH.MID : SEMANTIC_COLORS.NEUTRAL.WHITE };
    width: ${(props) => getDimensions(props.size).i.width};
    height: ${(props) => getDimensions(props.size).i.height};
    font-size: ${(props) => getDimensions(props.size).i.fontSize};
  }
`;
