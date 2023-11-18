import React from 'react'
import { Link } from 'react-router-dom'
import bannerImage from "../Assets/pizza.jpeg"
import "../Styles/Home.css"

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${bannerImage})`}}>
        <div className='headerContainer' >
            <h1>Liza's Pizzeria!</h1>
            <p>PIZZA TO FIT ANY TASTE!</p>
            <Link to="/menu" >
            <button>Order Now!</button>
            </Link>
        </div>
    </div>
  )
}

export default Home