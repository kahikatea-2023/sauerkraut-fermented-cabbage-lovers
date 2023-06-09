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
      <div className="content">
        <div className='ships-list'>
          {spaceships.map((spaceShip) => (
          <>
            <div className='ship'>
              <ul key={spaceShip.name}>
                <a href={spaceShip.imgSrc}>
                  <img src={spaceShip.imgSrc} alt="img"></img>
                </a>
                <div className="ship-info">
                  <li>Spaceship: {spaceShip.name}</li>
                  <li>Price: ${spaceShip.cost_in_credits}</li>
                  <Link to={`/shipdetails/${spaceShip.id}`}>
                    <button>VIEW SHIP</button>
                  </Link>
                </div>
              </ul>
            </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hanger
