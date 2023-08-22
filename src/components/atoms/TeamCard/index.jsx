import { useState } from 'react';

const TeamCard = () => {
  const [team] = useState([
    { name: 'Ayush', Position: 'President', imagesrc: '' },
    { name: 'Swadin', Position: 'Vice-President', imagesrc: '' },
    { name: 'Kishan', Position: 'Manager', imagesrc: '' },
    { name: 'Pradyumn', Position: 'Manager', imagesrc: '' },
    { name: 'Tejash', Position: 'Camera Man', imagesrc: '' },
    { name: 'Aniket', Position: 'Chaprasi', imagesrc: '' },
  ]);

  return (
    <div className='meettheteam'>
      <h1>Meet The Team</h1>
      <h4>Get to Know the talented individuals behind our club</h4>
      {team.map(TeamMember => {
        <div>
          <div>{TeamMember.name}</div>
          <div>{TeamMember.Position}</div>
          <div className='Socials'>
            <div>Instagram</div>
            <div>Linkedin</div>
            <div>Twitter</div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default TeamCard;
