import React, {PropTypes} from 'react';
import _ from 'lodash';

import ContributionLine from './ContributionLine';

class Contributions extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { contributions1, contributions2 } = this.props;
    const allContributions = _.concat(contributions1, contributions2);
    const uniqueContributions = _.uniqBy(allContributions, (c) => c.id);

    const contributionLine = _.map(uniqueContributions, (c) => {
      const c1 = _.find(contributions1, (c1) => c1.id === c.id) || {}; // // returns undefinted if can't find
      const c2 = _.find(contributions2, (c2) => c2.id === c.id) || {};

      return _.assign({}, _.omit(c, ["additions", "subtractions"]), {c1, c2});
    });

    //const maxVal = 0; // Compute this by looking @ contributions

    // Update person A + B w/ c1, c2 when there is real data
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Contributions</h1>
        {contributionLine.map((line, key) => {
          return (
            <ContributionLine
              key={key}
              title={line.name}
              personA={{additions: line.c1.additions || 0, subtractions: line.c1.subtractions || 0}}
              personB={{additions: line.c2.additions || 0, subtractions: line.c2.subtractions || 0}}
              maxVal={15000} />
          );
        })}
      </div>
    );
  }
}

Contributions.propTypes = {
  contributions1: PropTypes.array,
  contributions2: PropTypes.array
};

export default Contributions;
