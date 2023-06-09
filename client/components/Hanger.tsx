import { Link } from 'react-router-dom'
import { fetchStarships, getStarships } from '../apiClient'
import { Ship, ShipData } from '../models/ship'
import { useEffect, useState } from 'react'

const initialShipArr = [
  {
    id: 0,
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
  {
    id: 1,
    name: 'Tesla',
    model: 'HardCoded data',
    manufacturer: 'f',
    cost_in_credits: '80000',
    length: '2m',
    max_atmosphering_speed: '130',
    crew: '1',
    passengers: '1',
    cargo_capacity: '100',
    consumables: '1',
    hyperdrive_rating: '231',
    MGLT: '321',
    starship_class: 'F',
    pilots: [],
    films: [],
    created: '08.06.2023',
    edited: '',
    url: '',
    sold: false,
    imgSrc:
      'https://cdn.motor1.com/images/mgl/Mk3qg6/s3/2017-tesla-roadster-deck-model-petersen-automotive-museum.jpg',
  },
]
//This will contain all space ships on the page.
function Hanger() {
  const [spaceships, setSpaceships] = useState(initialShipArr as Ship[])

  console.log(spaceships)

  useEffect(() => {
    getStarships()
      .then((fetchedSpaceshipData) => {
        setSpaceships(fetchedSpaceshipData)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <>
      <div>
        {spaceships.map((spaceShip) => (
          <ul key={spaceShip.name}>
            <li>Spaceship: {spaceShip.name}</li>
            <a href={spaceShip.imgSrc}>
              <img src={spaceShip.imgSrc} alt="img"></img>
            </a>
            <li>Price: ${spaceShip.cost_in_credits}</li>
            <Link to={`/shipdetails/${spaceShip.id}`}>
              <button>VIEW SHIP</button>
            </Link>
          </ul>
        ))}
      </div>
    </>
  )
}

export default Hanger
