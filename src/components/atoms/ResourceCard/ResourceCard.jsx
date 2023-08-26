import Body2 from '../../shared/Typography/Body2.jsx';
import styled from 'styled-components';
import { Heading4 } from '../../shared/index.js';

const ResourceContainer = styled.div`
  @media (min-width: 980px) {
    width: 70%;
    flex-direction: row;
    gap: 16px;
  }

  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const ResourceImage = styled.img`
  @media (min-width: 780px) {
    width: 256px;
  }
  width: 100px;
  margin: 0;
  padding: 0;
  object-fit: cover;
`;
const ResourceContent = styled.div`
  @media (min-width: 980px) {
    width: 700px;
    gap: 24px;
  }
  width: 200px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  margin: auto 0;
`;

const handleClick = link => {
  return () => {
    window.open(link, '_blank');
  };
};

const Subtitle = styled.p`
  @media (min-width: 980px) {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-family: 'Roboto', sans-serif;
`;
const ResourceCard = ({ title, subtitle1, subtitle2, image, alt, description, link }) => {
  return (
    <ResourceContainer>
      <ResourceImage src={image} alt={alt} />
      <ResourceContent>
        <Subtitle style={{ color: '#245F02', textTransform: 'uppercase', wordWrap: 'break-word' }}>
          {subtitle1}/<span style={{ color: '#000000' }}>{subtitle2}</span>
        </Subtitle>
        <Heading4 onClick={handleClick(link)} style={{ cursor: 'pointer' }}>
          {title}
        </Heading4>
        <Body2 style={{ color: '#6C757D' }}>{description}</Body2>
      </ResourceContent>
    </ResourceContainer>
  );
};

export default ResourceCard;
