import styled from 'styled-components';

import { Plus } from 'react-feather';

export const OuterWrapper = styled.div`
  border: 1px solid #ecf0f1;
  margin: 0 auto;
  width: 300px;
  height: 85%;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  text-align: center;
`;

export const TextWrapper = styled.span`
  font-size: 2rem;
  margin: 0 auto;
  margin-bottom: 3rem;
`;

export const BigText = styled.span`
  font-size: 2.5rem;
`;

export const StyledPlus = styled(Plus)`
  stroke-width: 1.2;
`;
