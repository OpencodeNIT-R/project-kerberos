import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.h3`
  ${baseTypography}

  font-size: 24px;

  @media only screen and (max-width: 913px) {
    font-size: 12px;
    font-weight: 400;
  }
`;
