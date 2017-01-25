import React from "react";

const Members = ({ club }) => {
	let memberMessage = "Your club is capped at " + club.memberCap + " members. ";
	if (club.members.length == 0) {
		memberMessage = "You do not have any members that have joined your club yet.  Tell your friends!!!";
	}
	return (
		<div className="bottomStyle">
			<h4><u>Current club members</u></h4>
			<p className="textLeft">{memberMessage}</p>
			<p className="textLeft">Members: <u className="clubInfo">{club.members.join(', ')}</u></p>
		</div>
	)
}

export default Members