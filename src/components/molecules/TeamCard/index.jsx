import { MeetTheTeam, Headline } from '../../atoms/TeamCard/styles';
import { Heading4, Heading1 } from '../../shared/Typography/Heading4';
import TeamCard from '../../atoms/TeamCard';

const TeamSection = () => {
  return (
    <MeetTheTeam>
      <Headline>
        <Heading1>Meet The Team</Heading1>
        <Heading4>Get to Know the talented individuals behind our club</Heading4>
      </Headline>
      <TeamCard />
    </MeetTheTeam>
  );
};

export default TeamSection;
