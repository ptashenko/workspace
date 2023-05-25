import { zodiakList } from '@/text/zodiakList';

export const test = [
  {
    button: 'next',
    smallButtons: ['skip', 'scan'],
  },
  {
    title: 'Date of Birth',
    titleTwo: 'City of Birth',
    img: 'astro.png',
    imgLight: 'light.svg',
    text:
      'Date is important for determining your sun sign, numerology and compatibility',
    button: 'City of Birth',
  },
  {
    title: 'Your Gender',
    text:
      'Gender is important for personalizing your ' +
      'relationship quide and well-being readings',
    genders: [
      ['male.svg', 'Male'],
      ['female.svg', 'Female'],
      ['non-binary.svg', 'Non-binary'],
    ],
  },
  {
    title: 'Your Name',
    img: ['boy.svg', 'girl.svg'],
  },
  {
    title: 'Relationship status',
    text: 'We need more details to make sure your horoscope is accurate',
    relations: [
      ['single.svg', 'Single'],
      ['relationship.svg', 'In relationship'],
      ['married.svg', 'Married'],
      ['divorced.svg', 'Divorced'],
      ['engaged.svg', 'Engaged'],
      ['complicated.svg', 'Complicated'],
    ],
  },
  {
    title: 'Interests',
    text: 'What interests you the most in your life?',
    interests: ['money', 'business', 'friends', 'love', 'family', 'career'],
  },
  {
    title: 'Different sign',
    text:
      'Do you feel like a different zodiac sign? ' +
      'If ‘yes’ please choose a sign.',
    not: 'None',
    zodiacs: zodiakList,
  },
  {
    title: 'Palm reading',
    text: 'Find out what the lines on your hands can tell about your fate',
  },
];
