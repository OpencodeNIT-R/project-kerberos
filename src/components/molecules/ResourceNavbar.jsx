//import React from 'react';

// Libraries
import styled from 'styled-components';

const ResourceNavContainer = styled.div`
  @media (max-width: 800px) {
    gap: 0;
    justify-content: space-evenly;
    width: 100%;
  }
  width: 100%;
  height: 50px;
  background: transparent;
  margin-bottom: 70px;
  border-bottom: 2px solid #000;

  display: flex;
  gap: 100px;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
  }
`;

const ResourceNavItem = styled.h4`
  color: ${({ isActive }) => (isActive ? '#245F02' : '#2A2A2A')};

  border-bottom: ${({ isActive }) => (isActive ? '3px solid #245F02' : '3px solid transparent')};

  border-radius: 3px;
  transition:
    color 250ms ease 0s,
    border-bottom 250ms ease 0s;
  font-size: 24px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  vertical-align: middle;
`;

const ResourceNavbar = ({ navItems, stage }) => (
  <ResourceNavContainer>
    {navItems.map(({ setStage, title, key }) => (
      <ResourceNavItem key={key} onClick={setStage} isActive={stage === key}>
        {title}
      </ResourceNavItem>
    ))}
  </ResourceNavContainer>
);

export default ResourceNavbar;
