import Heading5 from '../shared/Typography/Heading5.js';
import Body2 from '../shared/Typography/Body2.jsx';
import styled from 'styled-components';
import { Heading4 } from '../shared/index.js';

const ResourceContainer = styled.div`
  @media (min-width: 980px) {
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
  }
  @media (max-width: 480px) {
    margin: auto;
  }
  width: 90%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;

const ResourceImage = styled.img`
  @media (min-width: 980px) {
    width: 35%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
  width: 45%;
  margin: 0;
  padding: 0;
  object-fit: cover;
`;
const ResourceContent = styled.div`
  @media (min-width: 980px) {
    width: 60%;
    gap: 16px;
  }
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  align-items: flex-start;
  margin: auto 0;
  overflow: hidden;
`;

const handleClick = link => {
  return () => {
    window.open(link, '_blank');
  };
};
const ResourceCard = ({ title, subtitle1, subtitle2, image, alt, description, link }) => {
  return (
    <ResourceContainer>
      <ResourceImage src={image} alt={alt} />
      <ResourceContent>
        <Heading5 style={{ color: '#245F02' }}>
          {subtitle1}/<span style={{ color: '#000000' }}>{subtitle2}</span>
        </Heading5>
        <Heading4 onClick={handleClick(link)} style={{ cursor: 'pointer' }}>
          {title}
        </Heading4>
        <Body2 style={{ color: '#6C757D' }}>{description}</Body2>
      </ResourceContent>
    </ResourceContainer>
  );
};

export default ResourceCard;
