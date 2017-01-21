import React from "react";

const Members = ({ club }) => {
	let memberMessage = "Your club is capped at " + club.memberCap + " members: ";
	if (club.members.length == 0) {
		memberMessage = "You do not have any members that have joined your club yet.  Tell your friends!!!";
	}
	return (
		<div className="bottomStyle">
			<h4><u>Current club members</u></h4>
			<p>{memberMessage}</p>
			<u className="clubInfo">{club.members.join(', ')}</u>
		</div>
	)
}

export default Members