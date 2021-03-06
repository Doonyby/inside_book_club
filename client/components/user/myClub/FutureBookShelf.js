import React from "react";
import moment from "moment";

const FutureBookShelf = ({ club, shelfFutureBook, removeFutureBook }) => {
	let dateStyle = {
		fontSize: 11,
		color: "#337ab7",
		paddingLeft: 5
	}
	let xStyle = {
		paddingLeft: 5
	}
	let shelfComment = "Books to read: ";
	if (club.futureBookShelf.length == 0) {
		shelfComment = "You don't have any books on this shelf.";
	}
	let books = club.futureBookShelf.map((currentValue, index) => {
		let bookTitle = currentValue.title.toUpperCase();
		let bookDate = moment(currentValue.date).format('ll');
		let bookId = currentValue._id;
		return (
			<li className="shelfUl" key={index}><span>-{bookTitle}</span> <u style={dateStyle}>Shelved: {bookDate}</u><a style={xStyle} className="text-danger btn" onClick={ () => { removeFutureBook({currentValue}) }}>X</a></li>
		);
	})
	return (
		<div className="textLeft tallDivHeight boxContainer">
			<h4 className="textCenter"><u>Future Book Shelf</u></h4>
			<p>This is where you can keep a list of books you would like to get around to in the future. Feel free to keep a running list and change it as you see fit.</p>
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
					shelfFutureBook(shelvedBook);
					e.target.value = '';
				}}}/>
			<div className="bookShelf textLeft">
				<p>{shelfComment}</p>
				<ul className="shelfUl">{books}</ul>
			</div>
		</div>
	)
}

export default FutureBookShelf