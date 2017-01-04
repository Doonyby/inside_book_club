import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


class Navigation extends React.Component {
	render () {
		let homeTitle = {
			textAlign: "center"
		};

		return (
			<div>
			  <Navbar inverse>
			  	  <Grid>
				    <Row className="show-grid">
				      <Col md={2} className="navigationTitles">
					    <Nav>
					      <NavDropdown title="Book Club Menu" id="menuDropdown">
					        <LinkContainer to={{ pathname: '/home' }}>
					          <MenuItem eventKey={1.1}>
								My Club
					          </MenuItem>
					        </LinkContainer>
					        <LinkContainer to={{ pathname: '/home/joinclub' }}>
					          <MenuItem eventKey={1.2}>
					            Join Club
					          </MenuItem>
							</LinkContainer>
					        <MenuItem divider />
					        <LinkContainer to={{ pathname: '/home/chatroom' }}>
					          <MenuItem eventKey={1.4}>
					            Go to Chatroom
					          </MenuItem>
							</LinkContainer>
					      </NavDropdown>
					    </Nav>
				      </Col>
				      <Col md={8} className="navigationTitles">
					    <Navbar.Brand>
					       Inside Book Club
					    </Navbar.Brand>
				      </Col>
				      <Col md={2} className="navigationTitles">
					    <Nav>
					      <NavDropdown noCaret eventKey={2} title="My Name" id="menuDropdown">
					        <MenuItem eventKey={2.1}>Profile</MenuItem>
					        <MenuItem eventKey={2.2}>Information</MenuItem>
					        <MenuItem divider />
					        <LinkContainer to={{ pathname: '/' }}>
					          <MenuItem eventKey={2.3}>
					            Sign out
					          </MenuItem>
							</LinkContainer>
					      </NavDropdown>
					    </Nav>
				      </Col>
				    </Row>
				  </Grid>
			  </Navbar>
			</div>
		);
	}
}

export default connect()(Navigation);