import React, { useState } from 'react';
import NavMain from '../components/nav-main.js';
import BingoCard from '../components/bingo-card.js';
import data from '../data/data.json';

export default function Index() {
  return (
    <div>
      <NavMain />
      <BingoCard data={data} />
    </div>
  );
}
