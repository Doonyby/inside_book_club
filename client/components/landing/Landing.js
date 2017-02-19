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
							<h3>“A book is more than a verbal structure or series of verbal structures; it is the dialogue it establishes with its reader and the intonation it imposes upon his voice and the changing and durable images it leaves in his memory. A book is not an isolated being: it is a relationship, an axis of innumerable relationships.”
								― Jorge Luis Borges</h3>
						</Col>
					</Row>
				</Grid>	
			</div>
		);
	}
}

export default Landing;