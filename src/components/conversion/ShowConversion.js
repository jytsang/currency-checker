import React from 'react';
import { connect } from 'react-redux';

import { fetchConversion } from '../../actions';

class ShowConversion extends React.Component {
  componentDidMount() {
    this.props.fetchConversion();
  }

  render() {
    if(this.props.conversion === null){
      return (null);
    }

    return (
      <div>{this.props.conversion.GBP_JPY.val}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      conversion: state.conversion
  };
};

export default connect(mapStateToProps, { fetchConversion })(ShowConversion);