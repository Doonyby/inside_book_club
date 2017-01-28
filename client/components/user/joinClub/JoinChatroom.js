import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import io from 'socket.io-client';

class JoinChatroom extends React.Component {
	render () {
		let pStyle = {
			marginBottom: 0
		}
		let totalUsers = this.props.club.joinClubReducer.members;
		totalUsers.push(this.props.club.joinClubReducer.organizer);

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
			socket.emit('room', this.props.club.joinClubReducer.clubName, this.props.club.homeReducer.username, totalUsers);
		});	
		socket.on('userDisplay', usersDisplayFunc);
		socket.on('message', displayMessage);

		return (
			<div>
				<h1>Club {this.props.club.joinClubReducer.clubName.toUpperCase()} Chatroom</h1>
				<div className="chatroom">
					<div className="chatStats textLeft">
						<p className="text-success"><strong><u>Already here:</u></strong></p>
							<p id="inChatroom"></p>					
						<p className="text-danger"><strong><u>Currently absent:</u></strong></p>
							<p id="outChatroom"></p>					
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

export default JoinChatroom;