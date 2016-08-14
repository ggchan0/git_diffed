import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/compareActions';
import CompareForm from '../components/CompareForm';

export const ComparePage = (props) => {
  return (
    <CompareForm
      loadUser1={props.actions.loadUser1}
      loadUser2={props.actions.loadUser2}
      user1={props.user1}
      user2={props.user2}
    />
  );
};

ComparePage.propTypes = {
  actions: PropTypes.object.isRequired,
  user1: PropTypes.object.isRequired,
  user2: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user1: state.users[0],
    user2: state.users[1]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComparePage);
