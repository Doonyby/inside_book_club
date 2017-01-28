import React from "react";
import { FormGroup, FormControl } from "react-bootstrap";
import io from 'socket.io-client';

class Chatroom extends React.Component {
	render () {
		let inChatroom = '';
		let outChatroom = '';
		let totalUsers = this.props.club.myClubReducer.members;
		totalUsers.push(this.props.club.myClubReducer.organizer);

		const socket = io('/insideBookClubChat');		
		socket.connect();
		
		const usersDisplayFunc = (userDisplay) => {
			console.log('club', userDisplay.usersInClub);
			console.log('chat', userDisplay.usersInChat);
		}

		socket.on('connect', () => {
			socket.emit('room', this.props.club.myClubReducer.clubName, this.props.club.homeReducer.username, totalUsers);
		});	
		socket.on('userDisplay', usersDisplayFunc);

		// const getPresentUsers = presentUsers.map((currentValue, index) => {
		// 	return (
		// 		<li key={index}>{currentValue.username}</li>
		// 	);
		// })

 		return (
			<div>
				<h1>Club {this.props.club.myClubReducer.clubName.toUpperCase()} Chatroom</h1>
				<div className="chatroom">
					<div className="chatStats textLeft">
						<p className="text-success"><strong><u>Already here:</u></strong></p>
							<ul className="shelfUl inChatroom">
								
							</ul>
						<p className="text-danger"><strong><u>Currently absent:</u></strong></p>
							<ul className="shelfUl outChatroom">
								
							</ul>
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
						      			console.log(currentComment.username + ": " + currentComment.comment);
						      			e.target.value = '';
										}}}  />
						    </FormGroup>
					    </form>
					    <hr/>
					    <div className="textLeft">
					    	<p><strong>Name-</strong> Comment blah blah blah</p>
					    </div>
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