import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



const JoinMeeting = ({ club }) => {
	let date = "No date chosen yet."
	if (club.meetupDate) {
		date = moment(club.meetupDate).format('LLL');
	}
	return (
		<div>
			<h4><u>Current book meeting date</u></h4>
			<h4 className="clubInfo">{date}</h4>
			<p className="textLeft">When the meeting date and time arrive, click the button below to enter your club chatroom.</p>
		    <LinkContainer to={'/home/joinChatroom'}>
		    	<Button bsStyle="primary" className="bottomStyle">Enter chatroom</Button>
		    </LinkContainer>
		</div>
	);
}

export default JoinMeeting