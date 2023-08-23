import styled, { keyframes } from 'styled-components';
import { Body2, Heading2 } from '../../shared/Typography';

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.95);
  }
`;
const scaleDownAnimation = keyframes`
  0% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;
export const MentorCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 480px;
  // &:hover {
  //   animation: ${scaleAnimation} 0.3s ease-in-out forwards;
  // }
  // animation: ${scaleDownAnimation} 0.3s ease-in-out forwards;
  border-radius: 10px;

  img {
    height: 370px;
    width: 500px;
    border-radius: 10px;
    @media (max-width: 768px) {
      height: 150px;
      width: 180px;
    }
  }
  @media (max-width: 768px) {
    height: 250px;
    width: 230px;
  }
`;
export const MentorName = styled(Heading2)`
  color: #fff;
  margin-top: 20px;
  margin-bottom: 10px;
  &:hover {
    color: inherit;
  }
`;
export const MentorDescription = styled(Body2)`
  color: #fff;
  &:hover {
    color: inherit;
  }
`;
