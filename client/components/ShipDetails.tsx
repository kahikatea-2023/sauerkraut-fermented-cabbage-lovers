import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getShipById } from '../apiClient'
import { Ship } from '../models/ship'
import Button from './Button'

const initShip = [
  {
    id: 1,
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
function ShipDetails() {
  const { id } = useParams()
  const [ship, setShip] = useState<Ship>(initShip as any) //hacky fix please research

  function handleClick() {
    buyShip(ship)
  }

  function buyShip(ship: Ship) {
    alert(`Congratulation on your purchase of the ${ship.name}`)
    setShip({ ...ship, sold: true })
  }

  useEffect(() => {
    getShipById(Number(id))
      .then((foundShip) => {
        setShip(foundShip)
      })
      .catch((err) => {
        console.error(err.message)
      })
  }, [])

  return (
    <>
      <div className="single-ship">
        <div className="single-ship-img">
          <img src={`../${ship.imgSrc}`} alt="imglol" />
          <div className="ship-info">
            <ul>
              <li>Name: {ship.name}</li>
              <li>Price: {ship.cost_in_credits}</li>
            </ul>
          </div>
        </div>
        <div className="single-ship-details">
          
          <p>Model: {ship.model}</p>
          <p>Manufacturer: {ship.manufacturer}</p>
          <p>Price: $ {ship.cost_in_credits}</p>
          <p>Length: {ship.length}m</p>
          <p>Max Speed: {ship.max_atmosphering_speed}</p>
          <p>Crew Capacity: {ship.crew}</p>
          <p>Passenger Capacity: {ship.passengers}</p>
          <p>
            Available: {ship.sold ? 'Not Available' : 'Available for purchase'}
          </p>
            <Button handleClick={handleClick} ship={ship} />
        </div>
      </div>
    </>
  )
}

export default ShipDetails
