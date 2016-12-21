import React from "react";
import { connect } from 'react-redux';
import SignupPage from './SignupPage';
//import { deleteBlog } from '../actions';

const mapStateToProps = (state) => {
  return {
    user: state.homeReducer
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSubmit
	}
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (index) => dispatch(deleteBlog(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogListView)
