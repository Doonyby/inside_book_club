import React from "react";
import axios from "axios";

const Reviews = ({ club }) => {
	let titleStyle = {
		textAlign: "center"
	}
	let getBookReview = (bookTitle) => {		
		axios.get('https://www.goodreads.com/book/title', {headers: {
				'format': 'json',
				'key': 'RXCGpZJiLibgDpDcsr6tA',
				'title': bookTitle			
		}})
			.then(function(response) {
				console.log('success', response.data);
			})
			.catch(function(error) {
				console.log('error', error);
			});
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
			<div id="goodreads-widget">
			  <div id="gr_header"><h1><a target="_blank" href="https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn">Goodreads reviews for The Adventures of Huckleberry Finn</a></h1></div>
			  <iframe id="the_iframe" src="https://www.goodreads.com/api/reviews_widget_iframe?did=21416&format=html&header_text=Goodreads+reviews+for+The+Adventures+of+Huckleberry+Finn&isbn=0142437174&links=660&review_back=fff&stars=000&text=000" width="455" height="400" frameBorder="0"></iframe>
			  <div id="gr_footer">
			    <a className="gr_branding" target="_blank" href="https://www.goodreads.com/book/show/2956.The_Adventures_of_Huckleberry_Finn?utm_medium=api&utm_source=reviews_widget">Reviews from Goodreads.com</a>
			  </div>
			</div>
		</div>
	)
}

export default Reviews