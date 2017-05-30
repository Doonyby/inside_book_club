import React from "react";
import { Button, Badge, Label } from "react-bootstrap";
import moment from "moment";

const JoinControl = ({ club, leaveJoinedClub }) => {
	let date = "No date chosen yet."
	if (club.joinClubReducer.meetupDate) {
		date = moment(club.joinClubReducer.meetupDate).format('LLL');
	}
	return (
		<div className="boxContainer">
			<h4><u>Control</u></h4>
			<p className="textLeft">Club name: <u className="clubInfo">{club.joinClubReducer.clubName.toUpperCase()}</u></p>
			<p className="textLeft">Current book: <u className="clubInfo">{club.joinClubReducer.currentBook.toUpperCase()}</u></p>
			<p className="textLeft">Member cap: <u className="clubInfo">{club.joinClubReducer.memberCap}</u></p>
			<p className="textLeft">Club meetup date: <u className="clubInfo">{date}</u></p>
			<Button bsStyle="danger" bsSize="xsmall" className="bottomStyle" onClick={() => {
				if (confirm("Are you sure you want to leave this Club? Any club info and members you have will be lost.") == true) {
					let clubObj = {};
					clubObj.id = club.joinClubReducer.clubId;
					clubObj.username = club.homeReducer.username;
					clubObj.userId = club.homeReducer.id;
					leaveJoinedClub(clubObj) 	
				}}}>Leave this club</Button>
		</div>
	)
}

export default JoinControl