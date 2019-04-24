import React from 'react';

class ConvertTarget extends React.Component {
  render() {
    return (
      <div>
        <fieldset>
          <label htmlFor="targetCurr">To</label>
          <select id="targetCurr" name="targetCurr">
            {this.props.currencies}
          </select>
        </fieldset>
      </div>
    );
  }
}

export default ConvertTarget;