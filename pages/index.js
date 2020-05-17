import NavMain from '../components/nav-main.js';
import BingoCard from '../components/bingo-card.js';
import data from '../data/data.json';


let squareContent = Object.values(data)[0];

for (let i = squareContent.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * i)
  const temp = squareContent[i]
  squareContent[i] = squareContent[j]
  squareContent[j] = temp
}

export default function Index() {
  return (
    <div>
      <NavMain />
      <BingoCard data={squareContent} />
    </div>
  );
}
