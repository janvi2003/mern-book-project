import React from 'react';
import AuthorCards from '../components/AuthorCards';
import aliHazelwoodImage from '../assets/Authors/Ali Hazelwood.jpeg';
import paulaHawkings from '../assets/Authors/paula Hawkin.jpg';
import LeighBardugo from '../assets/Authors/LeighBardugo.png';
import jKRowling from '../assets/Authors/jKRowling.jpeg';
import markManson from '../assets/Authors/MarkManson.jpeg';
import stephenKing from '../assets/Authors/StephenKing.jpeg';
import agathaChristie from '../assets/Authors/AgathaChristie.jpeg';
import KateFoster from '../assets/Authors/Kate Foster.jpg';
const Authors = () => {
  // Static author data
  const authors = [
    {
      id: 1,
      name: 'Ali Hazelwood',
      imageURL: aliHazelwoodImage,
    },
    {
      id: 2,
      name: 'Paula Hawkins',
      imageURL: paulaHawkings,
    },
    {
      id: 3,
      name: 'Leigh Bardugo',
      imageURL: LeighBardugo,
    },
    {
      id: 4,
      name: 'Kate Foster',
      imageURL: KateFoster,
    },
    {
      id: 5,
      name: 'J.K. Rowling',
      imageURL: jKRowling, // Replace with actual image URL
    },
    {
      id: 6,
      name: 'Mark Manson',
      imageURL: markManson, // Replace with actual image URL
    },
    {
      id: 7,
      name: 'Stephen King',
      imageURL: stephenKing, // Replace with actual image URL
    },
    {
      id: 8,
      name: 'Agatha Christie',
      imageURL: agathaChristie, // Replace with actual image URL
    },
  ];

  return (
    <div>
      <AuthorCards authors={authors} headline="Featured Authors" />
    </div>
  );
};

export default Authors;
