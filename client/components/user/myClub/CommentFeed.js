import React from "react";
import { Media, Button, FormGroup, FormControl } from "react-bootstrap";

const Requests = ({ club }) => {
	let fontTitleStyle = {
		fontSize: 14
	}
	let fontTextStyle = {
		fontSize: 12
	}
	return (
		<div>
			<h4><u>Club comments</u></h4>
			<p>(No spoilers!!!! Some people just may not be as fast as you.)</p>
			<Media>
		      <Media.Body className="textLeft">
		        <Media.Heading style={fontTitleStyle}>Name</Media.Heading>
		        <p style={fontTextStyle}>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
		      </Media.Body>
		    </Media>
		    <form className="textLeft">
			    <FormGroup controlId="formControlsTextarea">
			      <FormControl componentClass="textarea" placeholder="add a comment" />
			    </FormGroup>
			    <Button className="bottomStyle" type="submit">Add comment</Button>
		    </form>
		</div>
	)
}

export default Requests