import React, {PropTypes} from 'react';
import { browserHistory } from 'react-router'

class ChooseUsersToCompare extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.updateSearchUsername1 = this.updateSearchUsername1.bind(this);
    this.updateSearchUsername2 = this.updateSearchUsername2.bind(this);
    this.search1 = this.search1.bind(this);
    this.search2 = this.search2.bind(this);

    this.state = {
      searchUsername1: "",
      searchUsername2: ""
    };
  }

  updateSearchUsername1(event) {
    this.setState({searchUsername1: event.target.value});
  }

  updateSearchUsername2(event) {
    this.setState({searchUsername2: event.target.value});
  }

  search1(e) {
    if (e.keyCode === 13) {
      //this.props.actions.search(this.state.searchUsername1, 0);
      browserHistory.push('/compare');
    }
  }

  search2(e) {
    if (e.keyCode === 13) {
      //this.props.actions.search(this.state.searchUsername2, 1);
      browserHistory.push('/compare');
    }
  }

  render() {
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
              type="string"
              placeholder="Enter Github Username"
              value={this.state.searchUsername1}
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
              value={this.state.searchUsername2}
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
