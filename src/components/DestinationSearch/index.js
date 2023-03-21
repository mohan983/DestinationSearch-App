import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
    const {destinationsList} = this.state
  state = {
    searchInput: '',
    destinationDetailsList: destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {searchInput, destinationDetailsList} = this.state
    const searchResults = destinationDetailsList.filter(eachUser =>
      eachUser.name.toLowerCase().includes(searchInput),
    )
    return (
      <div className="M-container">
        <h1 className="heading">Destination Search</h1>
        <div className="searchBar">
          <input
            type="search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
            className="input"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="img"
          />
        </div>
        <ul className="list-container">
          {searchResults.map(eachUser => (
            <DestinationItem destinationDetails={eachUser} key={eachUser.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
