import TwitterIcon from '@mui/icons-material/Twitter';
import Body3 from '../../shared/Typography/Body3';
import Heading1 from '../../shared/Typography/Heading1';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { MeetTheTeam, Socials, TeamCards, Wrapper, Heading } from './styles';
import { Links } from './styles';
// import img1 from '../../../data/TeamCardData/profile1.svg';
import Heading4 from '../../shared/Typography/Heading4';

const TeamCard = () => {
  const team = [
    {
      name: 'Ayush',
      Position: 'President',
      imagesrc: 'https://res.cloudinary.com/dqbcbqcbr/image/upload/v1692779040/profile1_an3kgl.svg',
      Instagram: '',
      LinkedIn: '',
      Twitter: '',
    },
    {
      name: 'Swadin',
      Position: 'Vice-President',
      imagesrc: 'https://res.cloudinary.com/dqbcbqcbr/image/upload/v1692779040/profile1_an3kgl.svg',
      Instagram: '',
      LinkedIn: '',
      Twitter: '',
    },
    {
      name: 'Kishan',
      Position: 'Manager',
      imagesrc: 'https://res.cloudinary.com/dqbcbqcbr/image/upload/v1692779040/profile1_an3kgl.svg',
      Instagram: '',
      LinkedIn: '',
      Twitter: '',
    },
    {
      name: 'Pradyumn',
      Position: 'Member',
      imagesrc: 'https://res.cloudinary.com/dqbcbqcbr/image/upload/v1692779040/profile1_an3kgl.svg',
      Instagram: '',
      LinkedIn: '',
      Twitter: '',
    },
    {
      name: 'Adiya',
      Position: 'Member',
      imagesrc: 'https://res.cloudinary.com/dqbcbqcbr/image/upload/v1692779040/profile1_an3kgl.svg',
      Instagram: '',
      LinkedIn: '',
      Twitter: '',
    },
    {
      name: 'Nutan',
      Position: 'Member',
      imagesrc: 'https://res.cloudinary.com/dqbcbqcbr/image/upload/v1692779040/profile1_an3kgl.svg',
      Instagram: '',
      LinkedIn: '',
      Twitter: '',
    },
    {
      name: 'Tejash',
      Position: 'Camera Man',
      imagesrc: 'https://res.cloudinary.com/dqbcbqcbr/image/upload/v1692779040/profile1_an3kgl.svg',
      Instagram: '',
      LinkedIn: '',
      Twitter: '',
    },
    {
      name: 'Aniket',
      Position: 'Chaprasi',
      imagesrc: 'https://res.cloudinary.com/dqbcbqcbr/image/upload/v1692779040/profile1_an3kgl.svg',
      Instagram: '',
      LinkedIn: '',
      Twitter: '',
    },
  ];

  return (
    <MeetTheTeam>
      <Heading>
        <Heading1>Meet The Team</Heading1>
        <Heading4>Get to Know the talented individuals behind our club</Heading4>
      </Heading>
      <TeamCards>
        {team.map(TeamMember => (
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
    </MeetTheTeam>
  );
};

export default TeamCard;
