import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
import Welcome from "./Welcome";
import LandingNavigation from "./LandingNavigation";
import SignupContainer from "./SignupContainer";
import LoginContainer from "./LoginContainer";
import Information from "./Information";

class Landing extends React.Component {
	render() {
		return (
			<div>
				<LandingNavigation />
				<div className="appDiv">
					<SignupContainer />
					<LoginContainer />
					<Information />
					<div className="landPanel1">
						<h1 className="titleHeading">Inside Book Club</h1>
						<h3 className="whiteText">A more thoughtful social network for bookworms</h3>
					</div>					
					<div>
						<Welcome className="welcome" key="welcomeKey" />
					</div>
				</div>	
			</div>
		);
	}
}

export default Landing;