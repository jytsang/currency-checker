import React from 'react';

class ConvertBase extends React.Component {
  renderCurrencyOptions(currencies) {
    return currencies.map((currency) => {
      return (
        <option 
          key={currency.id}
          value={currency.id}
        >
        {currency.currencyName}
        {currency.currencySymbol && ` (${currency.currencySymbol})`}
        </option>
      );
    });
  }

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
            {this.renderCurrencyOptions(this.props.currencies)}
          </select>
        </fieldset>
      </div>
    );
  }
}

export default ConvertBase;