import React from 'react'

function Message({ owner, message, isCall}) {
  return (
      <div className={`message ${owner == "owner" ? 'owner' : 'other'}`}>
        {owner == "owner" 
        ? 
        <div></div>:  
        <img src="https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg" alt="" className='inTextPic'></img>} 
          {isCall == "true"
          ? 
          <div className="messageBody"><a href="http://localhost:3002/1" target="_blank" rel="noopener noreferrer">Join Call</a></div>:
          <div className="messageBody">{message}</div>}
      </div>

  )
}

export default Message