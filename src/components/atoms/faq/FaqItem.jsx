import { useState } from 'react';
//import { Icon } from '@iconify/react';
import { FaqItemContainer, Answer, ArrowIcon } from './style';
import arrowDown from '@iconify/icons-uil/arrow-down';

const FaqItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleFaq = () => {
    setIsActive(!isActive);
  };

  return (
    <FaqItemContainer className={isActive ? 'active' : ''} onClick={toggleFaq}>
      <div>
        {faq.question}
        <ArrowIcon icon={arrowDown} isActive={isActive} />
      </div>
      <Answer active={isActive}>{faq.answer}</Answer>
    </FaqItemContainer>
  );
};
export default FaqItem;
