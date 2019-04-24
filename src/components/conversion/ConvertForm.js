import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import ConvertBase from './ConvertBase';
import ConvertTarget from './ConvertTarget';
import currencies from '../../data/currencies.json';

class ConvertForm extends React.Component {
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
    // Convert json to array and then sort by currencyName value
    const currenciesSorted = Object.values(currencies).sort((a,b)=> {
      return a.currencyName > b.currencyName ? 1 : a.currencyName < b.currencyName ? -1 : 0; 
    });

    return (
      <form>
        Convert Form
        <ConvertBase currencies={this.renderCurrencyOptions(currenciesSorted)} />
        <ConvertTarget currencies={this.renderCurrencyOptions(currenciesSorted)} />
        <input type="submit" value="Convert" />
      </form>
    );
  }
}

export default ConvertForm;