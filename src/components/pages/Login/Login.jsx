import React, { useContext } from 'react'
import './Login.scss'
import Login__logo from '../../image/Frame.svg'
import { useNavigate } from 'react-router-dom'
import { Context } from '../context/Context'

const data = [
    {
        id:1,
        user: 'ali',
        pass: 111
    },
    {
        id:2,
        user: 'salim',
        pass: 222
    },
    {
        id:3,
        user: 'vali',
        pass: 333
    },
    {
        id:4,
        user: 'Asadbek',
        pass: 444
    },
    {
        id:5,
        user: 'Rozivoy',
        pass: 555
    }
]
function Login() {
    const navigate = useNavigate()
    const {nik, setNik} = useContext(Context)
    const sign = (e)=>{
        e.preventDefault()
        let user = e.target.elements.username.value
        let pass = e.target.elements.password.value
        for(let i = 0; i < data.length; i++ ){
            if(data[i].user === user && data[i].pass == pass){
                window.sessionStorage.setItem('key', '123')
                setNik(user)
                break
            }else{
                window.sessionStorage.setItem('key', 'error')
            }
        }
        if(window.sessionStorage.getItem('key') == '123'){
            navigate('/home')
        }
        
    }
  return (
    <div className='containerr'>
        <div className='login'>
            <div className='login__left'>
                <img src={Login__logo} alt="" />
            </div>
            <div className='login__right'>
                <h2>Sign In</h2>
                <p>Do not you have an account? <strong>Sig up</strong></p>
                <form className='div' action='#' onSubmit={sign}>
                    <input type="text" name='username' placeholder='Email'/>
                    <input type="password" name='password' placeholder='Password'/>
                    <button type='submit'>Next step</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login