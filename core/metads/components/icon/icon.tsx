import styled from 'styled-components';
import { SPACING } from '../../utils';

type size = 'LG' | 'MD' | 'SM';
interface MetaIconProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  size?: size;
}

function getSize(size?: size) {
  let dim: string = SPACING.XXS;
  if (size === 'MD' || !size) return dim;
  if (size === 'LG') dim = SPACING.XS;
  if (size === 'SM') dim = SPACING.XXXS;
  return dim;
}

export const MetaIcon = styled.i.attrs(() => ({
  className: 'material-icons',
}))`
  width: ${(props: MetaIconProps) => getSize(props.size)};
  height: ${(props: MetaIconProps) => getSize(props.size)};
  font-size: ${(props: MetaIconProps) => getSize(props.size)};
`;
