import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions/compareActions';
import CompareForm from '../components/CompareForm';
import Contributions from '../components/Contributions';
import VerticalBar from '../components/VerticalBar';
import FinalCodeSnippet from '../components/final_code_snippet';

export const ComparePage = (props) => {
  const {meta1, meta2, contributions1, contributions2, actions} = props;
  return (
    <div>
      <CompareForm meta1={meta1} meta2={meta2}/>
      <Contributions
        contributions1={contributions1}
        contributions2={contributions2}
        actions={actions} />
      <VerticalBar
        height={300} />
      <FinalCodeSnippet />
    </div>
  );
};

ComparePage.propTypes = {
  actions: PropTypes.object.isRequired,
  meta1: PropTypes.object.isRequired,
  meta2: PropTypes.object.isRequired,
  contributions1: PropTypes.array.isRequired,
  contributions2: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    meta1: state.users[0].meta,
    meta2: state.users[1].meta,
    contributions1: state.users[0].contributions,
    contributions2: state.users[1].contributions
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
