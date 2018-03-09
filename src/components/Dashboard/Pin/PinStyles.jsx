import styled from 'styled-components';

export const OuterWrapper = styled.div`
  background-color: ${(props) => props.secondaryColor};
  margin-bottom: 3rem;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.span`
  font-size: 2rem;
  margin: 0 auto;
`;
