import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import JoinedMembersContainer from "./JoinedMembersContainer";
import JoinedCommentContainer from "./JoinedCommentContainer";
import JoinMeetingContainer from "./JoinMeetingContainer";
import FutureBookShelfContainer from "../myClub/FutureBookShelfContainer";
import PastBookShelfContainer from "../myClub/PastBookShelfContainer";
import JoinControlContainer from "./JoinControlContainer";
import BookReviewsContainer from "../myClub/BookReviewsContainer";

class JoinClub extends React.Component {
	componentWillMount() {
		let clubName = this.props.club.homeReducer.joinedClub;
		this.props.getJoinClubData(clubName);
	}
	render() {
		return (
			<div className="container">
			<Grid>
				<Row className="clubRow1">
					<Col md={4} mdOffset={4}>
						<h1>Joined Club</h1>
					</Col> 
				</Row>
				<Row className="clubRow2">
					<Col md={3} className="boxContainer">
						<FutureBookShelfContainer />
					</Col>
					<Col md={5} mdOffset={1} className="boxContainer">
						<JoinedCommentContainer />
					</Col>
					<Col md={2} mdOffset={1} className="boxContainer">
						<JoinMeetingContainer />
					</Col>
				</Row>
				<Row className="clubRow3">
					<Col md={3} className="boxContainer">
						<PastBookShelfContainer />
					</Col>
					<Col md={5} mdOffset={1} className="boxContainer">
						<BookReviewsContainer />
					</Col>
					<Col md={2} mdOffset={1} className="boxContainer">
						<JoinedMembersContainer />
					</Col>
				</Row>
				<Row className="clubRow4">
					<Col md={2} mdOffset={10} className="boxContainer">
						<JoinControlContainer />
					</Col>
				</Row>
			</Grid>	
			</div>
		);
	}
}

export default JoinClub;