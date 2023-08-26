import Heading1 from '../shared/Typography/Heading1.jsx';
import styled from 'styled-components';
import { useState } from 'react';
import ResourceNavbar from './ResourceNavbar.jsx';
import Casebook from './Casebook.jsx';
import Casedesk from './Casedesk.jsx';

const ResourceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  width: 100%;
  height: 600px;
  overflow-y: scroll;
  overflow-x: hidden;
`;

const ResourceSectionContainer = styled.div`
  width: 100%;
  background: #cdcdcd;
  display: flex;
  flex-direction: column;
  gap: 61px;
  padding: 30px 129px;
  margin: 0 auto;
  @media (max-width: 920px) {
    gap: 40px;
    padding: 20px;
  }
`;

const MainContainer = styled.div`
  width: 100%;
  height: 800px;
`;

const STAGES = {
  casebook: 'casebook',
  casedesk: 'casedesk',
};
export default function ResourceSection() {
  const [stage, setStage] = useState(STAGES.casebook);

  // Stage Handlers
  const setStageToCasebook = () => setStage(STAGES.casebook);
  const setStageToCasedesk = () => setStage(STAGES.casedesk);

  const navItems = [
    {
      title: 'Casebook',
      setStage: setStageToCasebook,
      key: STAGES.casebook,
    },
    {
      title: 'Casedesk',
      setStage: setStageToCasedesk,
      key: STAGES.casedesk,
    },
  ];

  const renderItems = stage => {
    switch (stage) {
      case STAGES.casedesk:
        return <Casedesk />;

      default:
        return <Casebook />;
    }
  };

  return (
    <ResourceSectionContainer>
      <Heading1>Resources</Heading1>
      <MainContainer>
        <ResourceNavbar navItems={navItems} stage={stage} />
        <ResourceItem>{renderItems(stage)}</ResourceItem>
      </MainContainer>
    </ResourceSectionContainer>
  );
}
