import styled from 'styled-components';
import { baseTypography } from './baseTypography';

export default styled.h4`
  ${baseTypography}
  font-size: 24px;
  line-height: 32px;

  @media (max-width: 768px) {
    font-size: 8px;
    line-height: 12px;
  }
`;
