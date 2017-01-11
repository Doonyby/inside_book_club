import React from "react";
import { Button } from "react-bootstrap";

const Control = ({ club, showNewClubModal, hideNewClubModal, submitNewMyClub }) => {
	console.log('club: ', club);
	return (
		<div>
			<h4><u>Control</u></h4>
			<p>You do not have a club set up.  Click the button below to set up your club.</p>
			<Button onClick={() => { return showNewClubModal() }}>Create Club</Button>
		</div>
	)
}

export default Control

