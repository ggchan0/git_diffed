import React, {PropTypes} from 'react';

class ChooseUsersToCompare extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.updateSearchUsername1 = this.updateSearchUsername1.bind(this);
    this.updateSearchUsername2 = this.updateSearchUsername2.bind(this);
    this.search1 = this.search1.bind(this);
    this.search2 = this.search2.bind(this);
  }

  updateSearchUsername1(event) {
    this.props.actions.updateSearchUsername(event.target.value, 0);
  }

  updateSearchUsername2(event) {
    this.props.actions.updateSearchUsername(event.target.value, 1);
  }

  search1(e) {
    if (e.keyCode === 13) {
      this.props.actions.search(this.props.user1.searchUsername, 0);
    }
  }

  search2(e) {
    if (e.keyCode === 13) {
      this.props.actions.search(this.props.user2.searchUsername, 1);
    }
  }

  render() {
    const { user1, user2 } = this.props;
    const inputStyle = {
      padding: "12px 20px",
      margin: "8px 0",
      display: "inline-block",
      border: "1px solid #ccc",
      borderRadius: "4px",
      boxSizing: "border-box"
    };

    return (
      <div style={{display: "inline-block", width: "100%", marginBottom: "50px"}}>
        <div className="person-left" style={{float:"left", width: "49.75%"}}>
          <div style={{textAlign: "center", margin: "300px 0"}}>
            <input
              style={inputStyle}
              type="text"
              placeholder="Enter Github Username"
              value={user1.searchUsername}
              onChange={this.updateSearchUsername1}
              onKeyDown={this.search1} />

          </div>
        </div>

        <div style={{float: "left", width: ".5%", height: window.innerHeight/2, background: "gray"}}/>

        <div className="person-right" style={{float:"right", width: "49.75%"}}>
          <div style={{textAlign: "center", margin: "300px 0"}}>
            <input
              style={inputStyle}
              type="text"
              placeholder="Enter Github Username"
              value={user2.searchUsername}
              onChange={this.updateSearchUsername2}
              onKeyDown={this.search2} />
          </div>
        </div>
      </div>
    );
  }
}

ChooseUsersToCompare.propTypes = {
  user1: PropTypes.object.isRequired,
  user2: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

export default ChooseUsersToCompare;
