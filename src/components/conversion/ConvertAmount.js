import React from 'react';

class ConvertAmount extends React.Component {
  render() {
    const { input, meta, type } = this.props;
    console.log(this.props);
    
    return (
      <fieldset>
        <label htmlFor={input.name}>Amount</label>
        <input id={input.name} {...input} type={type} />
        <span>{meta.touched && meta.error}</span>
      </fieldset>
    );
  }
}

export default ConvertAmount;