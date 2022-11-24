import {useState} from 'react'
import Cookies from 'js-cookie'
import {useHistory} from 'react-router-dom'
import {TiUser} from 'react-icons/ti'
import {GoTriangleRight, GoTriangleLeft} from 'react-icons/go'

import './index.css'

const Header = () => {
  const [showButton, setShowButton] = useState(false)
  const history = useHistory()
  const onClickLogout = () => {
    Cookies.remove('id')
    history.replace('/login')
  }
  const showLogout = () => {
    setShowButton(!showButton)
  }
  return (
    <nav className="nav1">
      <h1 className="heading1">PIM</h1>
      <button type="button" className="button" onClick={showLogout}>
        <TiUser size={40} className="profile-image" color="#ffffff" />
        <span className="profile-name">Shubham Shirse</span>
        {showButton ? (
          <GoTriangleLeft size={15} className="arrow" color="#ffffff" />
        ) : (
          <GoTriangleRight size={15} className="arrow" color="#ffffff" />
        )}
        {showButton && (
          <button type="button" onClick={onClickLogout} className="save-button">
            Logout
          </button>
        )}
      </button>
    </nav>
  )
}

export default Header
