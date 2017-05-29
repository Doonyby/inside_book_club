import React from "react";
import { Button, Badge, Label } from "react-bootstrap";
import moment from "moment";
import EditClubModal from "./EditClubModal";

const Control = ({ club, showEditClubModalControl, hideEditClubModal, submitEditClubControl, deleteClubControl }) => {
	let date = "No date chosen yet."
	if (club.meetupDate) {
		date = moment(club.meetupDate).format('LLL');
	}
	return (
		<div className="boxContainer">
			<h4><u>Control</u></h4>
			<p className="textLeft">Club name: <u className="clubInfo">{club.clubName.toUpperCase()}</u></p>
			<p className="textLeft">Current book: <u className="clubInfo">{club.currentBook.toUpperCase()}</u></p>
			<p className="textLeft">Member cap: <u className="clubInfo">{club.memberCap}</u></p>
			<p className="textLeft">Club meetup date: <u className="clubInfo">{date}</u></p>
			<Button bsStyle="primary" className="bottomStyle" onClick={() => { showEditClubModalControl() }}>Edit Club</Button>
			<EditClubModal club={club} hideEditClubModal={hideEditClubModal} submitEditClubModal={submitEditClubControl} deleteClubModal={deleteClubControl} />
		</div>
	)
}

export default Control

