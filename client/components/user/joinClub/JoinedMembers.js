import React from "react";

const JoinedMembers = ({ club }) => {
	let marginStyle = {
		marginBottom: 3
	}
	return (
		<div className="bottomStyle membersClubHeight">
			<h4 style={marginStyle}><u>Joined club members</u></h4>
			<p style={marginStyle} className="textLeft">Organizer: <u className="clubInfo">{club.organizer}</u></p>
			<p style={marginStyle} className="textLeft">Members: <u className="clubInfo textLeft">{club.members.join(', ')}</u></p>
		</div>
	)
}

export default JoinedMembers