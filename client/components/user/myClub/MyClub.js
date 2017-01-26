import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import MembersContainer from "./MembersContainer";
import CommentFeedContainer from "./CommentFeedContainer";
import MeetingContainer from "./MeetingContainer";
import FutureBookShelfContainer from "./FutureBookShelfContainer";
import PastBookShelfContainer from "./PastBookShelfContainer";
import ClubControlContainer from "./ClubControlContainer";
import BookReviewsContainer from "./BookReviewsContainer";

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
						<h1>My Club: {this.props.club.myClubReducer.clubName.toUpperCase()}</h1>
					</Col> 
				</Row>
				<Row className="clubRow2">
					<Col md={3} className="boxContainer">
						<FutureBookShelfContainer />
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
						<PastBookShelfContainer />
					</Col>
					<Col md={5} mdOffset={1} className="boxContainer">
						<BookReviewsContainer />
					</Col>
					<Col md={2} mdOffset={1} className="boxContainer memberMargin">
						<MembersContainer />
					</Col>
				</Row>
				<Row className="clubRow4">
					<Col md={2} mdOffset={10} className="boxContainer controlMargin">
						<ClubControlContainer />
					</Col>
				</Row>
			</Grid>	
			</div>
		);
	}
}

export default MyClub;