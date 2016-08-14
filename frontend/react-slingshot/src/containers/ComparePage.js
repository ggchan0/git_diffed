import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/compareActions';
import CompareForm from '../components/CompareForm';
import Contributions from '../components/Contributions';


export const ComparePage = (props) => {
  const { user1, user2, actions } = props;

  return (
    <div>
      <CompareForm
        meta1={user1.meta}
        meta2={user2.meta}
      />
      <Contributions
        contributions1={user1.contributions}
        contributions2={user2.contributions} />
    </div>
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
