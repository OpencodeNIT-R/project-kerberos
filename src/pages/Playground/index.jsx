// import { Body2, Body3, Button, ButtonMeta, Heading1, Heading2, Heading3, Heading4, NavText } from '../../components/shared';
// import Body1 from '../../components/shared/Typography/Body1';
//import { Container } from './styles';
//import ResourceCard from "../../components/atoms/ResourceCard.jsx";
//import ResourceData from "../../data/ResourceData.js";
import ResourceSection from '../../components/molecules/ResourceSection.jsx';
import styled from 'styled-components';
const PlayContainer = styled.div`
  width: 100%;
  padding: 0 30px;
  margin: 0 auto;
`;
const Playground = () => {
  return (
    <PlayContainer>
      <ResourceSection />
    </PlayContainer>
  );
};

export default Playground;
