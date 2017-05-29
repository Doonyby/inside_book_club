import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { clearErrorAction, showLoginModalAction, showSignupModalAction, showInfoModalAction } from "../../actions/landing-actions";

class LandingNavigation extends React.Component {
	render () {
		return (
			<div className="navBar">
			  <Navbar inverse>
			  	  <Grid>
				    <Row className="show-grid">
				      <Col md={2}>
					    <Nav>
					        <NavItem onClick={ () => { this.props.showInfoModal() }}>
					          <span className="whiteText">About</span>
					        </NavItem>
					    </Nav>
				      </Col>
				      <Col md={2} mdOffset={8}>
					    <Nav>
				          <NavItem onClick={ () => {
				          						this.props.clearError();
				          						this.props.showLoginModal();
				          					 }}>
				            <span className="whiteText">Login</span>
				          </NavItem>
				          <NavItem onClick={ () => {
				          						console.log('action was called');
				          						this.props.clearError();
				          						this.props.showSignupModal();
				          					 }}>
				            <span className="whiteText">Signup</span>
				          </NavItem>
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
		clearError: () => { dispatch(clearErrorAction()) },
		showLoginModal: () => { dispatch(showLoginModalAction()) },
		showSignupModal: () => { dispatch(showSignupModalAction()) },
		showInfoModal: () => { dispatch(showInfoModalAction()) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingNavigation);