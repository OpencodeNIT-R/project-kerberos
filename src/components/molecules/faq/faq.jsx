import React, { useState } from 'react';
import styled from 'styled-components';
import faqData  from '../../../data/faq';

import FaqItem from '../../atoms/faq/FaqItem';
import { FaqContainer,FaqHeading,Caption,FaqLayout,  Answer } from './style';



const FaqComponent = () => {
  
  const faqs = Object.values(faqData);
  

  const [activeIndex, setActiveIndex] = useState([]);

  const toggleFaq = (index) => {
    const newActiveIndexes=[...activeIndex];
   
   if(newActiveIndexes.includes(index)){
    const indexToRemove=newActiveIndexes.indexOf(index);
    newActiveIndexes.splice(indexToRemove,1);    
   }
    else{
        newActiveIndexes.push(index);
        }
    setActiveIndex(newActiveIndexes);

};

  return (
    <FaqContainer>
      <FaqHeading>Faqs</FaqHeading>
      <Caption>Ask whatever you want</Caption>
      <FaqLayout>
        {faqs.map((faq, index) => (
          <FaqItem
          
            key={index}
            faq={faq}
            isActive={activeIndex.includes(index)}

            onClick={() => toggleFaq(index)}
          >
            <div>{faq.question}</div>
            <Answer active={activeIndex.includes(index)}>{faq.answer}</Answer>
          </FaqItem>
        ))}
      </FaqLayout>
    </FaqContainer>
  );
};

export default FaqComponent;
