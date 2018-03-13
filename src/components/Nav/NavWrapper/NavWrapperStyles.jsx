import styled from 'styled-components';

import { fadeIn } from '../../../utils/animations.js';

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ecf0f1;
  align-items: flex-end;
  margin-top: 1rem;
  padding: 0 1.5rem 0.5rem;
  opacity: 0;
  animation: 800ms ${fadeIn} 200ms forwards;
`;
