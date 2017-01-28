import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Instructions extends React.Component {
	render() {
		return (
			<div className="informationDiv">
				<Grid>
					<Row>
						<Col md={6} mdOffset={3}>
							<h1>Instructions</h1>
							<p className="textLeft"><u>My Club:</u></p>
							<p className="textLeft">This is the space that you have to organize, and control
							your club.  You can keep track of books you would like to read and have read.  You 
							can keep a comment feed going about progress, club changes, and announcements.  If 
							you have a curiosity about a book, type it into the book reviews section to attain 
							a list of reviews for that book from goodreads.com.  Your club control allows you to 
							see and edit the specifics of how you want your club run.  And last, but not least, when 
							you set up a meetup date for the current book your club is reading, make sure to attend 
							by clicking on the "enter chatroom" button on the side that will take you to a space where 
							you and your club members can chat in real time about the book.</p>
							<p className="textLeft"><u>Join Club:</u></p>
							<p className="textLeft">This space is almost identical to your "My Club" page, but you will
							not have control over club specifics.  The only control you will have is whether or not you 
							you want to comment on the feed.  You can also choose to leave the club you have joined at 
							any time.  However, it is rude to leave in the middle of a book.  Don't be a flake!</p>
						</Col>
					</Row>
				</Grid>	
			</div>
		);	
	}
}

export default Instructions;