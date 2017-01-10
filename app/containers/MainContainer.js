import React from 'react';

export default function MainContainer(props) {
  return (
    <div className="jumbotron col-sm-12 text-center">
      {props.children}
    </div>
  )
}
