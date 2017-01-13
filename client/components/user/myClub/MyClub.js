import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MembersContainer from "./MembersContainer";
import CommentFeedContainer from "./CommentFeedContainer";
import MeetingContainer from "./MeetingContainer";
import RequestsContainer from "./RequestsContainer";
import BookReviewsContainer from "./BookReviewsContainer";
import ClubControlContainer from "./ClubControlContainer";
import InvitationsContainer from "./InvitationsContainer";

class MyClub extends React.Component {
	componentWillMount() {
		let clubName = this.props.club.homeReducer.myClub;
		this.props.getMyClubData(clubName);
	}
	render() {
		return (
			<div className="container">
			<Grid>
				<Row className="clubRow1">
					<Col md={4} mdOffset={4}>
						<h1>My Club</h1>
					</Col> 
				</Row>
				<Row className="clubRow2">
					<Col md={3} className="boxContainer">
						<MembersContainer />
					</Col>
					<Col md={5} mdOffset={1} className="boxContainer">
						<CommentFeedContainer />
					</Col>
					<Col md={2} mdOffset={1} className="boxContainer">
						<MeetingContainer />
					</Col>
				</Row>
				<Row className="clubRow3">
					<Col md={3}>
						<RequestsContainer />
						<InvitationsContainer />
					</Col>
					<Col md={5} mdOffset={1} className="boxContainer">
						<BookReviewsContainer />
					</Col>
					<Col md={2} mdOffset={1} className="boxContainer">
						<ClubControlContainer />
					</Col>
				</Row>
			</Grid>	
			</div>
		);
	}
}

export default MyClub;