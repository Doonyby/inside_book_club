import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Button, ButtonToolbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { clearErrorAction } from "../../actions/landing-actions";

class Welcome extends React.Component {
	render() {
		return (
			<div className="welcomeDiv">
				<h1 className="whiteText">Welcome to <strong>Inside Book Club</strong></h1>
				<p className="textLeft whiteText">This is a site where you can host and join exlusive book clubs in order
					to create a closer and smaller atmosphere in which to share reading experiences.  
					Much like a club hosted in the comfort of your own living room, you can
					control the amount of people in your club to make it a conversation/discussion 
					promoting size.  Please click <Link to={"/information"}><strong>HERE</strong></Link> for 
					further information on how Inside Book Club works.</p> 
				<ButtonToolbar className="buttonToolBar">
				  <LinkContainer to={'/signup'}>
				    <Button onClick={ () => {this.props.clearError() }} bsStyle="primary">Signup</Button>
				  </LinkContainer>
				  <LinkContainer to={'/login'}>
				    <Button onClick={ () => {this.props.clearError() }}>Login</Button>
				  </LinkContainer>
			    </ButtonToolbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);