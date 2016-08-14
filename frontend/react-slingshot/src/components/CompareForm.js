import React, {PropTypes} from 'react';

class CompareForm extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  renderSummaryStats(meta) {
    const order = ["followers", "following", "public_repos", "public_gists"];
    return (
      <div>
        <table style={{margin: "0 auto"}}>
          <tbody>
            {order.map((item, i) => {
              return (
                <td key={i}>
                  <div>
                    <h3>{meta[item]}</h3>
                    <p>{item}</p>
                  </div>
                </td>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  render() {
    const { meta1, meta2 } = this.props;

    return (
      <div style={{display: "inline-block", width: "100%", marginBottom: "50px"}}>
        <div className="person-left" style={{float:"left", width: "49.75%"}}>
          <div style={{textAlign: "center"}}>
            <img src={meta1.avatar_url} style={{borderRadius:"50%", width: "250px", border: "5px solid #CCCCCC"}} />
            <h1>{meta1.name}</h1>
            <h2 style={{color: "#666"}}>{meta1.login}</h2>
            {this.renderSummaryStats(meta1)}
          </div>
        </div>

        <div style={{float: "left", width: ".5%", height: "450px", background: "gray"}}/>

        <div className="person-right" style={{float:"right", width: "49.75%"}}>
          <div style={{textAlign: "center"}}>
            <img src={meta2.avatar_url} style={{borderRadius:"50%", width: "250px", border: "5px solid #CCCCCC"}} />
            <h1>{meta2.name}</h1>
            <h2 style={{color: "#666"}}>{meta2.login}</h2>
            {this.renderSummaryStats(meta2)}
          </div>
        </div>
      </div>
    );
  }
}

CompareForm.propTypes = {
  meta1: PropTypes.object.isRequired,
  meta2: PropTypes.object.isRequired
};

export default CompareForm;
