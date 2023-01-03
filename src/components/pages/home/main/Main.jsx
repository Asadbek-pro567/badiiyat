import React, { useContext, useState } from 'react'
import './Main.scss'
import { Users} from '../../../data/Users'
import { Context } from '../../context/Context'
import { Link  } from 'react-router-dom'

function Main() {
  const arrData = [
    {
      id:0,
      name: 'All',
      from: 1,
      to: 2023
    },
    {
      id: 1,
      name: 'Temuriylar davri',
      from: 370,
      to: 1706
    },
    {
      id:2,
      name: 'Jadid adabiyoti',
      from: 1706,
      to: 1830
    },
    {
      id:3,
      name: 'Sovet davri',
      from: 1830,
      to: 1925
    }, 
    {
      id:4,
      name: 'Mustaqillik davri',
      from: 1925,
      to: 2023
    }]
    const { order, setOrder} = useContext(Context)
    const {number, setNumber} = useContext(Context)
    const {son} = useContext(Context)
    const [category, setCategory] = useState(arrData[0].name)

  return (
    <div className='container'>
      <div className="main">
        <div className="main__inner">
          <h2>Asosiy kategoriyalar</h2>
          <ul className='main__categ'>
            {
              arrData.map((e,i)=>(
                <li key={i} className={category === e.name? 'active': category.name === e.name? 'active' : ''} onClick={()=>setCategory(e)}>
                  {e.name}
                </li>
              ))
            }
          </ul>
          <ul className='main__users'>
            {
              son > 0? order.map((item, i)=>(
                <Link to='/about'>
                  <li id={item.id} onClick={()=> setNumber(item.id)} key={i} >
                    <img src={item.img} alt="123" />
                    <h4>{item.name} {item.lastName}</h4>
                    <h6>{item.born}-{item.died}</h6>
                    <div>
                      <p className='books'>{item.books}</p>
                      <p className='audio'>{item.audio}</p>
                    </div>
                  </li>
                </Link>
              )):
              category ?
              category == 'All'? Users.map((item, i)=>(
                <Link to='/about'>
                  <li id={item.id} key={i} onClick={()=> setNumber(item.id)}>
                    <img src={item.img} alt="123" />
                    <h4>{item.name} {item.lastName}</h4>
                    <h6>{item.born}-{item.died}</h6>
                    <div>
                      <p className='books'>{item.books}</p>
                      <p className='audio'>{item.audio}</p>
                    </div>
                  </li>
                </Link>
              )):Users?.filter((e)=>category.from < e.born && category.to > e.born ).map((item, i)=>(
                <Link to='/about'>
                  <li id={item.id} key={i} onClick={()=> setNumber(item.id)}>
                    <img src={item.img} alt="123" />
                    <h4>{item.name} {item.lastName}</h4>
                    <h6>{item.born}-{item.died}</h6>
                    <div>
                      <p className='books'>{item.books}</p>
                      <p className='audio'>{item.audio}</p>
                    </div>
                  </li>
                </Link>
              ))
              :console.log('ok')
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Main