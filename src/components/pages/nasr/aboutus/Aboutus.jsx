import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Users } from '../../../data/Users';
import { Context } from '../../context/Context'
import './Aboutus.scss'

function Aboutus() {
  const {number, setNumber} = useContext(Context)
  const {cisla, setCisla} = useContext(Context)
  console.log(number);
  return (
    <div>
        <div className='container'>
          <div className="about">
            <ul className='about__inner'>
              {
                number > 0?
                Users?.filter((e)=> e.id == number).map((item, i)=> (
                  <li>
                    <div>
                      <img src={item.img} alt="123" />
                      <div className='img__born'>
                        <div>
                          <h6>Tavallud sanasi</h6>
                          <h2>{item.bornDate}-{item.bornMonth} {item.born}</h2>
                          <h6>{item.location}</h6>
                        </div>
                        <h2 className='h22'>-</h2>
                        <div>
                          <h6>Tavallud sanasi</h6>
                          <h2>{item.diedDate}-{item.diedMonth} {item.died}</h2>
                          <h6>{item.location}</h6>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h2>{item.name}</h2>
                      <p>{item.desc}</p>
                      <h6><i class="bi bi-bookmark-fill"></i>IJODI</h6>
                      <h5>{item.jobs}</h5>
                      <h4>ASARLARI</h4>
                      <ul className='asar'>
                        {
                          item.bookObj.map((e)=>(
                            <Link to='/books'>
                              <li onClick={()=> setCisla(e)}>
                                <img className='book' src={e.bookImg} alt="" />
                                <h6>{e.bookName}</h6>
                                <span>
                                  <b><i class="bi bi-star-fill"></i>{e.bookRating}-{e.bookPage} bet</b>
                                </span>
                              </li>
                            </Link>
                          ))
                        }
                      </ul>
                    </div>
                  </li>
                )):console.log('ok')
              }
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Aboutus