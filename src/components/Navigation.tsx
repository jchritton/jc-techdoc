import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export default class Navigation extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Speak My Language</h1>
        <ListGroup>
          <ListGroupItem active tag="a" href="#" action>Cras justo odio</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Morbi leo risus</ListGroupItem>
          <ListGroupItem tag="a" href="#" action>Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem disabled tag="a" href="#" action>Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </React.Fragment>
    );
  }
}
