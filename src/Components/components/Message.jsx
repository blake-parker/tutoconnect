import React from 'react'

function Message({ owner, message, isCall}) {
  return (
      <div className={`message ${owner == "owner" ? 'owner' : 'other'}`}>
        {owner == "owner" 
        ? 
        <div></div>:  
        <img src="https://cdn.discordapp.com/attachments/1149014555490529312/1178510180254756975/IMG_3490.jpg?ex=65766822&is=6563f322&hm=555ea6a48721a3ebc96008f7ecf669cd09422ac902210a819263546da5ea7f4f&" alt="" className='inTextPic'></img>} 
          {isCall == "true"
          ? 
          <div className="messageBody call"><a href="http://localhost:3002/1" target="_blank" rel="noopener noreferrer">Join Call</a></div>:
          <div className="messageBody">{message}</div>}
      </div>

  )
}

export default Message