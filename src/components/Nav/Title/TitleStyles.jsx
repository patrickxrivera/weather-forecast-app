import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #52565f;

  &:visited {
    color: default;
  }
`;
