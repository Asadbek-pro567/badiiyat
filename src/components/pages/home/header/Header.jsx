import React, { useContext, useState } from 'react'
import './Header.scss'
import Home__img from '../../../image/home__img.svg'
import Hommer from '../../../image/header__rasm.png'
import { Users } from '../../../data/Users';
import { Context } from '../../context/Context';

function Home() {
  const [slides, showSlides] = useState(0)


  const data2 = []
  const data3 = []
  const { order, setOrder } = useContext(Context)
  const { order1, setOrder1 } = useContext(Context)
  const { son, setSon } = useContext(Context)
  const { son1, setSon1 } = useContext(Context)
  const [searchData, setSearchData] = useState()

  const searchItem = (evn) => {
    let user = evn.target.elements.inp.value
    console.log(user);
    Users.map((item) => {
      if (item.name.toLowerCase().includes(evn.target.elements.inp.value.toLowerCase())) {
        data2.push(item);
      }
      item.bookObj.map((e) => {
        if (e.bookName.toLowerCase().includes(evn.target.elements.inp.value.toLowerCase())) {
          data3.push(e)
        }
      })
    });
    setSearchData(data2);
    setOrder1(data3)
    setSon1(data3.length)
    setOrder(data2)
    setSon(data2.length);
  };


  return (
    <div className='container'>
      <div className="home">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators indi">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Hommer} className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src='https://swiperjs.com/demos/images/nature-3.jpg' className="d-block w-100 img" alt="..." />
            </div>
            <div className="carousel-item">
              <img src='https://swiperjs.com/demos/images/nature-4.jpg' className="d-block w-100 img" alt="..." />
            </div>
          </div>
        </div>

        <div className="home__search">
          <div className="search__inner">
            <h1>QIDIRISH</h1>
            <div>
              <form action="#" onSubmit={(e) => (e.preventDefault(), searchItem(e))}>
                <input type="text" name='inp' placeholder='Adiblar, kitoblar, audiolar, maqolalar...' />
                <button type='submit'>Izlash</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home