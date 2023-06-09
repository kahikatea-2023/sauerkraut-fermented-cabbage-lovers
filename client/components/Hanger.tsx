import { Link } from 'react-router-dom'
import { fetchStarships, getStarships } from '../apiClient'
import { Ship, ShipData } from '../models/ship'
import { useEffect, useState } from 'react'

const initialShipArr = [
  {
    id: 0,
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    starship_class: '',
    pilots: [],
    films: [],
    created: '',
    edited: '',
    url: '',
    sold: false,
    imgSrc: '',
  },
]
//This will contain all space ships on the page.
function Hanger() {
  const [spaceships, setSpaceships] = useState<Ship[]>(initialShipArr as any)

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
