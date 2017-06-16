import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Col, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { clearErrorAction, showLoginModalAction, showSignupModalAction, showInfoModalAction, loginRequest } from "../../actions/landing-actions";

class LandingNavigation extends React.Component {
	render () {
		return (
			<div className="navBar">
				<ul>
			        <li className="navLeft" onClick={ () => { this.props.showInfoModal() }}>
			          <span className="whiteText">About</span>
			        </li>
			        <li className="navLeft" onClick={ () => {
						let userData = {
							username: "jamesdean",
							password: "rebelwithoutacause"
						}
						this.props.demoLogin(userData);
					}}>
			          <span className="whiteText">Demo</span>
			        </li>
		            <li className="navRight" onClick={ () => {
		          						this.props.clearError();
		          						this.props.showLoginModal();
		          					 }}>
		                <span className="whiteText">Login</span>
		            </li>
		            <li className="navRight" onClick={ () => {
		          						console.log('action was called');
		          						this.props.clearError();
		          						this.props.showSignupModal();
		          					 }}>
		            	<span className="whiteText">Signup</span>
		            </li>
				</ul>
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
		showInfoModal: () => { dispatch(showInfoModalAction()) },
		demoLogin: (userData) => { dispatch(loginRequest(userData))}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingNavigation);