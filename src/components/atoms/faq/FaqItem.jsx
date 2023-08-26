import { useState } from 'react';
import { FaqItemContainer, Answer } from './style';

const FaqItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleFaq = () => {
    setIsActive(!isActive);
  };

  return (
    <FaqItemContainer className={isActive ? 'active' : ''} onClick={toggleFaq}>
      <div>{faq.question}</div>
      <Answer active={isActive}>{faq.answer}</Answer>
    </FaqItemContainer>
  );
};
export default FaqItem;
