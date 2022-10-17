import { createGlobalStyle } from 'styled-components';
import { SPACING } from '../../utils';

export default createGlobalStyle`
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
          -ms-user-select: none; /* Internet Explorer/Edge */
              user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
  }

  .text-center {
    text-align: center;
  }

  .text-capitalize {
    text-transform: capitalize;
  }

  .cursor-pointer {
    cursor: pointer;
  }

  .m-1 {
    margin: ${SPACING.QUARCK} !important;
  }

  .m-2 {
    margin: ${SPACING.NANO} !important;
  }

  .m-3 {
    margin: ${SPACING.XXXS} !important;
  }

  .m-4 {
    margin: ${SPACING.XXS} !important;
  }

  .m-5 {
    margin: ${SPACING.XS} !important;
  }

  .p-1 {
    padding: ${SPACING.QUARCK} !important;
  }

  .p-2 {
    padding: ${SPACING.NANO} !important;
  }

  .p-3 {
    padding: ${SPACING.XXXS} !important;
  }

  .p-4 {
    padding: ${SPACING.XXS} !important;
  }

  .p-5 {
    padding: ${SPACING.XS} !important;
  }

  .mt-0 {
    margin-top: 0 !important;
  }

  .mt-1 {
    margin-top: ${SPACING.QUARCK} !important;
  }

  .mt-2 {
    margin-top: ${SPACING.NANO} !important;
  }

  .mt-3 {
    margin-top: ${SPACING.XXXS} !important;
  }

  .mt-4 {
    margin-top: ${SPACING.XXS} !important;
  }

  .mt-5 {
    margin-top: ${SPACING.XS} !important;
  }

  .mb-0 {
    margin-bottom: 0 !important;
  }

  .mb-1 {
    margin-bottom: ${SPACING.QUARCK} !important;
  }

  .mb-2 {
    margin-bottom: ${SPACING.NANO} !important;
  }

  .mb-3 {
    margin-bottom: ${SPACING.XXXS} !important;
  }

  .mb-4 {
    margin-bottom: ${SPACING.XXS} !important;
  }

  .mb-5 {
    margin-bottom: ${SPACING.XS} !important;
  }

  .mr-0 {
    margin-right: 0 !important;
  }

  .mr-1 {
    margin-right: ${SPACING.QUARCK} !important;
  }

  .mr-2 {
    margin-right: ${SPACING.NANO} !important;
  }

  .mr-3 {
    margin-right: ${SPACING.XXXS} !important;
  }

  .mr-4 {
    margin-right: ${SPACING.XXS} !important;
  }

  .mr-5 {
    margin-right: ${SPACING.XS} !important;
  }

  .ml-0 {
    margin-left: 0 !important;
  }

  .ml-1 {
    margin-left: ${SPACING.QUARCK} !important;
  }

  .ml-2 {
    margin-left: ${SPACING.NANO} !important;
  }

  .ml-3 {
    margin-left: ${SPACING.XXXS} !important;
  }

  .ml-4 {
    margin-left: ${SPACING.XXS} !important;
  }

  .ml-5 {
    margin-left: ${SPACING.XS} !important;
  }


  .pt-0 {
    padding-top: 0 !important;
  }

  .pt-1 {
    padding-top: ${SPACING.QUARCK} !important;
  }

  .pt-2 {
    padding-top: ${SPACING.NANO} !important;
  }

  .pt-3 {
    padding-top: ${SPACING.XXXS} !important;
  }

  .pt-4 {
    padding-top: ${SPACING.XXS} !important;
  }

  .pt-5 {
    padding-top: ${SPACING.XS} !important;
  }

  .pb-0 {
    padding-bottom: 0 !important;
  }

  .pb-1 {
    padding-bottom: ${SPACING.QUARCK} !important;
  }

  .pb-2 {
    padding-bottom: ${SPACING.NANO} !important;
  }

  .pb-3 {
    padding-bottom: ${SPACING.XXXS} !important;
  }

  .pb-4 {
    padding-bottom: ${SPACING.XXS} !important;
  }

  .pb-5 {
    padding-bottom: ${SPACING.XS} !important;
  }

  .pr-0 {
    padding-right: 0 !important;
  }

  .pr-1 {
    padding-right: ${SPACING.QUARCK} !important;
  }

  .pr-2 {
    padding-right: ${SPACING.NANO} !important;
  }

  .pr-3 {
    padding-right: ${SPACING.XXXS} !important;
  }

  .pr-4 {
    padding-right: ${SPACING.XXS} !important;
  }

  .pr-5 {
    padding-right: ${SPACING.XS} !important;
  }

  .pl-0 {
    padding-left: 0 !important;
  }

  .pl-1 {
    padding-left: ${SPACING.QUARCK} !important;
  }

  .pl-2 {
    padding-left: ${SPACING.NANO} !important;
  }

  .pl-3 {
    padding-left: ${SPACING.XXXS} !important;
  }

  .pl-4 {
    padding-left: ${SPACING.XXS} !important;
  }

  .pl-5 {
    padding-left: ${SPACING.XS} !important;
  }
`;
