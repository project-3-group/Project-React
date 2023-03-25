import React from 'react';
import TeamCard from './TeamCard';
import tala from '../../assest/tala.jpeg'; 
import emam from '../../assest/personal-img.jpg'
import mohamad from '../../assest/mohammad.jpeg'
import saif from '../../assest/saif.jpeg'
const Team = () => {
  const teamMembers = [
    {
      name: 'Emam AL Mounqer',
      pictureUrl: emam,
      githubUrl: 'https://github.com/emammounqer',
      linkedinUrl: 'https://www.linkedin.com/in/emamalmounqer/',
      email: '',
      phone: '0777349925'
    },
    {
      name: 'Tala Asfan',
      pictureUrl: tala ,
      githubUrl: 'https://github.com/asfantala',
      linkedinUrl: 'https://www.linkedin.com/in/tala-asfan-b827ab17b/',
      email: 'talaasfan@gmail.com',
      phone: '0795383053'
    },
    {
      name: 'Mohamad Shareef Naser',
      pictureUrl: mohamad,
      githubUrl: 'https://github.com/mshnas9',
      linkedinUrl: 'https://www.linkedin.com/in/mshnas9/',
      email: 'mshnas9@gmail.com',
      phone: '0788888384'
    },
    {
      name: 'Saif Obeidat',
      pictureUrl: saif,
      githubUrl: 'https://github.com/saifobe',
      linkedinUrl: 'https://www.linkedin.com/in/saif-obeidat-282730231',
      email: '',
      phone: '0795246002'
    }
  ];

  return (
    <div className="team-section">
      <TeamCard teamMembers={teamMembers} />
    </div>
  );
};

export default Team;