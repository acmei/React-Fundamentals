import React from 'react';
import { Link } from 'react-router';
import MainContainer from '../containers/MainContainer';
import UserDetails from '../components/UserDetails';
import UserDetailsWrapper from '../components/UserDetailsWrapper';
import Loading from '../components/Loading';

function StartOver() {
  return (
    <div className='col-sm-12'>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

export default function Results(props) {
  if (props.isLoading === true) {
    return <Loading text='One moment' speed={100} />
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a Tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }

  const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    <MainContainer>
      <h1>Results</h1>
      <div className='col-sm-8 col-sm-offset-2'>
        <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header='Loser'>
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
}

Results.propTypes = {
  isLoading: React.PropTypes.bool.isRequired,
  playersInfo: React.PropTypes.array.isRequired,
  scores: React.PropTypes.array.isRequired
}
