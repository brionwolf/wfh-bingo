import React, { useState } from 'react';
import Head from 'next/head'
import NavMain from '../components/nav-main.js';
import Footer from '../components/footer.js';
import BingoCard from '../components/bingo-card.js';
import data from '../data/data.json';

export default function Index() {

  const handleResetBoard = () => {
    console.log("Unclick all bingo squares");
  }

  const handleNewBoard = () => {
    console.log("Scrap the current board and load a new one");
  }

  return (
    <div>
      <Head>
        <title>WFH Bingo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavMain passResetBoard={handleResetBoard} passNewBoard={handleNewBoard} />
      <BingoCard data={data} />
      <Footer />
    </div>
  );
}
