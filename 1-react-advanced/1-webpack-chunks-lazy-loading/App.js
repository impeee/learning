import React from 'react';
import ReactDOM from 'react-dom';

import LineChartAsync from './LineChartAsync';
import BarChart from './BarChart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCharts: false,
    };
  }

  handleChange() {
    this.setState({
      showCharts: !this.state.showCharts
    });
  }

  render() {
    return (
      <div>
        Show charts:
        <input
          type="checkbox"
          value={ this.state.showCharts }
          onChange={ this.handleChange.bind(this) }
        />

        {
          this.state.showCharts ?
            <div><LineChartAsync /><BarChart /></div>
            : null
        }
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
