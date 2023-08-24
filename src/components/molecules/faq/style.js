import styled from 'styled-components';

const FaqContainer = styled.div`
  padding: 25px;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const FaqHeading = styled.div`
font-weight: 700;
font-size: 54px;
font-family:Roboto;
font-style:normal;
text-align: left; 
padding-right: 25px; 
margin-bottom:160px;

@media (max-width: 768px) {
  font-size: 36px;
  padding-right: 15px; 
  margin-bottom:80px;
}
`;





const Caption = styled.div`
 margin-bottom:116px;
    font-size: 24px;
    text-align:left;
    font-syle:normal;
    font-family: Roboto;

`;

const FaqLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const FaqItem = styled.div`
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

const Answer = styled.div`
  font-size: 22px;
  padding-top: 16px;
  display: ${(props) => (props.active ? 'block' : 'none')};
`;