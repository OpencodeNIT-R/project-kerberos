import React, { useState } from 'react';
import styled from 'styled-components';
import Faq  from '../../../data/faq';

import FaqItem from '../../atoms/faq/FaqItem';
import { FaqContainer,FaqHeading,Caption,FaqLayout,  Answer } from './style';



const FaqComponent = () => {
  const faqs = [
    {
      question: 'How can I join?',
      answer: 'ojwokfkfqkfpqkopqik',
    },
    {
      question: 'What are the benefits?',
      answer: 'kjhihqjfoqjq iuquhquihyqgyqtg',
    },
    {
        question: 'What are the benefits?',
        answer: 'kjhihqjfoqjq iuquhquihyqgyqtg',
      },
      {
        question: 'How often are events held?',
        answer: 'kjhihqjfoqjq iuquhquihyqgyqtg',
      },
      {
        question: 'How can I contact you?',
        answer: 'kjhihqjfoqjq iuquhquihyqgyqtg',
      },
      {
        question: 'Can I suggest event ideas?',
        answer: 'kjhihqjfoqjq iuquhquihyqgyqtg',
      },

    
  ];

  const [activeIndex, setActiveIndex] = useState([]);

  const toggleFaq = (index) => {
    const newActiveIndexes=[...activeIndex];
    //setActiveIndex(activeIndex === index ? null : index);
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
           // className={activeIndex.includes(index) ? 'active' : ''}
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
