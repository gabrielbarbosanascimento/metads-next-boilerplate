type LINE_HEIGHT = {
  XXL: '200%';
  XL: '170%';
  LG: '150%';
  MD: '133%';
  SM: '120%';
  XS: '115%';
  DEFAULT: '100%';
};

type SIZE = {
  XXXS: string;
  XXS: string;
  XS: string;
  SM: string;
  MD: string;
  LG: string;
  XL: string;
  XXL: string;
  XXXL: string;
  DISPLAY: string;
  GIANT: string;
};

type WEIGHT = {
  BOLD: 700;
  MEDIUM: 600;
  REGULAR: 400;
};

export const FONT: {
  WEIGHT: WEIGHT;
  LINE_HEIGHT: LINE_HEIGHT;
  SIZE: SIZE;
} = {
  WEIGHT: {
    BOLD: 700,
    MEDIUM: 600,
    REGULAR: 400,
  },
  LINE_HEIGHT: {
    XXL: '200%',
    XL: '170%',
    LG: '150%',
    MD: '133%',
    SM: '120%',
    XS: '115%',
    DEFAULT: '100%',
  },
  SIZE: {
    XXXS: '0.75rem',
    XXS: '0.875rem',
    XS: '1rem',
    SM: '1.25rem',
    MD: '1.5rem',
    LG: '2rem',
    XL: '2.5rem',
    XXL: '3rem ',
    XXXL: '4rem',
    DISPLAY: '5rem ',
    GIANT: '6rem',
  },
};        