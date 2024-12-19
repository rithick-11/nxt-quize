import {useState} from 'react'
import axios from 'axios'

import {Warapper} from '../../Components'
import './index.css'

const Login = () => {
  const [formData, setFormData] = useState({username: '', password: ''})
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const res = await fetch('https://apis.ccbp.in/login', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const questions = await res.json()
      console.log(questions)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Warapper>
      <div className="login-card">
        <img src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1734630015/Frame_8787_da44us.png" />
        <form onSubmit={handleLogin}>
          <div className="form-data">
            <label htmlFor="username">USERNAME</label>
            <input
              type="text"
              value={formData.username}
              required
              onChange={e => {
                setFormData(pre => ({...pre, username: e.target.value}))
              }}
              id="username"
            />
          </div>
          <div className="form-data">
            <label htmlFor="password">PASSWORD</label>
            <input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={e => {
                setFormData(pre => ({...pre, password: e.target.value}))
              }}
              required
              id="password"
            />
          </div>
          <div className="form-data checkbox-form">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => {
                setShowPassword(pre => !pre)
              }}
              id="showPassword"
            />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit" className="form-btn">
            Login
          </button>
        </form>
      </div>
    </Warapper>
  )
}

export default Login
