import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MembersContainer from "../myClub/MembersContainer";
import CommentFeedContainer from "../myClub/CommentFeedContainer";
import MeetingContainer from "../myClub/MeetingContainer";
import FutureBookShelfContainer from "../myClub/FutureBookShelfContainer";
import PastBookShelfContainer from "../myClub/PastBookShelfContainer";
import ClubControlContainer from "../myClub/ClubControlContainer";
import BookReviewsContainer from "../myClub/BookReviewsContainer";

class JoinClub extends React.Component {
	componentWillMount() {
		let clubName = this.props.club.homeReducer.joinClub;
		this.props.getJoinClubData(clubName);
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
					<Col md={3} className="boxContainer">
						<FutureBookShelfContainer />
					</Col>
					<Col md={5} mdOffset={1} className="boxContainer">
						<BookReviewsContainer />
					</Col>
					<Col md={2} mdOffset={1} className="boxContainer">
						<ClubControlContainer />
					</Col>
				</Row>
				<Row className="clubRow4">
					<Col md={3} className="boxContainer">
						<PastBookShelfContainer />
					</Col>
				</Row>
			</Grid>	
			</div>
		);
	}
}

export default JoinClub;