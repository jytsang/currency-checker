import React from 'react';

class ConvertCurrencies extends React.Component {
  render() {
    const { input, currencies, label } = this.props;
    const className = `form-group form-group-currency`;
    
    return (
      <fieldset className={className}>
        <label className="form-group-label" htmlFor={input.name}>{label}</label>
        <select className="form-group-select" id={input.name} {...input}>
          <option value="">Select a currency</option>
          {currencies}
        </select>
      </fieldset>
    );
  }
}

export default ConvertCurrencies;