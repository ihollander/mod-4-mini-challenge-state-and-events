import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  renderSpices() {
    let filteredSpice = this.props.spices.filter(spice => {
      return spice.notes.toLowerCase().includes(this.state.search.toLowerCase())
    })

    if (this.state.fourStarOnly){
      filteredSpice = filteredSpice.filter(spice => spice.rating >= 4)
    }

    return filteredSpice.map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }

  handleSearch = (e) => {
    this.setState({
        search: e.target.value 
    })
  }

  handleRating = () => {
    this.setState(prevState => {
      return {
        fourStarOnly: !prevState.fourStarOnly
      }
    })
  }

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input onChange={this.handleSearch} value={this.state.search} type="text" placeholder="Search By Tasting Notes..." />
            </div>
            <label>
              4 Star Only <input type="checkbox" onChange={this.handleRating}/>
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList