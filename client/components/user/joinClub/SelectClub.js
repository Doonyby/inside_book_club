import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";



const SelectClub = ({ club }) => {
	console.log('selectClub', club);
	let titleStyle = {
		marginBottom: 50
	}
	return (
		<div>
			<h2>Welcome to your joined club!</h2>
			<h3 style={titleStyle}>You have not joined a club yet. Please click the button below to generate 
				a list of clubs with availability and the books they are reading.  Once you have 
				found one that interests you, join the club and start your reading!</h3>
			<Button bsStyle="primary" bsSize="large" onClick={() => {console.log('generating list')}}>Generate List</Button>
			<p>generated list</p>
		</div>
	);
}

export default SelectClub