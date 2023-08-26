import { useState } from 'react';
import { FaqItemContainer, Answer, ArrowIcon } from './style';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const FaqItem = ({ faq }) => {
  const [isActive, setIsActive] = useState(false);
  const toggleFaq = () => {
    setIsActive(!isActive);
  };

  return (
    <FaqItemContainer className={isActive ? 'active' : ''} onClick={toggleFaq}>
      <div>
        {faq.question}
        <ArrowIcon isActive={isActive}>
          <ArrowDropDownIcon />
        </ArrowIcon>
      </div>
      <Answer active={isActive}>{faq.answer}</Answer>
    </FaqItemContainer>
  );
};
export default FaqItem;
