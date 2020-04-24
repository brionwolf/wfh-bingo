import React from 'react';
import BingoSquare from '../components/bingo-square.js';
import {
  Container,
  Row,
  Col
} from 'reactstrap';

export default (props) => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm="1"></Col>
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="1" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="2" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="3" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="4" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="5" />
        </Row>
        <Row>
          <Col sm="1"></Col>
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="6" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="7" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="8" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="9" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="10" />
        </Row>
        <Row>
          <Col sm="1"></Col>
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="11" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="12" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="13" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="14" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="15" />
        </Row>
        <Row>
          <Col sm="1"></Col>
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="16" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="17" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="18" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="19" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="20" />
        </Row>
        <Row>
          <Col sm="1"></Col>
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="21" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="22" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="23" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="24" />
          <BingoSquare className="col-2 my-0 mx-0 py-0 px-0 text-danger" title="25" />
        </Row>
      </Container>
    </div>
  );
};
