import React from 'react';

const padding = {
  paddingBottom: '25px'
}

export default function UserDetailsWrapper(props) {
  return (
    <div className='col-sm-6' style={padding}>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propType = {
  header: React.PropTypes.string.isRequired,
}
