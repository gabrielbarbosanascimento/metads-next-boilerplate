import styled from 'styled-components';
import { BORDER } from '../../utils';

type size = 'SM' | 'MD' | 'LG';
type MetaSkeletonProps = {
  size?: size;
};

function getSize(size: size) {
  if (size === 'MD' || !size) return '1rem';
  if (size === 'LG') return '1.5rem';
  return '0.8rem';
}

export const MetaSkeleton = styled.div<MetaSkeletonProps>`
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 50 10rem;
  min-height: ${(props) => getSize(props.size)};
  width: 100%;
  display: inline-block;
  position: relative;
  border-radius: ${BORDER.RADIUS.SM};
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-name: placeholderShimmer;
  -webkit-animation-name: placeholderShimmer;
  animation-timing-function: linear;
  -webkit-animation-timing-function: linear;

  @-webkit-keyframes placeholderShimmer {
    0% {
      background-position: -29.25rem 0;
    }
    100% {
      background-position: 29.25rem 0;
    }
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
    100% {
      background-position: 468px 0;
    }
  }
`;
