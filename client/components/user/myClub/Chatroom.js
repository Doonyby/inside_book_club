import React from "react";
import { FormGroup, FormControl, Grid, Row, Col } from "react-bootstrap";
import io from 'socket.io-client';

class Chatroom extends React.Component {
	render () {
		let pStyle = {
			marginBottom: 0
		}
		let totalUsers = this.props.club.myClubReducer.members;
		totalUsers.push(this.props.club.myClubReducer.organizer);

		const socket = io('/insideBookClubChat');		
		socket.connect();
		const usersDisplayFunc = (userDisplay) => {
			let inChatroom = userDisplay.usersInChat.join(', ');
			document.getElementById('inChatroom').innerText = inChatroom;
			let outChatroom = userDisplay.usersInClub.join(', ');
			document.getElementById('outChatroom').innerText = outChatroom;
		}
		const displayMessage = (messageDisplay) => {
			let pTag = document.createElement("P");
			pTag.innerText = messageDisplay;
			let displayDiv = document.getElementById('chatMessageDisplay');
			displayDiv.insertBefore(pTag, displayDiv.firstChild);
		}
		socket.on('connect', () => {
			socket.emit('room', this.props.club.myClubReducer.clubName, this.props.club.homeReducer.username, totalUsers);
		});	
		socket.on('userDisplay', usersDisplayFunc);
		socket.on('message', displayMessage);

 		return (
			<div>
				<h1 className="whiteText">Club {this.props.club.myClubReducer.clubName.toUpperCase()} Chatroom</h1>
				<Grid className="chatroom">
					<Row>
						<Col md={3} mdOffset={3} className="chatStats textLeft">
							<p style={pStyle} className="textHere"><strong><u>Already here:</u></strong></p>
							<p className="textHere" id="inChatroom"></p>
						</Col>
						<Col md={3} mdOffset={0} className="chatStats textLeft">
							<p style={pStyle} className="textAbsent"><strong><u>Currently absent:</u></strong></p>
							<p className="textAbsent" id="outChatroom"></p>
						</Col>
					</Row>
					<Row>
						<Col md={6} mdOffset={3} className="chatroomDiv container">
							<form id="commentForm" className="textLeft clubRow2">
							    <FormGroup>
							      <p className="textLeft">Press "enter" to submit comment.</p>
							      <FormControl rows="3" name="chatArea" placeholder="add a comment" componentClass="textarea" onKeyDown={(e) => {
							      		if (e.which==13) {
							      			e.preventDefault();
							      			let currentComment = {
							      				username: this.props.club.homeReducer.username,
							      				comment: e.target.value,
							      			}
							      			if (!/[^\s]/.test(currentComment.comment)) {
							      				e.target.value = '';
							      				return
							      			}
							      			socket.emit('messageObj', currentComment);
							      			e.target.value = '';
											}}}  />
							    </FormGroup>
						    </form>
						    <hr/>
						    <div id="chatMessageDisplay" className="textLeft"></div>
						</Col>
					</Row>
				</Grid>
			</div>
		);		
	}
	componentWillUnmount () {
		location.reload();
	}

}

export default Chatroom;