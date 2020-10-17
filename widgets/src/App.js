import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';

const items = [
  {
    title: 'What is React?',
    content: 'React is a fron end javascript framework',
  },
  {
    title: 'Why use React?',
    content: 'React is a favorite JS library among developers',
  },
  {
    title: 'How do you use React',
    content: 'You use React by creating components',
  },
];

const options = [
  {
    label: 'The Color Red',
    value: 'red',
    text: 'Red',
  },
  {
    label: 'The Color Green',
    value: 'green',
    text: 'Green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
    text: 'Blue',
  },
];

export default () => {
  return (
    <div>
      {' '}
      <Translate />
    </div>
  );
};
