import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";
import { Button, ButtonToolbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { clearErrorAction } from "../../actions/landing-actions";

class Welcome extends React.Component {
	render() {

		return (
			<div>
				<div className="landPanel2">
					<a onClick={ ()=>{ 
									let x = 1;
									let y = 1;
									setInterval(function() {
									    window.scrollTo(0, x);
									    x = x + 2;
									}, y);
								}}>
						<i id="toProfile" className="fa fa-chevron-down"></i>
					</a>
					<div className="siteDescription">
						<div className="welcomePic">
							<img src="./client/css/bookstack.png" height="250px" width="250px"/>
						</div>
						<div className="welcomePar">
							<p className="textLeft">Inside Book Club allows you to host and join 
							exlusive book clubs in order to create a closer and smaller atmosphere in which 
							to share reading experiences.  Much like a club hosted in the comfort of your own 
							home, you can control the amount of people to make it a conversation/discussion 
							promoting size.</p> 
						</div>
					</div>
				</div>
				<div className="landPanel3 whiteText">
					<h3>“A book is more than a verbal structure or series of verbal structures; it is the 
					dialogue it establishes with its reader and the intonation it imposes upon his voice 
					and the changing and durable images it leaves in his memory. A book is not an isolated 
					being: it is a relationship, an axis of innumerable relationships.”
					― Jorge Luis Borges</h3>
				</div>
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