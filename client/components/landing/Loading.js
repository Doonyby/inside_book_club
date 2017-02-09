import React from "react";

class Loading extends React.Component {
	render() {
		let marginStyle = {
			marginTop: 100
		}
		return (
			<div style={marginStyle} className="loadingDiv container whiteText">
				<h1>Loading...</h1>
			</div>
		);
	}
}

export default Loading;