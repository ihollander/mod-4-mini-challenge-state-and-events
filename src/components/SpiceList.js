import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {

  state = {
    fourStarOnly: false,
    search: ""
  }

  handleChange = () => {
    this.setState((prevState) => ({
      fourStarOnly: !prevState.fourStarOnly
    }))
  }

  onChange = (evt) => {
    let searchTerm = evt.target.value.toLowerCase()
    this.setState((prevState) => ({
      search: searchTerm
    }))
  }

  filteredSpices = () => {
    if (this.state.fourStarOnly) {
      return this.props.spices.filter(spice => spice.rating >= 4)
    } else {
      return this.props.spices
    }
  }

  filterBySearch = () => {
    let searchSpice = this.state.search
    if (searchSpice.length === 0) {
      return this.filteredSpices()
    } else {
    return this.filteredSpices().filter(spice => spice.notes.toLowerCase().includes(searchSpice))}
  }

  renderSpices = () => {
    return this.filterBySearch().map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input type="text" name = "search" onChange = {this.onChange} placeholder="Search By Tasting Notes..." />
            </div>
            <label>
              4 Star Only <input type="checkbox" onClick ={this.handleChange}/>
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList
