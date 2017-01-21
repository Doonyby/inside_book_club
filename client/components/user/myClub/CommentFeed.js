import React from "react";
import { Media, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import moment from "moment";

const Requests = ({ club, enterComment }) => {
	let fontTitleStyle = {
		fontSize: 15
	}
	let fontTextStyle = {
		fontSize: 13
	}
	let spaceStyle = {
		paddingLeft: 30,
		fontSize: 12,
		color: "blue"
	}
	let clubComment = club.myClubReducer.commentFeed.map((currentValue, index) => {
		let date = moment(currentValue.date).fromNow();
		let username = currentValue.username;
		return (
			<Media key={index}>
		      <Media.Body className="textLeft">
	            <Media.Heading style={fontTitleStyle}><u>{username}</u><span style={spaceStyle}>{date}</span></Media.Heading>
		        <p style={fontTextStyle}>{currentValue.comment}</p>
		      </Media.Body>
		    </Media>
		);
	});
	return (
		<div>
			<h4><u>Club comments</u></h4>
			<p>(No spoilers!!!! Some people just may not be as fast as you.)</p>
			<div className="commentDiv">{clubComment}</div>
		    <form id="commentForm" className="textLeft clubRow2">
			    <FormGroup>
			      <p className="textLeft">Press "enter" to submit comment.</p>
			      <FormControl rows="3" name="commentArea" placeholder="add a comment" componentClass="textarea" onKeyDown={(e) => {
			      		if (e.which==13) {
			      			e.preventDefault();
			      			let currentComment = {
			      				username: club.homeReducer.username,
			      				comment: e.target.value,
			      				date: new Date(),
			      				clubId: club.myClubReducer.clubId
			      			}
			      			if (!/[^\s]/.test(currentComment.comment)) {
			      				e.target.value = '';
			      				return
			      			}
			      			enterComment(currentComment);
			      			e.target.value = '';
							}}}  />
			    </FormGroup>
		    </form>
		</div>
	)
}

export default Requests