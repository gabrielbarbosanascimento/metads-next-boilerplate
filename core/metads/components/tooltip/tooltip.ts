import ReactTooltip from 'react-tooltip';
import styled from 'styled-components';
import { BORDER, SEMANTIC_COLORS, SPACING } from '../../utils';

export default styled(ReactTooltip)`
  padding: ${SPACING.XXXS} !important;
  background-color: ${SEMANTIC_COLORS.LOW.MID} !important;
  border-radius: ${BORDER.RADIUS.SM} !important;
  font-size: 12px !important;
  line-height: 133%;
  font-family: 'Archivo', sans-serif;
  min-width: 143px;
  border-width: 0px !important;
  color: ${SEMANTIC_COLORS.HIGH.MID};
  opacity: 1 !important;

  &::after {
    border-top-color: ${SEMANTIC_COLORS.LOW.MID} !important;
  }
`;
