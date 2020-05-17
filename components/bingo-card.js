import React from 'react';
import BingoSquare from '../components/bingo-square.js';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default (props) => {
    let squareContent = props.data.map((item, i) => {
      if ( i === 0 || i === 6 || i === 7 || i === 13 || i === 14 || i === 20 || i === 21 || i === 27 || i === 28 || i === 34 ) {
        return <Col key={item.pk} sm="1"></Col>;
      } else if (i === 17) {
        return <BingoSquare key={item.pk} className="text-primary" title="Free Space" text="" />;
      } else {
        return <BingoSquare key={item.pk} className="text-dark" title={item.title} text={item.text} />;
      }
    });

  return (
    <div>
      <Container>
        <Row>
          {squareContent}
        </Row>
      </Container>
    </div>
  );
};
