import React, { useState } from 'react';
import Head from 'next/head'
import NavMain from '../components/nav-main.js';
import Footer from '../components/footer.js';
import BingoCard from '../components/bingo-card.js';
import data from '../data/data.json';

export default function Index() {
  return (
    <div>
      <Head>
        <title>WFH Bingo</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavMain />
      <BingoCard data={data} />
      <Footer />
    </div>
  );
}
