import React from 'react';
import { connect } from 'react-redux';

import { fetchConversion } from '../../actions';

class ShowConversion extends React.Component {
  render() {
    // Only render component if conversion data exists
    if(this.props.conversion === null){
      return (null);
    }

    const { amount, fr, to, total, val } = this.props.conversion;

    return (
      <div className="result container">
        <div className="result-amount">
          <span className="result-amount-base">{amount} {fr}</span> <span className="result-amount-sign">=</span> <span className="result-amount-target">{total} {to}</span>
        </div>
        <div className="result-single">
          <span className="result-amount-base">1 {fr}</span> <span className="result-amount-sign">=</span> <span className="result-amount-target">{val} {to}</span>
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