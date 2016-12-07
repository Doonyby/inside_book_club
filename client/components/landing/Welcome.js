import React from "react";
import { Link } from "react-router";

class Welcome extends React.Component {
	render() {
		return (
			<div className="welcomeDiv">
				<h1>Welcome to <strong>Inside Book Club</strong></h1>
				<p>This is a site where you can host and join private book clubs in order
					to create a more intimate atmosphere in which to share reading experiences.  
					Much like a club hosted in the comfort of your own living room, You can
					control the amount of people in your club to make it a conversation/discussion 
					promoting size.  Please click <Link to={"/instructions"}><strong>HERE</strong></Link> for 
					further information and instructions on how Inside Book Club works.</p> 
				<button><Link to={"/signup"}>Signup</Link></button>
				<button><Link to={"/login"}>Login</Link></button>
			</div>
		);	
	}
}

export default Welcome;