import TwitterIcon from '@mui/icons-material/Twitter';
import Body3 from '../../shared/Typography/Body3';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Socials, TeamCards, Wrapper } from '../../molecules/TeamCard/styles';
import { Links } from '../../molecules/TeamCard/styles';
import Heading4 from '../../shared/Typography/Heading4';
import TeamData from '../../../data/TeamCardData/TeamData.json';

const TeamCard = () => {
  return (
    <TeamCards>
      {TeamData.map(TeamMember => (
        <Wrapper key={TeamMember}>
          <img src={TeamMember.imagesrc} alt='Member' />
          <Heading4>{TeamMember.name}</Heading4>
          <Body3>{TeamMember.Position}</Body3>
          <Socials>
            <Links href={TeamMember.Instagram}>
              <InstagramIcon></InstagramIcon>
            </Links>
            <Links href={TeamMember.LinkedIn}>
              <LinkedInIcon></LinkedInIcon>
            </Links>
            <Links href={TeamMember.Twitter}>
              <TwitterIcon></TwitterIcon>
            </Links>
          </Socials>
        </Wrapper>
      ))}
    </TeamCards>
  );
};

export default TeamCard;
