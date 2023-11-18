import React,{useState} from 'react'
import logo from "../Assets/pizzaLogo.png"
import ReorderIcon from '@mui/icons-material/Reorder';
import {Link}from "react-router-dom"
import "../Styles/Navbar.css"
import { Button } from '@mui/material';

function Navbar() {

    const [openLinks,setOpenLinks] = useState(false);

    function toggleNavbar() {
        setOpenLinks(!openLinks);
    }

    return (
        <div className='navbar'>
            <div className='leftSide' id={openLinks ? "open" : "close"}>
                <img classname='logo' src={logo} />
                <div className='hiddenLinks'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                </div>
            </div>
            <div className='rightSide'>'
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About Us</Link>
                <Link to="/contact">Contact Us</Link>
                <Button onClick={toggleNavbar}>
                    <ReorderIcon />
                </Button>

            </div>
        </div>
    )
}

export default Navbar