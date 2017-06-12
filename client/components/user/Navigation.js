import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


class Navigation extends React.Component {
	render () {
		return (
			<div className="navBar">
			  <Navbar inverse>
			  	  <Grid>
				    <Row className="show-grid">
				      <Col md={3} className="menuDropdown">
					    <Nav>
					      <NavDropdown title="Book Club Menu" id="menuDropdown">
					        <LinkContainer to={{ pathname: '/home' }}>
					          <MenuItem eventKey={1.1}>
								My Club
					          </MenuItem>
					        </LinkContainer>
					        <LinkContainer to={{ pathname: '/joinclub' }}>
					          <MenuItem eventKey={1.2}>
					            Join Club
					          </MenuItem>
							</LinkContainer>
					        <MenuItem divider />
					        <LinkContainer to={{ pathname: '/instruction' }}>
					          <MenuItem eventKey={1.4}>
					            Instructions
					          </MenuItem>
							</LinkContainer>
					      </NavDropdown>
					    </Nav>
				      </Col>
				      <Col md={3} mdOffset={2} className="navigationCol">
				      	<Nav>
						    <NavItem>
						       <span className="whiteText">Inside Book Club</span>
						    </NavItem>
					    </Nav>
				      </Col>
				      <Col md={4} >
					    <Nav className="navRight">
					      <NavDropdown noCaret pullRight eventKey={2} title={this.props.club.homeReducer.name.toUpperCase() + "'s Home Page"} id="menuDropdown">
					        <LinkContainer to={{ pathname: '/' }}>
					          <MenuItem eventKey={2.1}>
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