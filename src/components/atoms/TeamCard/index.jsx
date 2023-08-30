import { Socials, TeamCards, Wrapper, Links, Image } from './styles';
import { Heading4, Body3, Body4 } from '../../shared/Typography';
import { Icon } from '@iconify/react';

const TeamCard = ({ TeamMember }) => {
  return (
    <TeamCards>
      <Wrapper key={TeamMember}>
        <Image src={TeamMember.imagesrc} alt='Member' />
        <Heading4>{TeamMember.name}</Heading4>
        <Body3>{TeamMember.Position}</Body3>
        <Body4>{TeamMember.achievements}</Body4>
        <Socials>
          <Links href={TeamMember.Instagram}>
            <Icon icon='mdi:instagram' width='30' height='30' />
          </Links>
          <Links href={TeamMember.LinkedIn}>
            <Icon icon='mdi:linkedin' width='30' height='30' />
          </Links>
          <Links href={TeamMember.Twitter}>
            <Icon icon='ri:twitter-x-fill' width='30' height='30' />
          </Links>
        </Socials>
      </Wrapper>
    </TeamCards>
  );
};

export default TeamCard;
