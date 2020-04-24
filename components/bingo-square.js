import React from 'react';
import {
  Card,
  CardBody,
  CardText,
  Button
} from 'reactstrap';

export default (props) => {
  return (
    <div className={props.className}>
      <Card className="text-center">
        <CardBody>
          <CardText>{props.title}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};
