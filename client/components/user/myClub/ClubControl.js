import React from "react";
import { Button, Badge, Label } from "react-bootstrap";
import moment from "moment";
import EditClubModal from "./EditClubModal";

const Control = ({ club, showEditClubModal, hideEditClubModal, submitEditClub }) => {
	console.log('club control', club);
	let bottomStyle = {
		marginBottom: 15
	}
	let date = moment(club.meetupDate).format('LLL');
	return (
		<div>
			<h4><u>Control</u></h4>
			<p className="textLeft">Club name: <u className="clubInfo">{club.clubName.toUpperCase()}</u></p>
			<p className="textLeft">Current book: <u className="clubInfo">{club.currentBook.toUpperCase()}</u></p>
			<p className="textLeft">Member cap: <u className="clubInfo">{club.memberCap}</u></p>
			<p className="textLeft">Club meetup date: <u className="clubInfo">{date}</u></p>
			<Button bsStyle="primary" style={bottomStyle} onClick={() => { return showEditClubModal() }}>Edit Club</Button>
			<EditClubModal club={club} hideEditClubModal={hideEditClubModal} />
		</div>
	)
}

export default Control

