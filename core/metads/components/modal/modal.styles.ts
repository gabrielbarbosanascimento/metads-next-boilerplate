import styled from 'styled-components';
import { BORDER, SEMANTIC_COLORS, OPACITY_LEVEL, SPACING } from '../../utils';
import { motion, AnimatePresence } from 'framer-motion';

export default styled(motion.div)`
  background: ${SEMANTIC_COLORS.NEUTRAL.WHITE};
  border: ${BORDER.WIDTH.HAIRLINE} solid
    rgba(0, 0, 0, ${OPACITY_LEVEL.SEMITRANSPARENT});
  box-sizing: border-box;
  box-shadow: 0px 16px 48px rgba(0, 0, 0, 0.24);
  border-radius: 16px;
  max-width: 800px;
  min-height: 100px;
  flex: 1;
  overflow: hidden;
  max-height: calc(100vh - 128px);

  @media all and (max-height: 400px) {
    max-height: calc(100vh - 32px);
  }

  header {
    height: 80px;
    padding: ${SPACING.XXXS} ${SPACING.XXS};
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .content {
    padding: ${SPACING.XS};
    overflow-y: auto;
    max-height: calc(100vh - 300px);
  }

  footer {
    height: 80px;
    padding: ${SPACING.XXXS} ${SPACING.XXS};
    background-color: ${SEMANTIC_COLORS.HIGH.LIGHT};
  }
`;
