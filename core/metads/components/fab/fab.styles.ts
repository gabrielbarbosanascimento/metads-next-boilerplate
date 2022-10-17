import styled from 'styled-components';
import { BORDER, SEMANTIC_COLORS, OPACITY_LEVEL } from '../../utils';
import { MetaFabTypes } from './fab';
import { ColorHelper } from '../../../helpers';
import { MetaIcon } from '../icon';

export default styled.button<MetaFabTypes>`
  height: 48px;
  width: 48px;
  border-radius: 100%;
  border: ${BORDER.WIDTH.HAIRLINE} solid
    ${(props) =>
      props.dark
        ? SEMANTIC_COLORS.NEUTRAL.BLACK
        : SEMANTIC_COLORS.NEUTRAL.WHITE};
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;

  :hover {
    border-color: ${(props) =>
      ColorHelper.hexToRGB(
        props.dark
          ? SEMANTIC_COLORS.NEUTRAL.BLACK
          : SEMANTIC_COLORS.NEUTRAL.WHITE,
        OPACITY_LEVEL.SEMIOPAQUE
      )};
  }

  i, ${MetaIcon} {
    font-size: 24px;
    color: ${(props) =>
      props.dark
        ? SEMANTIC_COLORS.NEUTRAL.BLACK
        : SEMANTIC_COLORS.NEUTRAL.WHITE};
  }
`;
