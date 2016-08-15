import React, {PropTypes} from 'react';
import * as d3 from 'd3';

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

    // Would be fun to have an arc around the avator to show what they are writing in etc.
    const r = 125;
    const border = 5;
    const arc = d3.arc()
      .innerRadius(r)
      .outerRadius(r + border);
    const pie = d3.pie()
      .padAngle(.02);
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const data = [12, 32, 15, 21];


    return (
      <div style={{display: "inline-block", width: "100%", margin: "50px 0"}}>
        <div className="person-left" style={{float:"left", width: "49.75%"}}>
          <div style={{textAlign: "center"}}>
            {<svg style={{width: 2*(r+border), height: 2*(r+border)}}>
              {pie(data).map((slice, i) => <path d={arc(slice)} transform={`translate(${r+border},${r+border})`} key={i} fill={color(i)} />)}
            </svg>}
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
