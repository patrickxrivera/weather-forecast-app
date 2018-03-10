import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #ecf0f1;
  border-top: ${(props) => `4px solid ${props.primaryColor}`};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  width: 180px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.span`
  font-size: 2rem;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  background-color: ${(props) => props.secondaryColor};
`;

export const style = (Icon) => styled(Icon)`
  stroke-width: 1;
  flex: 1;
  align-self: center;
`;

export const Temp = styled(Title)`
  padding-left: 0.9rem;
`;
