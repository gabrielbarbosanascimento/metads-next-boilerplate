import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import {
  BORDER,
  SEMANTIC_COLORS,
  FONT,
  OPACITY_LEVEL,
  SPACING,
  CONTEXTUAL_COLORS,
  CONTEXTUAL_COLORS_ALT,
} from '../../utils';
import { MetaIcon } from '../icon';

interface MetaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullwidth?: boolean;
  borders?: boolean;
}

export const MetaButton = styled.button<MetaButtonProps>`
  order: 0;
  flex-grow: 0;
  margin: 0px 0px;
  flex: none;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};

  border-radius: ${BORDER.RADIUS.PILL};
  border-width: ${(props) =>
    props.borders ? BORDER.WIDTH.THIN : BORDER.WIDTH.NONE};
  font-size: ${FONT.SIZE.XS};
  font-weight: ${FONT.WEIGHT.BOLD};
  line-height: ${FONT.LINE_HEIGHT.LG};
  min-width: 160px;
  width: ${(props) => (props.fullwidth ? '100%' : 'auto')};
  height: ${SPACING.MD};
  padding: 12px ${SPACING.XXS};

  cursor: pointer;

  i {
    margin: 0 ${SPACING.NANO};
    color: inherit;
  }

  .disabled,
  :disabled,
  [disabled] {
    opacity: ${OPACITY_LEVEL.MEDIUM};
    cursor: not-allowed;
  }

  /* PRIMARY VARIANTS */
  &.primary {
    background-color: ${CONTEXTUAL_COLORS.INTERACTIVE.PRIMARY};
    color: ${CONTEXTUAL_COLORS_ALT.CONTENT.TITLE};

    :not(.disabled),
    :not([disabled]) {
      :focus-visible,
      &.focus {
        outline: none;
        box-shadow: 0 0 0 4px ${CONTEXTUAL_COLORS_ALT.HIGHTLIGHT.FOCUS};
      }
    }

    :not(.disabled),
    :not([disabled]) {
      :hover {
        background-color: ${CONTEXTUAL_COLORS.INTERACTIVE.PRIMARY_HOVER};
      }
    }
  }
`;
