import styled, { injectGlobal } from 'styled-components';

const AppStyles = injectGlobal`
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue,
      sans-serif;
    color: #52565F;
  }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 1190px;
`;

export default AppStyles;
