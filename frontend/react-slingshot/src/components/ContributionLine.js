import React, {PropTypes} from 'react';
import {scaleLinear} from 'd3-scale';

class ContributionLine extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  formatNumber(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {
    const { title, personA, personB, maxVal } = this.props;
    const svgWidth = window.innerWidth/4;

    const x = scaleLinear()
      .domain([0, maxVal])
      .range([0, svgWidth]);

    return (
      <div style={{display: "flex", justifyContent: "center"}}>
        <div style={{width: svgWidth+150}}>
          <div style={{float:"left"}}>
            <span style={{color: "#6CC644"}}>{this.formatNumber(personA.additions)}++</span>
            <span style={{color: "#CCCCCC"}}> / </span>
            <span style={{color: "#BD2C00"}}>{this.formatNumber(personA.subtractions)}--</span>
          </div>
          <svg style={{width: svgWidth, height: 10, float: "right"}} >
            <rect x={svgWidth - x(personA.additions)} y={0} height={5} width={x(personA.additions)} fill={"#6CC644"} />
            <rect x={svgWidth - x(personA.subtractions)} y={5} height={5} width={x(personA.subtractions)} fill={"#BD2C00"} />
          </svg>
        </div>

        {/* Can set below to margin 0 auto */}
        <h3 style={{paddingLeft: "25px", paddingRight: "25px"}}>{title}</h3>

        <div style={{width: svgWidth+150}}>
          <svg style={{width: svgWidth, height: 10, float: "left"}} >
            <rect x={0} y={0} height={5} width={x(personB.additions)} fill={"#6CC644"} />
            <rect x={0} y={5} height={5} width={x(personB.subtractions)} fill={"#BD2C00"} />
          </svg>

          <div style={{float:"right"}}>
            <span style={{color: "#6CC644"}}>{this.formatNumber(personB.additions)}++</span>
            <span style={{color: "#CCCCCC"}}> / </span>
            <span style={{color: "#BD2C00"}}>{this.formatNumber(personB.subtractions)}--</span>
          </div>
        </div>
      </div>
    );
  }
}

ContributionLine.propTypes = {
  title: PropTypes.string.isRequired,
  personA: PropTypes.object.isRequired,
  personB: PropTypes.object.isRequired,
  maxVal: PropTypes.number.isRequired
};

export default ContributionLine;
