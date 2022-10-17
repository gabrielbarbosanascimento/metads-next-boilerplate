import styled from 'styled-components';
import { SEMANTIC_COLORS, FONT, SPACING } from '../../utils';

export default styled.div`
  position: relative;

  label {
    display: block;
    font-weight: ${FONT.WEIGHT.BOLD};
    margin-bottom: ${SPACING.QUARCK} !important;
  }

  .error-message {
    color: ${SEMANTIC_COLORS.WARNING.MID};
    margin-top: 2px;
  }
`;
