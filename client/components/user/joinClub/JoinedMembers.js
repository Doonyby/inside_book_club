import React from "react";

const JoinedMembers = ({ club }) => {
	return (
		<div className="bottomStyle">
			<h4><u>Joined club members</u></h4>
			<p className="textLeft">Organizer: <u className="clubInfo">{club.organizer}</u></p>
			<p className="textLeft">Members: <u className="clubInfo textLeft">{club.members.join(', ')}</u></p>
		</div>
	)
}

export default JoinedMembers