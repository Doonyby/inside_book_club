import React from "react";
import { Link } from "react-router";
import { Button, ButtonToolbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

class Welcome extends React.Component {
	render() {
		return (
			<div className="welcomeDiv">
				<h1>Hiiii  Welcome to <strong>Inside Book Club</strong></h1>
				<p className="textLeft">This is a site where you can host and join private book clubs in order
					to create a more intimate atmosphere in which to share reading experiences.  
					Much like a club hosted in the comfort of your own living room, you can
					control the amount of people in your club to make it a conversation/discussion 
					promoting size.  Please click <Link to={"/information"}><strong>HERE</strong></Link> for 
					further information on how Inside Book Club works.</p> 
				<ButtonToolbar className="buttonToolBar">
				  <LinkContainer to={'/signup'}>
				    <Button bsStyle="primary">Signup</Button>
				  </LinkContainer>
				  <LinkContainer to={'/login'}>
				    <Button>Login</Button>
				  </LinkContainer>
			    </ButtonToolbar>
			</div>
		);	
	}
}

export default Welcome;