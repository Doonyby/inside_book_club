import React from "react";
import moment from "moment";
import { Button } from "react-bootstrap";



const SelectClub = ({ club, generateClubList, joinClub }) => {
	console.log('selectClub', club);
	let titleStyle = {
		marginBottom: 50
	}
	let infoStyle = {
		color: "green",
		paddingRight: 5
	}
	let joinError = '';
	let clubList = '';
	if (club.homeReducer.joinedClubError) {
		joinError = club.homeReducer.joinedClubError;
	}	
	if (club.joinClubReducer.generateClubList) {
		clubList = club.joinClubReducer.generateClubList.map((currentValue, index) => {
			let date = "No date chosen yet."
			if (currentValue.meetupDate) {
				date = moment(currentValue.meetupDate).format('LLL');
			}
			return (
				<li key={index}>Club Name: <u style={infoStyle}>{currentValue.clubName.toUpperCase()}</u>
					Current Openings: <u style={infoStyle}>{currentValue.openings}/{currentValue.memberCap}</u>
					Current Book: <u style={infoStyle}>"{currentValue.currentBook.toUpperCase()}"</u>
					Next Meetup Date: <u style={infoStyle}>{date}</u>
					<Button bsStyle="link" onClick={() => { 
						let clubObj = {};
						clubObj.clubName = currentValue.clubName;
						clubObj.userId = club.homeReducer.id;
						clubObj.username = club.homeReducer.username;
						joinClub(clubObj); }}>Join This Club!
					</Button>
				</li> 
			);
		})
	}
	return (
		<div>
			<h2>Welcome to your joined club!</h2>
			<h3 style={titleStyle}>You have not joined a club yet. Please click the button below to generate 
				a list of clubs with availability and the books they are reading.  Once you have 
				found one that interests you, join the club and start your reading!</h3>
			<Button className="bottomStyle" bsStyle="primary" bsSize="large" onClick={() => { generateClubList() }}>Generate List</Button>
			<h4 className="text-danger">{joinError}</h4>
			<ul className="shelfUl">{clubList}</ul>
		</div>
	);
}

export default SelectClub