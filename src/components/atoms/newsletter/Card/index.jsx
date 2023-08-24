import { Body2, Heading3 } from '../../../shared';
import { CardContainer, CardTitle, ImageContainer } from './styles';

const NewsletterCard = ({ title, description, category, type, id, image }) => {
  return (
    <CardContainer id={id}>
      <ImageContainer src={image} alt={title} />
      <CardTitle transform='uppercase'>
        <span>{category}</span> / {type}
      </CardTitle>
      <Heading3>{title}</Heading3>
      <Body2>{description}</Body2>
    </CardContainer>
  );
};

export default NewsletterCard;
