import React from 'react'
import {FaStar} from "react-icons/fa"

export const Reviews = () => {
  return (
    <div className='Reviews'>
      <div className='FiveStar'>{[...Array(5)].map(star => {
        return <FaStar size={25}/>;
      })}
      </div>
      <button className='ViewReviews'>View Reviews</button>
    </div>
  )
}

export default Reviews;