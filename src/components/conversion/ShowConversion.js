import React from 'react';
import { connect } from 'react-redux';

import { fetchConversion } from '../../actions';

class ShowConversion extends React.Component {
  render() {
    // if(this.props.conversion === null){
    //   return (null);
    // }

    return (
      <div className="result container">
        <div className="result-amount">
          <span className="result-amount-base">100.00 USD</span> <span className="result-amount-sign">=</span> <span className="result-amount-target">1000.00 JPY</span>
        </div>
        <div className="result-single">
          <span className="result-amount-base">1 USD</span> <span className="result-amount-sign">=</span> <span className="result-amount-target">100 JPY{/* {this.props.conversion.val} */}</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      conversion: state.conversion
  };
};

export default connect(mapStateToProps, { fetchConversion })(ShowConversion);