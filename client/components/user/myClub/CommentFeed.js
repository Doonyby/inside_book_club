import React from "react";
import { Media, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

const Requests = ({ club, enterComment }) => {
	console.log('comment', club);
	let fontTitleStyle = {
		fontSize: 14
	}
	let fontTextStyle = {
		fontSize: 12
	}
	return (
		<div>
			<h4><u>Club comments</u></h4>
			<p>(No spoilers!!!! Some people just may not be as fast as you.)</p>
			<Media>
		      <Media.Body className="textLeft">
		        <Media.Heading style={fontTitleStyle}>Name</Media.Heading>
		        <p style={fontTextStyle}>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		      </Media.Body>
		    </Media>
		    <form className="textLeft clubRow2">
			    <FormGroup controlId="formControlsTextarea">
			      <p className="textLeft">Press "enter" to submit comment.</p>
			      <FormControl rows="4" name="commentArea" placeholder="add a comment" componentClass="textarea" onKeyDown={(e) => {
			      		if (e.which==13) {
			      			let comment = {
			      				username: club.homeReducer.username,
			      				comment: e.target.value,
			      				date: new Date(),
			      				clubId: club.myClubReducer.clubId
			      			}
			      			enterComment(comment)}}}  />
			    </FormGroup>
		    </form>
		</div>
	)
}

export default Requests