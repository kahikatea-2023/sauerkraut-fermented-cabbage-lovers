import request from 'superagent'
import shipImages from './data/ships'
import { Ship, ShipData } from './models/ship'
import { log } from 'console'

export async function fetchStarships() {
  const data = await request.get('https://swapi.dev/api/starships')
  // console.log(data);

  const starships = data.body.results
  // console.log(starships)

  
  return starships as ShipData[]
}

export async function getStarships() {
  const shipArr = await fetchStarships()
  const updatedArr = shipArr.map(ship => {
    return {...ship, ...shipImages.find(shipImg => shipImg.name === ship.name)}
  })
  
  return updatedArr as Ship[]
}

export async function getShipById(id:number) {
  const shipArr = await getStarships()
  return shipArr[id]
}
