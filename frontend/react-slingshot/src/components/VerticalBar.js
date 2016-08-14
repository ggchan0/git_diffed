import React, {PropTypes} from 'react';

class ChooseUsersToCompare extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { height } = this.props;

    return (
      <div style={{display: "inline-block", width: "100%", marginBottom: "50px", height}}>
        <div className="person-left" style={{float:"left", width: "49.75%", height}} />

        <div style={{float: "left", width: ".5%", background: "gray", height}} />

        <div className="person-right" style={{float:"right", width: "49.75%", height}} />
      </div>
    );
  }
}

ChooseUsersToCompare.propTypes = {
  height: PropTypes.number.isRequired
};

export default ChooseUsersToCompare;
