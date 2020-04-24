import React from 'react';
import '../assets/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}

export default App;
