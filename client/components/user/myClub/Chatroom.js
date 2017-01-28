import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
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
			let inChatroom = userDisplay.usersInChat.join('\n');
			document.getElementById('inChatroom').innerText = inChatroom;
			let outChatroom = userDisplay.usersInClub.join('\n');
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
				<h1>Club {this.props.club.myClubReducer.clubName.toUpperCase()} Chatroom</h1>
				<div className="chatroom">
					<div className="chatStats textLeft">
						<p style={pStyle} className="text-success"><strong><u>Already here:</u></strong></p>
							<p style={pStyle} className="text-success" id="inChatroom"></p>
						<p style={pStyle} className="text-danger"><strong><u>Currently absent:</u></strong></p>
							<p style={pStyle} className="text-danger" id="outChatroom"></p>
					</div>
					<div className="chatroomDiv container">
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
					</div>
				</div>
			</div>
		);		
	}
	componentWillUnmount () {
		location.reload();
	}

}

export default Chatroom;