import styled, { keyframes } from 'styled-components';

export const CarouselContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 550px;
  border-color: #4b5563;
  background-color: black;
  width: 100%;
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const slideAnimation = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 200%;
  height: 100%;
  animation: ${slideAnimation} 10s linear infinite;
  animation-delay: -5s;
  &:hover {
    animation-play-state: paused;
  }
`;
