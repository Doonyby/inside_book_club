import React from "react";
import createFragment from 'react-addons-create-fragment';

const Reviews = ({ reviews, getBookReview }) => {
	console.log(reviews);
	var d = document.createElement('div');
	d.innerHTML = reviews;
	console.log('documentCreateElement', d);
	var parser = new DOMParser()
	var el = parser.parseFromString(reviews, "text/xml");
	console.log('xml conversion', el);

	let titleStyle = {
		textAlign: "center"
	}
	return (
		<div className="textLeft">
			<h4 style={titleStyle}><u>Searching for your next club book? Look up reviews here!</u></h4>
			<p className="textLeft">Enter a book title in the line below to pull up reviews from "goodreads.com".</p>
			<span>
				<a target="_blank" href="https://www.goodreads.com"><img className="textLeft" src="https://s.gr-assets.com/assets/icons/goodreads_icon_32x32-6c9373254f526f7fdf2980162991a2b3.png"/></a>
				<input className="reviewInput" type="text" placeholder="type book title here" onKeyDown={(e) => {
														if(e.which==13) {
															e.preventDefault();
															getBookReview(e.target.value);
															e.target.value = '';
														}}}/>
			</span>
			<hr/>
		</div>
	)
}

export default Reviews