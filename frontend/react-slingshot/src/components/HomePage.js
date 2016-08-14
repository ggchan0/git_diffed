import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/compareActions';
import ChooseUsersToCompare from '../components/ChooseUsersToCompare';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { user1, user2, actions } = this.props;

    return (
      <div>
        <ChooseUsersToCompare
          user1={user1}
          user2={user2}
          actions={actions} />
      </div>
    );
  }
}

HomePage.propTypes = {
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
)(HomePage);
