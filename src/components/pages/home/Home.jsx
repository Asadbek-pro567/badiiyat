import React from 'react'
import Header from '../../pages/home/header/Header'
import Main from '../../pages/home/main/Main'
import './main/Main.scss'
import Header1 from '../../header/Header'

function Home() {
  
  return (
    <div className=''>
        <Header1/>
        <Header/>
        <Main/>
    </div>
  )
}

export default Home