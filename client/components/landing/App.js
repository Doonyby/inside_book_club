import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";


import Welcome from "./Welcome";

class App extends React.Component {
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
				</Grid>	
			</div>
		);
	} 
}

export default App;



