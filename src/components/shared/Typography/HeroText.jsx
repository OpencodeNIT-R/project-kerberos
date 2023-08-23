import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.p`
  ${baseTypography}
  font-size: 90px;
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
