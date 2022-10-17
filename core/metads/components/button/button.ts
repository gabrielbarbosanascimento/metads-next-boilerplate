import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import { BORDER, SEMANTIC_COLORS, FONT, OPACITY_LEVEL, SPACING } from '../../utils';
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

  border-radius: ${BORDER.RADIUS.SM};
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

  i,
  ${MetaIcon} {
    margin: 0 ${SPACING.NANO};
    color: inherit;
  }

  .disabled,
  :disabled,
  [disabled] {
    cursor: not-allowed;
    color: rgba(0, 0, 0, ${OPACITY_LEVEL.MEDIUM});
    background-color: rgba(0, 0, 0, ${OPACITY_LEVEL.SEMITRANSPARENT});

    i,
    ${MetaIcon} {
      color: rgba(0, 0, 0, ${OPACITY_LEVEL.MEDIUM});
    }
  }

  /* PRIMARY VARIANTS */
  &.primary {
    /* PURE */
    &,
    &.pure {
      background-color: ${SEMANTIC_COLORS.PRIMARY.PURE};
      color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};

      :not(.disabled),
      :not([disabled]) {
        :hover,
        :focus-visible,
        &.focus {
          background-color: ${ColorHelper.hexToRGB(
            SEMANTIC_COLORS.PRIMARY.PURE,
            OPACITY_LEVEL.SEMIOPAQUE
          )};
        }
      }
    }
    /* LIGHT */
    &.light {
      background-color: ${SEMANTIC_COLORS.PRIMARY.LIGHT};
      color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};

      :not(.disabled),
      :not([disabled]) {
        :hover,
        :focus-visible,
        &.focus {
          background-color: ${ColorHelper.hexToRGB(
            SEMANTIC_COLORS.PRIMARY.LIGHT,
            OPACITY_LEVEL.SEMIOPAQUE
          )};
        }
      }
    }
    /* MEDIUM */
    &.medium {
      background-color: ${SEMANTIC_COLORS.PRIMARY.MID};
      color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};

      :not(.disabled),
      :not([disabled]) {
        :hover,
        :focus-visible,
        &.focus {
          background-color: ${ColorHelper.hexToRGB(
            SEMANTIC_COLORS.PRIMARY.MID,
            OPACITY_LEVEL.SEMIOPAQUE
          )};
        }
      }
    }
    /* DARK */
    &.dark {
      background-color: ${SEMANTIC_COLORS.PRIMARY.DARK};
      color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};

      :not(.disabled),
      :not([disabled]) {
        :hover,
        :focus-visible,
        &.focus {
          background-color: ${ColorHelper.hexToRGB(
            SEMANTIC_COLORS.PRIMARY.DARK,
            OPACITY_LEVEL.SEMIOPAQUE
          )};
        }
      }
    }
  }
`;
