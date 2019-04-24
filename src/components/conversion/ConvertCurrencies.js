import React from 'react';

class ConvertCurrencies extends React.Component {
  render() {
    const { input, currencies, label } = this.props;
    console.log(this.props);
    return (
      <fieldset>
        <label htmlFor={input.name}>{label}</label>
        <select id={input.name} {...input}>
          <option value="">Select a currency</option>
          {currencies}
        </select>
      </fieldset>
    );
  }
}

export default ConvertCurrencies;