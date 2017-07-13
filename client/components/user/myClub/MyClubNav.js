import React from "react";

const MyClubNav = ({ myClubNav }) => {
	return (
		<div className="myClubNav">
			<a href="#" className="whiteText clubNav" onClick={() => {
													let component = {
														home: true,
														control: false,
														bookshelves: false,
														reviews: false
													}
													myClubNav(component); 
												}}>Home</a>
			<a href="#" className="whiteText clubNav" onClick={() => {
													let component = {
														home: false,
														control: true,
														bookshelves: false,
														reviews: false
													}
													myClubNav(component); 
												}}>Admin</a>
			<a href="#" className="whiteText clubNav" onClick={() => {
													let component = {
														home: false,
														control: false,
														bookshelves: true,
														reviews: false
													}
													myClubNav(component); 
												}}>Bookshelves</a>
			<a href="#" className="whiteText clubNav" onClick={() => {
													let component = {
														home: false,
														control: false,
														bookshelves: false,
														reviews: true
													}
													myClubNav(component); 
												}}>Reviews</a>
		</div>
	)
}

export default MyClubNav