import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";


class Navigation extends React.Component {
	render () {
		let dropdown = {
			display: "none",
		}
		return (
			<div className="navBar">
				<ul>
			        <li className="navLeft" id="menuDropdown">Club Menu</li>
				        <div style={dropdown}>
				        	<LinkContainer to={{ pathname: '/home' }}>
				          		<MenuItem eventKey={1.1}>My Club</MenuItem>
				        	</LinkContainer>
				        	<LinkContainer to={{ pathname: '/joinclub' }}>
				          		<MenuItem eventKey={1.2}>Join Club</MenuItem>
							</LinkContainer>
				        	<MenuItem divider />
				        	<LinkContainer to={{ pathname: '/instruction' }}>
				          		<MenuItem eventKey={1.4}>Instructions</MenuItem>
							</LinkContainer>			        
				        </div>
				    <li className="navLeft navTitle">Inside Book Club</li>
			        <li className="navRight">{this.props.club.homeReducer.name.toUpperCase()}</li>
				        <div style={dropdown}>
			        		<LinkContainer to={{ pathname: '/' }}>
				          		<MenuItem eventKey={2.1}>Sign out</MenuItem>
							</LinkContainer>
				        </div>
			    </ul>
			</div>
		);
	}
}

export default connect()(Navigation);