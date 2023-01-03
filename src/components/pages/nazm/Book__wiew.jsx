import React, { useContext, useState } from 'react'
import { Users } from '../../data/Users';
import { Context } from '../context/Context'
import './Book__view.scss'
import kitob from '../../image/kitob.png'
import audio from '../../image/audio.png'
import { Link } from 'react-router-dom';
import Header from '../../header/Header';

function Book__wiew() {
    const { cislaaa, setCislaaa } = useContext(Context)
    const [count, setCount] = useState(0)
    console.log(cislaaa.bookImg);

    return (
        <div className='container'>
            <Header/>
            <div className="book__view">
                <img src={cislaaa.bookImg} alt="" />
                <div>
                    <h2>{cislaaa.bookName}</h2>
                    <span className='span'>
                        <b>{cislaaa.nashriyot} <i class="bi bi-star-fill"></i> {cislaaa.bookRating}</b>
                    </span>
                    <h5>Sahifalar soni: <strong>{cislaaa.bookPage}</strong></h5>
                    <h5>Chop etilgan: <strong>{cislaaa.published}</strong></h5>
                    <h5>Janri: <strong>{cislaaa.bookGenre}</strong></h5>
                    <h5>Nashriyot: <strong>{cislaaa.nashriyot}</strong></h5>
                    <div className='flex'>
                        <h6 className='flex__h6'>To’liq ma’lumot</h6>
                        <hr />
                    </div>
                    <p>{cislaaa.bookInfo}</p>
                    <p>{cislaaa.bookInfoTwo}</p>
                    <h6>Mavjud formatlar</h6>
                    <div className='dispa'>
                        <div className='kitov'>
                            <img src={kitob} alt="" />
                            <h6>Qogoz kitob</h6>
                            <p>{cislaaa.bookPrice}</p>
                        </div>
                        <div className="kitov">
                            <img src={audio} alt="" />
                            <h6>Audio kitob</h6>
                            <p>{cislaaa.audioTime}</p>
                        </div>
                        <div className='kitov'>
                            <img src={kitob} alt="" />
                            <h6>Elektron variant</h6>
                            <p>{cislaaa.electron}</p>
                        </div>
                        <button>Javonga qoshish</button>
                    </div>
                </div>
            </div>

            <div className="book__text">
                <div className="text__display">
                    <h5 className={count == '1' ? 'act' : ''} onClick={(e) => setCount(e.target.id)} id='1'>Muallif haqida</h5>
                    <h5 className={count == '2' ? 'act' : ''} onClick={(e) => setCount(e.target.id)} id='2'>Kitobdan iqtiboslar</h5>
                    <h5 className={count == '3' ? 'act' : ''} onClick={(e) => setCount(e.target.id)} id='3'>Kitobxonlar taqrizi</h5>
                </div>
                <div className='text__txt'>
                    <div>
                        <p>{cislaaa.bookInfo}</p>
                    </div>
                    <div className='info__two'>
                        <p>{cislaaa.bookInfoTwo}</p>
                    </div>
                </div>
            </div>

            <div className='book__footer book'>
                <div>
                    <h4>Sizga yoqishi mumkin</h4>
                    <Link to='/books'>
                        <h4>Barchasini ko’rish</h4>
                    </Link>
                </div>
                <ul className='book__list'>
                    {   
                        Users?.map((e) => (
                            cislaaa.bookId == e.id?
                            e.bookObj.map((item, i) => (
                                <Link to='/books'>
                                    <li key={i} onClick={()=>setCislaaa(e)}>
                                        <img src={item.bookImg} alt="" />
                                        <h4>{item.bookName}</h4>
                                        <h6>{item.nashriyot}</h6>
                                        <span>
                                            <b><i class="bi bi-star-fill"></i>{item.bookRating}-{item.bookPage} bet</b>
                                        </span>
                                    </li>
                                </Link>
                            )):console.log('error')
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Book__wiew