import styled from 'styled-components';
import { Sun } from 'react-feather';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  background-color: #fff;
  width: 180px;
  border-radius: 3px;
`;

export const Title = styled.span`
  font-size: 2rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSun = styled(Sun)`
  stroke-width: 1;
  flex: 1;
  align-self: center;
`;

export const Temp = styled(Title)`
  padding-left: 0.9rem;
`;
