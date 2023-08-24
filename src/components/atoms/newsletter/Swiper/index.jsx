import { useState } from 'react';
import NewsletterCard from '../Card';
import NewsletterNavigation from '../Navigation';
import { SwiperContainer, SwiperWrapper } from './styles';

const Swiper = ({ data }) => {
  const [active, setActive] = useState(0);

  return (
    <>
      <SwiperContainer>
        <SwiperWrapper active={active}>
          {data.map(item => (
            <NewsletterCard key={item.id} {...item} />
          ))}
        </SwiperWrapper>
      </SwiperContainer>
      <NewsletterNavigation count={data.length} active={active} setActive={setActive} />
    </>
  );
};

export default Swiper;
