import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


class Navigation extends React.Component {
	render () {
		return (
			<div>
			  <Navbar inverse className="homeNav">
					    <Nav className="homeNavMenuContainer">
					      <NavDropdown className="homeNavMenu" title="Club Menu" id="menuDropdown">
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
				      	<Nav className="homeNavTitleContainer">
						    <NavItem className="homeNavTitle">
						       <span className="whiteText">Inside Book Club</span>
						    </NavItem>
					    </Nav>
					    <Nav className="navRight homeNavNameContainer">
					      <NavDropdown className="homeNavName" noCaret pullRight eventKey={2} title={this.props.club.homeReducer.name.toUpperCase()} id="menuDropdown">
					        <LinkContainer to={{ pathname: '/' }}>
					          <MenuItem eventKey={2.1}>
					            Sign out
					          </MenuItem>
							</LinkContainer>
					      </NavDropdown>
					    </Nav>
			  </Navbar>
			</div>
		);
	}
}

export default connect()(Navigation);