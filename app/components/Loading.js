import React from 'react';

export default class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.originalText = this.props.text;
    this.state = {
      text: this.originalText
    }
  }

  componentDidMount() {
    const stopper = `${this.originalText}...`;
    const loader = function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: `${this.state.text}.`
        })
      }
    }
    this.interval = setInterval(loader.bind(this), this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1 className='text-center'>{this.state.text}</h1>
      </div>
    )
  }
}

Loading.propTypes = {
  text: React.PropTypes.string,
  speed: React.PropTypes.number
}

Loading.defaultProps = {
  text: 'Loading',
  speed: 300
}
