import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


class Navigation extends React.Component {
	render () {
		return (
			<div>
			  <Navbar inverse>
			    <Nav>
			      <NavDropdown eventKey={1} title="Book Club Menu" id="menuDropdown">
			        <LinkContainer to={{ pathname: '/home/myclub' }}>
			          <MenuItem eventKey={1.1}>
						My Club
			          </MenuItem>
			        </LinkContainer>
			        <LinkContainer to={{ pathname: '/home/joinclub' }}>
			          <MenuItem eventKey={1.2}>
			            Join Club
			          </MenuItem>
					</LinkContainer>
			        <MenuItem eventKey={1.3}>What????</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={1.4}>More What???</MenuItem>
			      </NavDropdown>
			    </Nav>
			    <Nav pullRight>
			      <NavDropdown noCaret eventKey={2} title="My Name" id="menuDropdown">
			        <MenuItem eventKey={2.1}>Profile</MenuItem>
			        <MenuItem eventKey={2.2}>Information</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={2.3}>Sign out</MenuItem>
			      </NavDropdown>
			    </Nav>
			  </Navbar>
			</div>
		);
	}
}

export default connect()(Navigation);