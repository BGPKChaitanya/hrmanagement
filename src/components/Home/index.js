import {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBar from '../SideBar'
import AddEmployee from '../AddEmployee'
import EmployeeProfile from '../EmployeeProfile'
import './index.css'

const userStatus = {
  Admin: 'Admin',
  User: 'User',
  InProgress: 'InProgress',
  Failure: 'Failure',
  initial: 'Initial',
}

const Home = () => {
  const userID = Cookies.get('id')
  const [status, setStatus] = useState(userStatus.initial)
  const history = useHistory()

  useEffect(() => {
    setStatus(userStatus.inProgress)
    if (userID === 'admin') {
      setStatus(userStatus.Admin)
    } else if (userID.includes('@gmail.com')) {
      setStatus(userStatus.User)
    } else {
      setStatus(userStatus.Failure)
    }
  }, [])

  const LoginPage = () => {
    history.replace('/login')
  }

  const LoginByAdmin = () => <AddEmployee />
  const LoginByUser = () => <EmployeeProfile />
  const FailureView = () => (
    <div className="failure">
      <img
        src="https://res.cloudinary.com/dwp6uyiir/image/upload/v1669303807/invalid-removebg-preview_petojd.png"
        alt="invalid"
        className="profile-pic-failure"
      />
      <p className="employee-failure">
        Please login with valid Email ID. Otherwise contact your administrator.
      </p>
      <button type="button" className="save-button" onClick={LoginPage}>
        Login
      </button>
    </div>
  )

  const LoaderView = () => (
    <div className="primedeals-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  const fetchData = () => {
    switch (status) {
      case userStatus.Admin:
        return LoginByAdmin()
      case userStatus.User:
        return LoginByUser()
      case userStatus.inProgress:
        return LoaderView()
      case userStatus.Failure:
        return FailureView()
      default:
        return null
    }
  }

  return (
    <div className="home">
      <SideBar />
      <div className="content">
        <Header />
        <div className="config">
          <select className="config-dropdown">
            <option className="dropdown-item">Configuration</option>
          </select>
          <button type="button" className="config-dropdown">
            Employee List
          </button>
          <button type="button" className="config-dropdown">
            Add Employee
          </button>
          <button type="button" className="config-dropdown">
            Reports
          </button>
        </div>
        <div className="addProfileContainer">{fetchData()}</div>
      </div>
    </div>
  )
}

export default Home
