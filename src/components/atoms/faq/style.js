import styled from 'styled-components';
import { Icon } from '@iconify/react';
export const FaqItemContainer = styled.div`
  background-color: #f0f0f0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 16px;
  font-size: 22px;
  cursor: pointer;
  transition:
    background-color 0.3s,
    height 0.3s,
    padding 0.3s,
    transform 0.3s;

  &.active {
    background-color: #d9d9d9;
    height: auto;
    padding: 24px;
    transform: translateY(-5px);
  }
  > div:first-child {
    text-align: left;
    display: flex;
    justify-content: space-between;
  }
`;

export const Answer = styled.div`
  font-size: 18px;
  padding-top: 16px;
  display: ${props => (props.active ? 'block' : 'none')};
  text-align: left;
`;

export const ArrowIcon = styled(Icon)`
  font-size: 20px;
  transform: rotate(${props => (props.isActive ? '180deg' : '0deg')});
  transition: transform 0.3s;
`;
