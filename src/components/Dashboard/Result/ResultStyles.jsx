import styled from 'styled-components';

import { fadeIn } from '../../../utils/animations.js';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: 800ms ${fadeIn} 100ms forwards;
`;

export const HeaderWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

export const Header = styled.div`
  background-color: ${(props) => props.primaryColor};
  width: 100%;
  height: 90px;
  color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Middle = styled.div`
  display: flex;
  flex: 1;
`;

export const style = (Icon) => styled(Icon)`
  stroke-width: 1;
  align-self: center;
`;

export const Gutter = styled.div`
  width: 1.25rem;
`;

export const CurrentTemp = styled.span`
  align-self: center;
  font-size: 4rem;
`;

export const Bottom = styled.span`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 1rem;
  align-items: center;
`;

export const contentStyle = {
  fill: 'hsla(222, 7%, 35%, .9)'
};
