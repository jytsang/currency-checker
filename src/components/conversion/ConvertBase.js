import React from 'react';

class ConvertBase extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="amount">Amount</label>
          <input id="amount" type="text" name="amount" />
        </fieldset>
        <fieldset>
          <label htmlFor="baseCurr">From</label>
          <select id="baseCurr" name="baseCurr">
            {this.props.currencies}
          </select>
        </fieldset>
      </div>
    );
  }
}

export default ConvertBase;