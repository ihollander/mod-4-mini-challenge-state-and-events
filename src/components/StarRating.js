import React from 'react'

const StarRating = props => {
  
  const widthPct = `${props.percentage * 100}%`
  return (
    <div className="star-rating">
      <span className="foreground" style={{ width: widthPct }}>★★★★★</span>
      <span className="background">★★★★★</span>
    </div>
  )
}

export default StarRating
