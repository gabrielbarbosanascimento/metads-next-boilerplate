import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import { SEMANTIC_COLORS, OPACITY_LEVEL, SPACING } from '../../utils';

export const MetaObscurator = styled.div`
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: ${ColorHelper.hexToRGB(
    SEMANTIC_COLORS.NEUTRAL.BLACK,
    OPACITY_LEVEL.LIGHT
  )};
  backdrop-filter: blur(${SPACING.XXS});
`;
