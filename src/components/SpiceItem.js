import React from 'react'
import StarRating from './StarRating'

class SpiceItem extends React.Component {

  state = {
    filledHeart: false
  }

  toggleHeart = evt => {
    const callback = prevState => {
      return {
        filledHeart: !prevState.filledHeart
      }
    }

    this.setState(callback)
  }



  render() {
    const { image, title, description, notes, rating } = this.props.spice
    return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <button className="favorite">
            <span role="img" aria-label="heart" onClick={ this.toggleHeart }>
              {/* TODO: find a way to toggle this value when the button is clicked!  */}
              {this.state.filledHeart ? "🤍" : "♡"}
            </span>
          </button>
          <h2>{title}</h2>
          <p>{description}</p>
          <p>Tasting Notes: <em>{notes}</em></p>
          <div>Rating: <StarRating percentage={rating / 5} /></div>
        </div>
      </div>
    )
  }
}

export default SpiceItem