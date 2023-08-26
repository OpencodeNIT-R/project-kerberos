import { Socials, TeamCards, Wrapper, Links } from './styles';
import { Heading4, Body3 } from '../../shared/Typography/Heading4';
import { TeamData } from '../../../data/TeamCardData/TeamData';
import { Icon } from '@iconify/react';

const TeamCard = () => {
  const TeamDatas = TeamData;
  return (
    <TeamCards>
      {TeamDatas.map(TeamMember => (
        <Wrapper key={TeamMember}>
          <img src={TeamMember.imagesrc} alt='Member' />
          <Heading4>{TeamMember.name}</Heading4>
          <Body3>{TeamMember.Position}</Body3>
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
      ))}
    </TeamCards>
  );
};

export default TeamCard;
