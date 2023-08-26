import faqData from '../../../data/faq';
import FaqItem from '../../atoms/faq/FaqItem';
import { FaqContainer, FaqHeading, Caption, FaqLayout } from './style';

const FaqComponent = () => {
  const faqs = Object.values(faqData);

  return (
    <FaqContainer>
      <FaqHeading>Faqs</FaqHeading>
      <Caption>Ask whatever you want</Caption>
      <FaqLayout>
        {faqs.map((faq, index) => (
          <FaqItem key={index} faq={faq} />
        ))}
      </FaqLayout>
    </FaqContainer>
  );
};

export default FaqComponent;
