import React from "react";
import { Grid, Row, Col, Fade } from "react-bootstrap";
import JoinedMembersContainer from "./JoinedMembersContainer";
import JoinedCommentContainer from "./JoinedCommentContainer";
import JoinMeetingContainer from "./JoinMeetingContainer";
import FutureBookShelfContainer from "../myClub/FutureBookShelfContainer";
import PastBookShelfContainer from "../myClub/PastBookShelfContainer";
import JoinControlContainer from "./JoinControlContainer";
import BookReviewsContainer from "../myClub/BookReviewsContainer";
import JoinClubNavContainer from "./JoinClubNavContainer";

class JoinClub extends React.Component {
	componentWillMount() {
		let clubName = this.props.club.homeReducer.joinedClub;
		this.props.getJoinClubData(clubName);
	}
	render() {
		let joinClubContents = ''
		if (this.props.club.joinClubReducer.joinClubNav.home) {
			joinClubContents = <Fade in={this.props.club.joinClubReducer.joinClubNav.home}>
							<Col md={6} mdOffset={3}>
								<JoinMeetingContainer />
								<JoinedMembersContainer />
								<JoinedCommentContainer />
							</Col>
						</Fade>				
		} else if (this.props.club.joinClubReducer.joinClubNav.control) {
			joinClubContents = <Fade in={this.props.club.joinClubReducer.joinClubNav.control}>
							<Col md={6} mdOffset={3}>
								<JoinControlContainer />
							</Col>
						</Fade>			
		} else if (this.props.club.joinClubReducer.joinClubNav.bookshelves) {
			joinClubContents = <Fade in={this.props.club.joinClubReducer.joinClubNav.bookshelves}>
						<Col md={6} mdOffset={3}>
							<FutureBookShelfContainer />
							<PastBookShelfContainer />
						</Col>			
						</Fade>
		} else if (this.props.club.joinClubReducer.joinClubNav.reviews) {
			joinClubContents = <Fade in={this.props.club.joinClubReducer.joinClubNav.reviews}>
							<Col md={6} mdOffset={3}>
								<BookReviewsContainer />
							</Col>
						</Fade>		
		}
		return (
			<div className="container">
			<Grid>
				<Row className="clubRow1">
					<Col md={6} mdOffset={3}>
						<h2 className="whiteText">Joined Club: {this.props.club.joinClubReducer.clubName.toUpperCase()}</h2>
					</Col> 
				</Row>
				<Row className="clubRow2">
					<JoinClubNavContainer />
				</Row>
				<Row className="clubRow3">
					{joinClubContents}
				</Row>
			</Grid>	
			</div>
		);
	}
}

export default JoinClub;

