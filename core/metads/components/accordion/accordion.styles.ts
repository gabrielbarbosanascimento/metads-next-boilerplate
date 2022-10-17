import styled from 'styled-components';
import { ColorHelper } from '../../../helpers';
import { SEMANTIC_COLORS, OPACITY_LEVEL, SPACING, BORDER } from '../../utils';
import buttonIconStyles from '../button-icon/button-icon.styles';

export default styled.div`
  padding: ${SPACING.XXXS};
  border-bottom: ${BORDER.WIDTH.THIN} solid ${SEMANTIC_COLORS.NEUTRAL.BLACK};

  &,
  .m-heading {
    color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
  }

  .content {
    color: ${ColorHelper.hexToRGB(
      SEMANTIC_COLORS.NEUTRAL.BLACK,
      OPACITY_LEVEL.SEMIOPAQUE
    )};
    -moz-transition: height 0.5s;
    -ms-transition: height 0.5s;
    -o-transition: height 0.5s;
    -webkit-transition: height 0.5s;
    overflow: hidden;

    div {
      padding: ${SPACING.XXXS};
    }
  }


  .d-flex {
    cursor: pointer;
  }

  ${buttonIconStyles} {
    transition: transform 0.5s ease-out;
    transform: rotate(0deg);
  }
  ${buttonIconStyles}.open {
    transform: rotate(45deg);
  }

  @media all and (max-width: 1000px) {
    .content {
      padding-left: 0;
    }
  }
`;
