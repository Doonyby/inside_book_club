import React from "react";

const JoinClubNav = ({ joinClubNav }) => {
	return (
		<div className="joinClubNav">
			<a href="#" className="whiteText" onClick={() => {
													let component = {
														home: true,
														control: false,
														bookshelves: false,
														reviews: false
													}
													joinClubNav(component); 
												}}>Home</a>
			<a href="#" className="whiteText" onClick={() => {
													let component = {
														home: false,
														control: true,
														bookshelves: false,
														reviews: false
													}
													joinClubNav(component); 
												}}>Control</a>
			<a href="#" className="whiteText" onClick={() => {
													let component = {
														home: false,
														control: false,
														bookshelves: true,
														reviews: false
													}
													joinClubNav(component); 
												}}>Bookshelves</a>
			<a href="#" className="whiteText" onClick={() => {
													let component = {
														home: false,
														control: false,
														bookshelves: false,
														reviews: true
													}
													joinClubNav(component); 
												}}>Reviews</a>
		</div>
	)
}

export default JoinClubNav