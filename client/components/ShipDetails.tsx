import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getShipById } from '../apiClient'
import { Ship } from '../models/ship'

const initShip = [
  {
    id: 1,
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
function ShipDetails() {
  const { id } = useParams()
  const [ship, setShip] = useState<Ship>(initShip as any) //hacky fix please research

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
      <div>
        <h2>{ship.name}</h2>
        <img src={`../${ship.imgSrc}`} alt="imglol" />
        <p>{ship.model}</p>
    <p>{ship.manufacturer}</p>
    <p>{ship.cost_in_credits}</p>
    <p>{ship.length}</p>
    <p>{ship.max_atmosphering_speed}</p>
    <p>{ship.crew}</p>
    <p>{ship.passengers}</p>
      </div>
      <p>hello</p>
    </>
  )
}

export default ShipDetails
