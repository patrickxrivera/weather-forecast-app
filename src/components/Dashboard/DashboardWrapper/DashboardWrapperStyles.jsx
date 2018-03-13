import styled from 'styled-components';

import { fadeInUp } from '../../../utils/animations.js';

export const OuterWrapper = styled.div`
  width: 100%;
  height: 470px;
  display: flex;
  align-items: center;
  opacity: 0;
  animation: 1200ms ${fadeInUp} 500ms forwards;
`;

export const CardWrapper = styled.div`
  border: 1px solid #ecf0f1;
  margin: 0 auto;
  width: 300px;
  height: 85%;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  font-weight: 300;
`;
