import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import ConvertAmount from './ConvertAmount';
import ConvertCurrencies from './ConvertCurrencies';
import currencies from '../../data/currencies.json';
import { fetchConversion, fetchHistorical } from '../../actions';

class ConvertForm extends React.Component {
  // Render list of currency options from /data/currencies.json
  renderCurrencyOptions(currencies) {
    return currencies.map((currency) => {
      return (
        <option 
          key={currency.id}
          value={currency.id}
        >
        {currency.currencyName}
        {` (${currency.id})`}
        {currency.currencySymbol && ` (${currency.currencySymbol})`}
        </option>
      );
    });
  }

  onSubmit = ({ baseCurr, targetCurr, amount }) => {
    this.props.fetchConversion(baseCurr, targetCurr, amount);
    this.props.fetchHistorical(baseCurr, targetCurr);
  }

  render() {
    // Convert json to array and then sort by currencyName value
    const currenciesSorted = Object.values(currencies).sort((a,b)=> {
      return a.currencyName > b.currencyName ? 1 : a.currencyName < b.currencyName ? -1 : 0; 
    });

    return (
      <div className="container">
        <form className="convert-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <div className="clearfix">
            <Field name="amount" type="text" component={ConvertAmount} />
            <Field name="baseCurr" label="From" component={ConvertCurrencies} currencies={this.renderCurrencyOptions(currenciesSorted)} />
            <Field name="targetCurr" label="To" component={ConvertCurrencies} currencies={this.renderCurrencyOptions(currenciesSorted)} />
          </div>
          <div className="submit-container">
            <button className="button-submit" type="submit">Convert</button> 
          </div>
        </form>
      </div>
    );
  }
}

const validate = (values) => {
  const errors ={};
  if (!values.amount) {
    errors.amount = 'Enter an amount';
  } else if (isNaN(Number(values.amount))) {
    errors.amount = 'Enter a valid number';
  }

  if (!values.baseCurr) {
      errors.baseCurr = true;
  }

  if (!values.targetCurr) {
      errors.targetCurr = true;
  }

  return errors;
};

export default connect(null, { fetchConversion, fetchHistorical })(reduxForm({ form: 'convertForm', validate })(ConvertForm));