import React from 'react'
import SpiceItem from './SpiceItem'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }
  renderSpices() {

    //Filter according to the input from the user
      let filteredSpices=this.props.spices.filter(spice => {
        return spice.notes.toLowerCase().includes(this.state.search.toLowerCase())
      })
    //Check if the four star checkbox is on. If it is filter only the ones that have 4 or more stars
      if(this.state.fourStarOnly){
        filteredSpices = filteredSpices.filter(spice => spice.rating >= 4)
      }
        
    return filteredSpices.map(spice => (
      <SpiceItem key={spice.id} spice={spice} />
    ))
  }
  //set the state of the new input
  handleSearch = (evt) => {
    const newSearch = evt.target.value;
    this.setState({search:newSearch})
  }
  //set the state of the fourStarOnly according to the checkbox state
  handleFourStar = () => this.setState({fourStarOnly: !this.state.fourStarOnly})
  

  render() {
    return (
      <section className="spice-list">
        <div className="card">
          <h2>Filter Spices</h2>
          <div className="filters">
            <div>
              <label>Search: </label>
              <input onChange={this.handleSearch} type="text" placeholder="Search By Tasting Notes..." />
            </div>
            <label>
              4 Star Only <input onChange={this.handleFourStar} type="checkbox" />
            </label>
          </div>
        </div>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList