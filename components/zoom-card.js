import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap';

export default (props) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <Button>{props.button || "Select"}</Button>
        </CardBody>
      </Card>
    </div>
  );
};
