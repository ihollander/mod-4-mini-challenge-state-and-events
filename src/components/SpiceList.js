import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }


  // Ian -- can you help me with this below? It seems too involved....
  renderSpices() {
    let filteredSpices = this.props.spices.filter(spice => {
      if (this.state.search === "" && this.state.fourStarOnly === false) {
        return true
      } else if (this.state.search !== "" && this.state.fourStarOnly === false) {
       return spice.notes.toLowerCase().includes(this.state.search.toLowerCase())
      } else if (this.state.search === "" && this.state.fourStarOnly === true) {
        return spice.rating >= 4
      } else {
        return spice.rating >= 4 && spice.notes.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })
    return filteredSpices.map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }

  setSearch = (event) => {
    this.setState({search: event.target.value})
  }

  toggleHighRating = () => {
    this.setState((prevState) => ({ fourStarOnly: !prevState.fourStarOnly }))
  }


  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input 
                onChange={this.setSearch} 
                type="text" 
                value={this.state.search} 
                placeholder="Search By Tasting Notes..." 
              />
            </div>
            <label>
              4 Star Only <input type="checkbox" onClick={this.toggleHighRating} />
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList