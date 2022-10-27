import styled from 'styled-components';
import { SPACING } from '../../utils';

type size = 'LG' | 'MD' | 'SM';
export interface MetaIconProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size?: size;
}

function getSize(size?: size) {
  let dim: string = SPACING.XXS;
  if (size === 'MD' || !size) return dim;
  if (size === 'LG') dim = SPACING.XS;
  if (size === 'SM') dim = SPACING.XXXS;
  return dim;
}

export default styled.i<MetaIconProps>`
  font-size: ${(props: MetaIconProps) => getSize(props.size)};
`;
