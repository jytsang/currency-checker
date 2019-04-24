import React from 'react';
import { connect } from 'react-redux';

import { fetchConversion } from '../../actions';

class ShowConversion extends React.Component {
  render() {
    if(this.props.conversion === null){
      return (null);
    }

    return (
      <div className="result container">
        {this.props.conversion.val}
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