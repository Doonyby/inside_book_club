import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { clearErrorAction } from "../../actions/landing-actions";


class LandingNavigation extends React.Component {
	render () {
		return (
			<div className="navBar">
			  <Navbar inverse>
			  	  <Grid>
				    <Row className="show-grid">
				      <Col md={2}>
					    <Nav>
					      <LinkContainer to={{ pathname: '/information' }}>
					        <NavItem>
					          <span className="whiteText">About</span>
					        </NavItem>
						  </LinkContainer>
					    </Nav>
				      </Col>
				      <Col md={2} mdOffset={8}>
					    <Nav>
					        <LinkContainer to={{ pathname: '/Login' }}>
					          <NavItem onClick={ () => {this.props.clearError() }}>
					            <span className="whiteText">Login</span>
					          </NavItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: '/Signup' }}>
					          <NavItem onClick={ () => {this.props.clearError() }}>
					            <span className="whiteText">Signup</span>
					          </NavItem>
							</LinkContainer>
					    </Nav>
				      </Col>
				    </Row>
				  </Grid>
			  </Navbar>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		state: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		clearError: () => { dispatch(clearErrorAction()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingNavigation);