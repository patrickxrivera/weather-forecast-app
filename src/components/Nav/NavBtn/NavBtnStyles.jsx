import styled from 'styled-components';

export const Btn = styled.button`
  width: 120px;
  height: 45px;
  font-weight: bold;
  text-align: center;
  background-color: #fff;
  color: hsla(206, 92%, 46%, 1);
  border: 1.8px solid hsla(206, 92%, 46%, 0.2);
  line-height: 1em;
  letter-spacing: 0.5px;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: 0;
  }

  &:hover {
    opacity: 0.7;
  }
`;
