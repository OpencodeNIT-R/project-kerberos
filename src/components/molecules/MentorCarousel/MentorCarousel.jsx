import MentorBox from '../../atoms/MentorCard/MentorCard';
import { CarouselContainer, CarouselTrack } from './styles';
import { Mentors } from '../../../../config';
export default function MentorCarousel() {
  return (
    <CarouselContainer>
      <CarouselTrack>
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox key={detailKey} imgUrl={Mentors[detailKey].imgUrl} imgTitle={Mentors[detailKey].title} />
        ))}
        {Object.keys(Mentors).map(detailKey => (
          <MentorBox key={detailKey + '-2'} imgUrl={Mentors[detailKey].imgUrl} imgTitle={Mentors[detailKey].title} />
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
}
