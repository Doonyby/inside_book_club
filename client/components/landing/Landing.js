import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
import Welcome from "./Welcome";

class Landing extends React.Component {
	render() {
		return (
			<div className="appDiv container">
				<Grid>
					<Row>
						<Col md={8} mdOffset={2}>
							<Welcome className="welcome" key="welcomeKey" />
						</Col>
					</Row>
					<Row>
						<Col md={8} mdOffset={2}>
							{this.props.children}
						</Col>
					</Row>
					<Row className="quote whiteText">
						<Col md={6} mdOffset={3}>
							<h3>“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.” 
								― Groucho Marx</h3>
						</Col>
					</Row>
				</Grid>	
			</div>
		);
	}
}

export default Landing;