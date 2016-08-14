import React, {PropTypes} from 'react';

class ChooseUsersToCompare extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {value1: '', value2: ''};
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.search1 = this.search1.bind(this);
    this.search2 = this.search2.bind(this);
  }

  handleChange1(event) {
    this.setState({value1: event.target.value});
  }

  handleChange2(event) {
    this.setState({value2: event.target.value});
  }

  search1(e) {
    const {value1} = this.state;
    if (e.keyCode === 13) {
      this.props.actions.searchUser1(value1);
    }
  }

  search2(e) {
    const {value2} = this.state;
    if (e.keyCode === 13) {
      this.props.actions.search(value2);
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
              type="text"
              placeholder="Enter Github Username"
              value={this.state.value1}
              onChange={this.handleChange1}
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
              value={this.state.value2}
              onChange={this.handleChange2}
              onKeyDown={this.search2} />
          </div>
        </div>
      </div>
    );
  }
}

ChooseUsersToCompare.propTypes = {
  actions: PropTypes.object.isRequired
};

export default ChooseUsersToCompare;
