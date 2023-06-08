import { useParams } from 'react-router-dom'
import { getSpaceShips } from '../apiClient'

const ship = [
  {
    name: 'Space Ship',
    model: 'HardCoded data',
    manufacturer: 'f',
    cost_in_credits: '77777',
    length: '230m',
    max_atmosphering_speed: '78',
    crew: '500',
    passengers: '1',
    cargo_capacity: '1',
    consumables: '1',
    hyperdrive_rating: '231',
    starship_class: 'F',
    pilots: [],
    films: [],
    created: '08.06.2023',
    edited: '',
    url: '',
    sold: false,
    imgSrc:
      'https://www.denofgeek.com/wp-content/uploads/2019/12/x-wing.jpg?w=1024',
  },
]
function Ships() {
  const { shipId } = useParams()
  if (shipId === undefined) {
    return <p>not able to load the Spaceship page.</p>
  }

  // const selectedShip = getShipById()

  return (
    <div>
      <h2>{ship.name}</h2>
      <p>{selectedShip.model}</p>
      <p>{selectedShip.manufacturer}</p>
      <p>{selectedShip.cost_in_credits}</p>
      <p>{selectedShip.length}</p>
      <p>{selectedShip.max_atmosphering_speed}</p>
      <p>{selectedShip.crew}</p>
      <p>{selectedShip.passengers}</p>
    </div>
  )
}

export default Ships
