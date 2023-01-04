import React, { useContext, useState } from 'react'
import './Header.scss'
import Logo from '../image/Badiyat.png'
import Mask from '../image/Mask.png'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../pages/context/Context'

function Header() {
  const [id, setId] = useState()
  const {nik, setNik} = useContext(Context)
  const navigate = useNavigate()
  const logout = (e)=>{
    window.sessionStorage.removeItem('key')
    navigate('/')
  }
  return (
    <div className='container'>
      <div className="header__logo">
        <Link to='/home'> 
          <img src={Logo} alt="" className='logo'/>
        </Link>
          <ul>
            <Link to='/home'>
              <li id='1'>Bosh sahifa</li>
            </Link>
            <Link to='/books'>
              <li id='2'>Books</li>
            </Link>
            <li id='3'>Nazm</li>
            <li id='4'>Maqolalar</li>
            <li id='5'>Forum</li>
          </ul>
          <div>
            <h3>{nik}</h3>
            <img src={Mask} alt="" className='mask'/>
            <h6 onClick={()=>logout()}>
            <i class="bi bi-box-arrow-right"></i>
            </h6>
          </div>
      </div>
    </div>
  )
}

export default Header