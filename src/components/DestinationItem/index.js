import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {id, name, imgUrl} = destinationsList

  return (
    <div className="container">
      <div>
        <img src={imgUrl} className="image" />
        <p className="paragraph">{name}</p>
      </div>
    </div>
  )
}

export default DestinationItem
