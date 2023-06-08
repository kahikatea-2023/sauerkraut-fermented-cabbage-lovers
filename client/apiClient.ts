import request from 'superagent'
import { Ship } from './models/ship'

const serverUrl = 'https://swapi.dev/api/'

export async function getSpaceShips() {
  const res = await request.get(`${serverUrl}/starships`)
  return res.body as Ship []
}
