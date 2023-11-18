import React from 'react'
import {menuList} from "../Helpers/menuList"
import MenuItem from '../Components/MenuItem'
import "../Styles/Menu.css"

function Menu() {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>Our Menu</h1>
        <div className='menuList'>
            {menuList.map((Item, key) => <MenuItem key={key} name={Item.name} image={Item.image} price={Item.price} />)}
        </div>
    </div>
  )
}

export default Menu