import React from 'react'
import Reviews from './Reviews';
import User from './User';
import ClassesTaken from './ClassesTaken';
export const ProfileBar = () => {
  return (
    <div className='ProfileBar'>
       <User/>
       <Reviews/>
       <ClassesTaken/>
    </div>
  )
}

    export default ProfileBar;