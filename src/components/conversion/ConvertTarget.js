import React from 'react';

class ConvertTarget extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="targetCurr">To</label>
          <select id="targetCurr" name="targetCurr">
            {this.props.currencies.map((currency) => {
              return (
                <option value={currency.id} key={currency.id}>{currency.currencyName} ({currency.currencySymbol})</option>
              );
            })}
          </select>
        </fieldset>
      </div>
    );
  }
}

export default ConvertTarget;