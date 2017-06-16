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
					<a> 
						<i id="toProfile" className="fa fa-chevron-down"></i>
					</a>
					<div className="siteDescription">
						<div className="welcomePic">
							<img src="./client/css/bookstack.png"/>
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
					<p>“A book is more than a verbal structure or series of verbal structures; it is the 
					dialogue it establishes with its reader and the intonation it imposes upon his voice 
					and the changing and durable images it leaves in his memory. A book is not an isolated 
					being: it is a relationship, an axis of innumerable relationships.”
					― Jorge Luis Borges</p>
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