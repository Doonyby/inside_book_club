import React from "react";
import { Grid, Row, Col, Fade } from "react-bootstrap";
import MembersContainer from "./MembersContainer";
import CommentFeedContainer from "./CommentFeedContainer";
import MeetingContainer from "./MeetingContainer";
import FutureBookShelfContainer from "./FutureBookShelfContainer";
import PastBookShelfContainer from "./PastBookShelfContainer";
import ClubControlContainer from "./ClubControlContainer";
import BookReviewsContainer from "./BookReviewsContainer";
import MyClubNavContainer from "./MyClubNavContainer";

class MyClub extends React.Component {
	componentWillMount() {
		let clubName = this.props.club.homeReducer.myClub;
		this.props.getMyClubData(clubName);
	}
	render() {	
		let myClubContents = ''
		if (this.props.club.myClubReducer.myClubNav.home) {
			myClubContents = <Fade in={this.props.club.myClubReducer.myClubNav.home}>
							<Col md={6} mdOffset={3}>
								<MeetingContainer />
								<MembersContainer />
								<CommentFeedContainer />
							</Col>
						</Fade>				
		} else if (this.props.club.myClubReducer.myClubNav.control) {
			myClubContents = <Fade in={this.props.club.myClubReducer.myClubNav.control}>
							<Col md={6} mdOffset={3}>
								<ClubControlContainer />
							</Col>
						</Fade>			
		} else if (this.props.club.myClubReducer.myClubNav.bookshelves) {
			myClubContents = <Fade in={this.props.club.myClubReducer.myClubNav.bookshelves}>
						<Col md={6} mdOffset={3}>
							<FutureBookShelfContainer />
							<PastBookShelfContainer />
						</Col>			
						</Fade>
		} else if (this.props.club.myClubReducer.myClubNav.reviews) {
			myClubContents = <Fade in={this.props.club.myClubReducer.myClubNav.reviews}>
							<Col md={6} mdOffset={3}>
								<BookReviewsContainer />
							</Col>
						</Fade>		
		}
		return (
			<div className="container">
				<Grid>
					<Row className="clubRow1">
						<Col md={4} mdOffset={4}>
							<h2 className="whiteText">My Club: {this.props.club.myClubReducer.clubName.toUpperCase()}</h2>
						</Col> 
					</Row>
					<Row className="clubRow2 whiteText">
						<MyClubNavContainer />
					</Row>
					<Row className="clubRow3">
						{myClubContents}
					</Row>
				</Grid>	
			</div>
		);
	}
}

export default MyClub;