import React from "react";
var htmlParser = require('htmlparser2');

const Reviews = ({ reviews, getBookReview }) => {
	var dom = htmlParser.parseDOM(reviews);
	let review = '';
	let buildWidget = () => {
		let headerTarget = dom[1].children[1].children[0].children[0].attribs.href;
		let headerText = dom[1].children[1].children[0].children[0].children[0].data;
		let iframeSrc = dom[1].children[3].attribs.src;
		let footerTarget = dom[1].children[5].children[1].attribs.href;
		return (
			<div id="goodreads-widget">
			  <div id="gr_header"><h1><a target="_blank" href={headerTarget}>{headerText}</a></h1></div>
			  <iframe id="the_iframe" src={iframeSrc} width="455" height="400" frameBorder="0"></iframe>
			  <div id="gr_footer">
			    <a className="gr_branding" target="_blank" href={footerTarget}>Reviews from Goodreads.com</a>
			  </div>
			</div>
		)

	} 
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
			{buildWidget()}
		</div>
	)
}

export default Reviews