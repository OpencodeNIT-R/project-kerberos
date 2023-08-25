import Heading1 from '../../shared/Typography/Heading1';
import { MeetTheTeam, Heading } from '../../atoms/TeamCard/styles';
import Heading4 from '../../shared/Typography/Heading4';
import TeamCard from '../../atoms/TeamCard';

const TeamSection = () => {
  return (
    <MeetTheTeam>
      <Heading>
        <Heading1>Meet The Team</Heading1>
        <Heading4>Get to Know the talented individuals behind our club</Heading4>
      </Heading>
      <TeamCard />
    </MeetTheTeam>
  );
};

export default TeamSection;
