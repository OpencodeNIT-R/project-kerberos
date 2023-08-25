import React from 'react';
import styled from 'styled-components';
import { FaqItemContainer, Answer} from './style';



const FaqItem = ({ faq, isActive, onClick }) => {
  return (
    <FaqItemContainer className={isActive ? 'active' : ''} onClick={onClick}>
      <div>{faq.question}</div>
      <Answer active={isActive}>{faq.answer}</Answer>
    </FaqItemContainer>
  );
};

export default FaqItem;
