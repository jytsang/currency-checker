import React from 'react';

class ConvertAmount extends React.Component {
  render() {
    const { input, meta, type } = this.props;
    const className = `form-group form-group-amount`;
    
    return (
      <fieldset className={className}>
        <label className="form-group-label" htmlFor={input.name}>Amount</label>
        <input className="form-group-input" id={input.name} {...input} type={type} />
        <div className="text-error">{meta.touched && meta.error}</div>
      </fieldset>
    );
  }
}

export default ConvertAmount;