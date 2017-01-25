import react from "react";
import { connect } from "react-redux";
import SelectClub from "./SelectClub";
import { generateClubListAction } from "../../../actions/user-actions";
import { joinClubAction } from "../../../actions/landing-actions";

const mapStateToProps = (state) => {
	return {
		club: state
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		generateClubList: () => { dispatch(generateClubListAction()) },
		joinClub: (clubObj) => { dispatch(joinClubAction(clubObj)) }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectClub);
