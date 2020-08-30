import React from 'react'
import StarRating from './StarRating'

class SpiceItem extends React.Component {

  state = {
    likes: false
  }

  handleLikeClick = () => {
    this.setState(prevState => {
      return {
        likes: !prevState.likes
      }
    })
  }

  render() {
    const { image, title, description, notes, rating } = this.props.spice
    return (
      <div className="spice-item card">
        <img src={image} alt={title} />
        <div className="details">
          <button className="favorite">
            <span onClick={this.handleLikeClick} role="img" aria-label="heart">
              {/* TODO: find a way to toggle this value when the button is clicked!  */}
              {this.state.likes ? "🤍" : "♡"}
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