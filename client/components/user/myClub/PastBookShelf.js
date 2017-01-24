import React from "react";
import moment from "moment";


const PastBookShelf = ({ club, shelfPastBook, removePastBook }) => {
	console.log('pastBookShelf', club);
	let dateStyle = {
		fontSize: 11,
		color: "blue",
		paddingLeft: 8,
		paddingRight: 8
	}
	let shelfComment = "Books I have read: ";
	if (club.pastBookShelf.length == 0) {
		shelfComment = "You don't have any books on this shelf.";
	}
	let books = club.pastBookShelf.map((currentValue, index) => {
		let bookTitle = currentValue.title.toUpperCase();
		let bookDate = moment(currentValue.date).format('ll');
		let bookId = currentValue._id;
		return (
			<li className="shelfUl" key={index}><span>-{bookTitle}</span> <u style={dateStyle}>Shelved: {bookDate}</u><strong><a  className="text-danger" onClick={ () => { removePastBook({currentValue}) }}>X</a></strong></li>
		);
	})
	return (
		<div className="textLeft">
			<h4 className="textCenter"><u>Already Read Book Shelf</u></h4>
			<p>After finishing a book, enter the title here, so you can keep track of how many books you have read.</p>
			<input className="shelfInput bottomStyle" type="text" placeholder="type book title here" onKeyDown={(e) => {
				if(e.which==13) {
					e.preventDefault();
	      			if (!/[^\s]/.test(e.target.value)) {
	      				e.target.value = '';
	      				return
	      			}
	      			let shelvedBook = {};
	      			shelvedBook.title = e.target.value;
	      			shelvedBook.date = new Date;
	      			shelvedBook.userId = club.id;
					shelfPastBook(shelvedBook);
					e.target.value = '';
				}}}/>
			<div className="bookShelf textLeft">
				<p>{shelfComment}</p>
				<ul className="shelfUl">{books}</ul>
			</div>
		</div>
	)
}

export default PastBookShelf