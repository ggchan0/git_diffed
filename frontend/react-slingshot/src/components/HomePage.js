import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/compareActions';
import ChooseUsersToCompare from '../components/ChooseUsersToCompare';

export const HomePage = (props) => {
  const { actions } = props;

  return (
    <div>
      <ChooseUsersToCompare actions={actions} />
    </div>
  );
};

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
