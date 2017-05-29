import React from "react";

const JoinedMembers = ({ club }) => {
	let marginStyle = {
		marginBottom: 3
	}
	return (
		<div className="bottomStyle membersClubHeight boxContainer">
			<h4 style={marginStyle}><u>Joined club members</u></h4>
			<p style={marginStyle} className="textLeft">Organizer: <u className="clubInfo">{club.organizer}</u></p>
			<p style={marginStyle} className="textLeft">Members: <span className="clubInfo textLeft">{club.members.join(', ')}</span></p>
		</div>
	)
}

export default JoinedMembers