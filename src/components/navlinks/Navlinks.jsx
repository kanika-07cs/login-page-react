import React from 'react'
import logo from "../../assets/flipkart.png"
import '../../styles/navlinks.css'
import { useNavigate, useNavigation} from 'react-router-dom'

export default function Navlinks() {

    const navigate=useNavigate();

  return (
    <div className='navbar-container'>
    <img src={logo} alt="Logo" width={"170px"} height={"150px"}></img>
    <div className='navlinks'>
        <ul>
            <li onClick={()=>navigate('/')}>HOME</li>
            <li onClick={()=>navigate('/Login')}>LOGIN</li>
        </ul>
            
    </div>
    </div>
  )
}