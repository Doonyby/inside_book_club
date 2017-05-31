import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



const Meeting = ({ club }) => {
	let date = club.meetupDate ? moment(club.meetupDate).format('LLL') : "No date chosen yet.";
	let title = club.currentBook ? club.currentBook : "No book chosen yet.";
	return (
		<div className="boxContainer">
			<h4 className="textLeft"><u>Current book meeting date:</u><span className="clubInfo">&nbsp;&nbsp;&nbsp;{date}</span></h4>
			<h4 className="textLeft"><u>Current book title:</u><span className="clubInfo">&nbsp;&nbsp;&nbsp;{title}</span></h4>
			<p className="textLeft">When the meeting date and time arrive, click the button below to enter your club chatroom.</p>
		    <LinkContainer to={'/myClubChatroom'}>
		    	<Button bsStyle="primary" className="bottomStyle">Enter chatroom</Button>
		    </LinkContainer>
		</div>
	);
}

export default Meeting