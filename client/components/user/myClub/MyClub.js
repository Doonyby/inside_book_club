import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";

class MyClub extends React.Component {
	render () {
		return (
			<Grid>
				<Row>
					<Col md={6} mdOffset={3}>
						<h1>My Club</h1>
					</Col> 
				</Row>
			</Grid>	
		);
	}
}

export default connect()(MyClub);