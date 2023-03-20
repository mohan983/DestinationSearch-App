import {Component} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'

class DestinationSearch extends Component {
    const {destinationsList} = this.props

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
      eachUser.name.includes(searchInput),
    )
    return (
      <div className="M-container">
        <h1 className="heading">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        {searchResults.map(eachUser => (
          <DestinationItem destinationDetails={eachUser} key={eachUser.id} />
        ))}
      </div>
    )
  }
}

export default DestinationSearch
