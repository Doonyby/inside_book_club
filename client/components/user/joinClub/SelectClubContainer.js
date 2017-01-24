import react from "react";
import { connect } from "react-redux";
import SelectClub from "./SelectClub";

const mapStateToProps = (state) => {
	return {
		club: state
	}
}

export default connect(mapStateToProps)(SelectClub);
