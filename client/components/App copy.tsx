import { useState, useEffect } from 'react'
import { getGreeting } from '../apiClient'
import { Outlet } from 'react-router-dom'
import '../style.css'

const initialShipArr = [
  {
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
    MGLT: '',
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

const App = () => {
  const [greeting, setGreeting] = useState('')
  const [count, setCount] = useState(0)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getGreeting()
      .then((greeting) => {
        console.log(greeting)
        setGreeting(greeting)
        setIsError(false)
      })
      .catch((err) => {
        console.log(err)
        setIsError(true)
      })
  }, [count])

  return (
    <>
      
      <main>
        <div className="sidebar">
          <h2>Ship by category</h2>
          <ul>
            <li>
              <a href="">Ship Class</a>
            </li>
            <li>
              <a href="">View by Sold</a>
            </li>
            <li>
              <a href="">View by Price</a>
            </li>
            <li>
              <a href="">View by Movie</a>
            </li>
          </ul>
        </div>
        <div className="content">
          <div className="ships-list">
            <div className="ship">
              <img src="https://placehold.co/419x261/png" alt="" />
              <div className="ship-info">
                <ul>
                  <li>Name</li>
                  <li>Price</li>
                </ul>
                <button>View ship</button>
              </div>
            </div>
            <div className="ship">
              <img
                className="sold"
                src="https://placehold.co/419x261/png"
                alt=""
              />
              <div className="ship-info">
                <ul>
                  <li>Name</li>
                  <li>Price</li>
                </ul>
                <button>View ship</button>
              </div>
            </div>
            <div className="ship">
              <img src="https://placehold.co/419x261/png" alt="" />
              <div className="ship-info">
                <ul>
                  <li>Name</li>
                  <li>Price</li>
                </ul>
                <button>View ship</button>
              </div>
            </div>
            <div className="ship">
              <img src="https://placehold.co/419x261/png" alt="" />
              <div className="ship-info">
                <ul>
                  <li>Name</li>
                  <li>Price</li>
                </ul>
                <button>View ship</button>
              </div>
            </div>
          </div>
          <div className="single-ship">
            <div className="single-ship-img">
              <img src="https://placehold.co/419x261/png" alt="" />
              <div className="ship-info">
                <ul>
                  <li>Name</li>
                  <li>Price</li>
                </ul>
                <button>Buy</button>
              </div>
            </div>
            <div className="single-ship-details">
              <h2>Ship name</h2>
              <ul>
                <li>Name</li>
                <li>Price</li>
                <li>Name</li>
                <li>Price</li>
                <li>Name</li>
                <li>Price</li>
                <li>Name</li>
                <li>Price</li>
                <li>Name</li>
                <li>Price</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
