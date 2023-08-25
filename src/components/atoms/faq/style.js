import styled from 'styled-components';

 export const FaqItemContainer = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px;
  font-size: 22px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: #d9d9d9;
  }
  > div:first-child { 
    text-align: left; 
  }
`;

export const Answer = styled.div`
  font-size: 22px;
  padding-top: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
    text-align:left;
`;
