import { createGlobalStyle } from 'styled-components';
import { ColorHelper } from '../../../helpers';
import {
  BORDER,
  SEMANTIC_COLORS,
  FONT,
  OPACITY_LEVEL,
  SHADOW,
  SPACING,
} from '../../utils';

export default createGlobalStyle`
  body {
    margin: 0 auto;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body {
    font-size: 16px
  }

  html {
    box-sizing: border-box;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  a {
    cursor: pointer;
  }

  #nprogress .bar {
    background: ${SEMANTIC_COLORS.ACCENT.PURE} !important;
    height: 6px !important;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px ${SEMANTIC_COLORS.ACCENT.PURE}, 0 0 5px ${
  SEMANTIC_COLORS.ACCENT.PURE
} !important;
  }

  #nprogress .spinner {
    display: none !important;
  }

  .pnotify-container {
    background-color: ${SEMANTIC_COLORS.NEUTRAL.WHITE};
    border-width: ${BORDER.WIDTH.HAIRLINE};
    border-color: ${SEMANTIC_COLORS.HIGH.MID};
    box-shadow: ${
      SHADOW.LEVEL_2
    } rgba(--neutral-color-low-pure, --opacity-level-semitransparent);
    width: 420px !important;
    padding: 16px !important;
    border-radius: ${BORDER.RADIUS.SM};
  }

  .pnotify-title {
    flex-grow: 0;
    display: inline-flex !important;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    font-size: ${FONT.SIZE.MD} !important;
    line-height: ${FONT.LINE_HEIGHT.DEFAULT};
    font-weight: ${FONT.WEIGHT.BOLD};
    color: ${SEMANTIC_COLORS.NEUTRAL.BLACK};
    height: 48px;
    margin-left: 0px !important;
  }

  .pnotify-text {
    font-size:  ${FONT.SIZE.XS} !important;
    line-height:  ${FONT.LINE_HEIGHT.LG};
    font-weight: ${FONT.WEIGHT.REGULAR};
    color: ${SEMANTIC_COLORS.LOW.MID};
    margin-left: 42px !important;
    overflow-x: hidden;
  }

  .pnotify-icon span {
    top: 0px !important;
    font-size: 48px;
    margin-right: 16px; 
  } 

  .pnotify .pnotify-icon span {
    flex-grow: 0;
    display: inline-flex !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 48px;
    width: 48px;
    border-radius: 50%;
  }
  .pnotify .pnotify-icon span::before {
    font-family: 'Material Icons';
    font-size: 24px;
  }

  .pnotify.success .pnotify-icon span {
    background: ${SEMANTIC_COLORS.SUCCESS.LIGHT};
    color: ${SEMANTIC_COLORS.SUCCESS.MID};
  }
  .pnotify.success .pnotify-icon span::before {
    content: 'check'
  }

  .pnotify.error .pnotify-icon span {
    background: ${SEMANTIC_COLORS.WARNING.LIGHT};
    color: ${SEMANTIC_COLORS.WARNING.MID};
  }
  .pnotify.error .pnotify-icon span::before {
    content: 'error';
  }

  .pnotify.notice .pnotify-icon span {
    background: ${SEMANTIC_COLORS.WARNING.LIGHT};
    color: ${SEMANTIC_COLORS.WARNING.MID};
  }
  .pnotify.notice .pnotify-icon span::before {
    content: 'warning';
  }
  .pnotify-closer {
    height: 40px;
    flex-grow: 0;
    display: inline-flex !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .pnotify-closer span:hover {
      opacity: var(--opacity-level-intense);
  }

  .pnotify-closer span::before {
    content: 'close';
    font-family: 'Material Icons';
  }accent

  body::-webkit-scrollbar {
    width: ${SPACING.QUARCK};
    margin-right: 10px;
  }
  
  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, ${OPACITY_LEVEL.SEMITRANSPARENT});
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${ColorHelper.hexToRGB(
      SEMANTIC_COLORS.LOW.MID,
      OPACITY_LEVEL.INTENSE
    )};
    width: ${SPACING.QUARCK};
    border-radius: ${BORDER.RADIUS.MD};
  }

  body::-webkit-scrollbar-thumb:hover {
    background-color: ${SEMANTIC_COLORS.LOW.MID};
  }

`;
