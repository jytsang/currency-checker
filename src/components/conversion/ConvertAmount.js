import React from 'react';

class ConvertAmount extends React.Component {
  render() {
    const { input, meta, type } = this.props;
    const className = `form-group form-group-amount`;
    
    return (
      <fieldset className={className}>
        <label className="form-group-label" htmlFor={input.name}>Amount</label>
        <input id={input.name} {...input} type={type} />
        <span>{meta.touched && meta.error}</span>
      </fieldset>
    );
  }
}

export default ConvertAmount;