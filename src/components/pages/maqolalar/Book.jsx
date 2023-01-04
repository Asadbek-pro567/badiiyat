import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Users } from '../../data/Users'
import { Context } from '../context/Context'
import Header from '../home/header/Header'
import Header1 from '../../header/Header'
import './Book.scss'

function Book() {
    const arrData = [
        {
            id: 0,
            name: 'All',
            from: 1,
            to: 2024
        },
        {
            id: 1,
            name: 'Temuriylar davri',
            from: 2019,
            to: 2023
        },
        {
            id: 2,
            name: 'Jadid adabiyoti',
            from: 2016,
            to: 2019
        },
        {
            id: 3,
            name: 'Sovet davri',
            from: 2013,
            to: 2016
        },
        {
            id: 4,
            name: 'Mustaqillik davri',
            from: 2010,
            to: 2013
        }]

    const { order1, setOrder1 } = useContext(Context)
    const { son, setSon } = useContext(Context)
    const {cislaaa, setCislaaa} = useContext(Context)
    const [categoryy, setCategoryy] = useState(arrData[0].name)
    console.log(order1);

    return (
        <div className='container'>
            <Header1/>
            <Header />
            <div className="book">
                <h2>Asosiy kategoriyalar</h2>
                <ul className='book__ul'>
                    {
                        arrData.map((e, i) => (
                            <li key={i} className={categoryy === e.name ? 'active' : categoryy.name === e.name ? 'active' : ''} onClick={(item) => (
                                setCategoryy(e),
                                setSon(''),
                                console.log(item.target)
                            )}>
                                {e.name}
                            </li>
                        ))
                    }
                </ul>
                <ul className='book__list'>
                    {
                        son > 0 ? order1.map((e, i) => (
                            <Link to='/book-view'>
                                <li onClick={()=>setCislaaa(e)} key={i}>
                                    <img src={e.bookImg} alt="" />
                                    <h4>{e.bookName}</h4>
                                    <h6>{e.nashriyot}</h6>
                                    <span>
                                        <b><i class="bi bi-star-fill"></i>{e.bookRating}-{e.bookPage} bet</b>
                                    </span>
                                </li>
                            </Link>
                        )) :
                            categoryy ?
                                categoryy == 'All' ? Users?.map((item) => (
                                    item.bookObj.map((e, i) => (
                                        <Link to='/book-view'>
                                        <li onClick={()=>setCislaaa(e)} key={i}>
                                            <img src={e.bookImg} alt="" />
                                            <h4>{e.bookName}</h4>
                                            <h6>{e.nashriyot}</h6>
                                            <span>
                                                <b><i class="bi bi-star-fill"></i>{e.bookRating}-{e.bookPage} bet</b>
                                            </span>
                                        </li>
                                        </Link>
                                    ))
                                )) : Users?.map((q) => (
                                    q.bookObj.filter((e) => categoryy.from < e.published && categoryy.to > e.published).map((item, i) => (
                                        <Link to='/book-view'>
                                        <li onClick={()=>setCislaaa(item)} key={i}>
                                            <img src={item.bookImg} alt="" />
                                            <h4>{item.bookName}</h4>
                                            <h6>{item.nashriyot}</h6>
                                            <span>
                                                <b><i class="bi bi-star-fill"></i>{item.bookRating}-{item.bookPage} bet</b>
                                            </span>
                                        </li>
                                        </Link>
                                    ))
                                )) : console.log('ok')
                    }
                </ul>
            </div>
        </div>
    )
}

export default Book