import styled from 'styled-components';
import { BORDER, SEMANTIC_COLORS, FONT, OPACITY_LEVEL, SPACING } from '../../utils';
import { MetaButtonIconTypes } from './button-icon';

export default styled.button<MetaButtonIconTypes>`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  background-color: ${(props) =>
    props.danger
      ? SEMANTIC_COLORS.WARNING.PURE
      : props.secondary
      ? SEMANTIC_COLORS.ACCENT.PURE
      : 'transparent'};
  border-radius: ${BORDER.RADIUS.PILL};
  border-width: ${BORDER.WIDTH.NONE};

  height: ${(props) => (props.size === 'LG' ? SPACING.MD : SPACING.XS)};
  width: ${(props) => (props.size === 'LG' ? SPACING.MD : SPACING.XS)};

  i {
    font-size: ${(props) =>
      props.size === 'LG' ? SPACING.XXS : SPACING.XXXS} !important;
    width: ${(props) =>
      props.size === 'LG' ? SPACING.XXS : SPACING.XXXS} !important;
    height: ${(props) =>
      props.size === 'LG' ? SPACING.XXS : SPACING.XXXS} !important;
    width: ${(props) => (props.size === 'LG' ? SPACING.XXS : SPACING.XXXS)};
    font-weight: ${FONT.WEIGHT.MEDIUM};
    color: ${(props) =>
      props.danger
        ? SEMANTIC_COLORS.WARNING.LIGHT
        : props.secondary
        ? SEMANTIC_COLORS.NEUTRAL.WHITE
        : SEMANTIC_COLORS.NEUTRAL.BLACK};
  }

  :hover {
    outline: 0;
    color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
    background-color: rgba(0, 0, 0, ${OPACITY_LEVEL.LIGHT});
  }

  :disabled {
    background-color: transparent;
    opacity: var(--opacity-level-medium);
    cursor: not-allowed;
    pointer-events: none;
  }
`;
