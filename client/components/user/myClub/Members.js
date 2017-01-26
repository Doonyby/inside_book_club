import React from "react";

const Members = ({ club }) => {
	let marginStyle = {
		marginBottom: 3
	}
	let memberMessage = "Your club is capped at " + club.memberCap + ".";
	if (club.members.length == 0) {
		memberMessage = "You do not have any members that have joined your club yet.  Tell your friends!!!";
	}
	return (
		<div className="bottomStyle membersClubHeight">
			<h4 style={marginStyle}><u>Current club members</u></h4>
			<p style={marginStyle} className="textLeft">{memberMessage}</p>
			<p style={marginStyle} className="textLeft">Members: <u className="clubInfo">{club.members.join(', ')}</u></p>
		</div>
	)
}

export default Members