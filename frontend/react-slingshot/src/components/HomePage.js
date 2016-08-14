import React, {PropTypes} from 'react';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {

    return (
      <div>
      </div>
    );
  }
}

HomePage.propTypes = {
  saveFuelSavings: PropTypes.func,
  calculateFuelSavings: PropTypes.func,
  fuelSavings: PropTypes.object
};

export default HomePage;
