import React, { Component } from 'react';

export default class LineChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: null,
    };
  }

  componentDidMount() {
    require.ensure([], (require) => {
      this.setState({
        component: require('./LineChart').default,
      });
    });
  }

  render() {
    if (this.state.component) {
      return <this.state.component />;
    }

    return (
      <div>
        Loading..
      </div>
    );
  }
}
