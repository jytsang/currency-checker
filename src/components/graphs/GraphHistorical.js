import React from 'react';
import { connect } from 'react-redux';
import Chart from 'react-apexcharts';

import convertGraphData from '../../utils/convertGraphData';
import currencies from '../../data/currencies.json';

class ShowGraphHistorical extends React.Component {
  render() {
    // Only render component if historical data exists
    if(this.props.historical === null){
      return (null);
    }

    // set options for chart
    const options = {
      chart: {
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: `Historical data for ${currencies[this.props.historical.fr].currencyName} to ${currencies[this.props.historical.to].currencyName}`,
        align: 'left'
      },
      subtitle: {
        text: 'Data for the past 7 days',
        align: 'left'
      },
      yaxis: {
        decimalsInFloat: 4,
        tickAmount: Object.keys(this.props.historical.val).length
      },
      markers: {
        size: 6,
        shape: "circle"
      }
    };
    const series = [{
      name: `${this.props.historical.id}`,
      data: convertGraphData(this.props.historical.val)
    }];
    
    return (
      <div className="graph-wrapper container">
        <Chart options={options} series={series} type="area" height={400} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      historical: state.historical
  };
};

export default connect(mapStateToProps)(ShowGraphHistorical);