import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'
import {storeUser} from '../../Redux/Reducer/Reducer'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showAdmin, setshowAdmin] = useState(true)
  const [showError, setshowError] = useState(false)
  const history = useHistory()
  const dispatch = useDispatch()

  const onClickLogin = event => {
    event.preventDefault()
    if (
      (username === 'admin' && showAdmin === false) ||
      (username.includes('@gmail.com') && showAdmin === true)
    ) {
      history.replace('/')
      dispatch(storeUser(username))
    } else {
      setshowError(true)
    }
    Cookies.set('id', username, {expires: 1})
  }

  const onChangeUsername = e => {
    setUsername(e.target.value)
    setshowError(false)
  }
  const onChangePassword = e => {
    setPassword(e.target.value)
    setshowError(false)
  }

  const onClickAdmin = () => {
    setUsername('')
    setPassword('')
    setshowAdmin(false)
  }
  const onClickUser = () => {
    setUsername('')
    setPassword('')
    setshowAdmin(true)
  }

  return (
    <div className="login-outer-container">
      <div className="login-inner-container">
        <img
          src="https://res.cloudinary.com/dwp6uyiir/image/upload/v1669121360/202-2023162_card-image-cap-orange-hrm-logo-png-removebg-preview-removebg-preview_vkfbsr.png"
          alt="website logo"
          className="login-logo"
        />
        <form className="form" onSubmit={onClickLogin}>
          <label htmlFor="username" className="form-label">
            EMAIL ID
          </label>
          <input
            type="text"
            id="username"
            className="form-input"
            placeholder="Enter Email ID"
            onChange={onChangeUsername}
          />
          <label htmlFor="password" className="form-label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className="form-input"
            placeholder="Enter Password"
            onChange={onChangePassword}
          />
          <button type="submit" className="submit-button">
            {showAdmin ? 'Employee Login' : 'Admin Login'}
          </button>
          {showError && (
            <p className="form-label">Please enter valid Email ID</p>
          )}
          {showAdmin && (
            <div className="admin-style">
              <p className="form-label">Are you Admin?</p>
              <button
                type="button"
                className="login-button"
                onClick={onClickAdmin}
              >
                Admin Login
              </button>
            </div>
          )}
          {!showAdmin && (
            <div className="admin-style">
              <p className="form-label">I am an Employee</p>
              <button
                type="button"
                className="login-button"
                onClick={onClickUser}
              >
                Employee Login
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Login
