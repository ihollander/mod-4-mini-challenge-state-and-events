import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: "",
  }

  renderSpices() {
    // Set the initial array of spices to filter to be all spices passed down via props
    let spicesToFilter = this.props.spices;

    // Filter out for all four-star spices, store them in fourStarSpices array
    const fourStarSpices = this.props.spices.filter(spice => {
      return spice.rating >= 4
    })

    // If the state fourStarOnly is true (meaning that 4 Star Only Checkbox is checked), then we want to filter only fourStarSpices, so we set spicesToFilter to be fourStarSpices
    if (this.state.fourStarOnly) {
      spicesToFilter = fourStarSpices
    }

    // We filter out the spicesToFilter array to match the search term that the user entered, taking into account casing; we store these in a variable called filteredSpices
    const filteredSpices = spicesToFilter.filter(spice => {
      if (this.state.search.length === 0) {
        return true
      } else {
        return spice.notes.toLowerCase().includes(this.state.search.toLowerCase())
      }
    })

    // We map through filteredSpices to create a SpiceItem component out of each spice object. And Ta-Da!
    return filteredSpices.map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }


  // Handles changing of the state based on the search term that the user entered on key up
  handleSearch = evt => {
    // Get the search term
    const newSearchTerm = evt.target.value;

    // Callback that returns new changed state, using newSearchTerm
    const callback = prevState => {
      return {
        search: newSearchTerm
      }
    }

    // Change the state
    this.setState(callback)
  }


  // Handles changing fourStartOnly state, on the checkbox change, check to see if whether or not the checkbox is checked, if it is, then change the fourStarOnly state to true; if it is not checked, change the fourStarOnly state to false
  handleFourStar = evt => {
    if (evt.target.checked) {
      this.setState({
        fourStarOnly: true
      })
    } else {
      this.setState({
        fourStarOnly: false
      })
    }
  }

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input type="text" placeholder="Search By Tasting Notes..." onKeyUp={ this.handleSearch } />
            </div>
            <label>
              4 Star Only <input type="checkbox" onChange={ this.handleFourStar }/>
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList