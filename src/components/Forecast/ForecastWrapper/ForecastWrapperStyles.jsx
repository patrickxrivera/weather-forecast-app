import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;
  border: 1px solid transparent;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  font-size: 1.75rem;
  justify-content: center;
`;

export const Title = styled.span`
  color: ${(props) => props.color};
`;
