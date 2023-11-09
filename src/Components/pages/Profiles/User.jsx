import React from 'react'

export const User = () => {
  return (
    <div className='UserInfo'>
        <img src='https://i.pinimg.com/736x/a8/45/1f/a8451fc4aa4b4e3c39298fdfe2c3fd4d.jpg'
             alt=''
             className='Profile-img'/>
        <div className='user'> 
             <span className='username'>
                UserName 
             </span>
             <span className='UserClass'>
                Class of 
             </span>    
        </div>
    </div>
  )
}

export default User;
