import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(<Hello />, app);
