import React from 'react';
import ReactDOM from 'react-dom';

const USER_DATA = {
  name: 'Anita',
  username: 'acmei',
  image: 'https://avatars2.githubusercontent.com/u/8615571?v=3&s=460'
}

class ProfilePic extends React.Component {
  render() {
    return (
      <img src={this.props.imageUrl} style={{height: 100, width: 100}}/>
    )
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
}

const app = document.getElementById('app');
ReactDOM.render(
  <Avatar user={USER_DATA} />,
  app
);
