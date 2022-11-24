import {useState} from 'react'
import Switch from '@mui/material/Switch'
import {useDispatch} from 'react-redux'
import {AddMail} from '../../Redux/Reducer/Reducer'
import './index.css'

const AddEmployee = () => {
  const [gmail, setGmail] = useState('')
  const [showMsg, setshowMsg] = useState(false)
  const dispatch = useDispatch()

  const onClickSave = () => {
    dispatch(AddMail(gmail))
    setshowMsg(true)
  }

  return (
    <div>
      <h1 className="employee">Add Employee</h1>
      <hr className="hr-line" />
      <div className="profile-container">
        <div className="container1">
          <img
            src="https://res.cloudinary.com/dwp6uyiir/image/upload/v1669207794/istockphoto-1016744004-170667a-removebg-preview_ha4jzw.png"
            alt="profile"
            className="profile-pic"
          />
          <p className="employee1">
            Accepts jpg, .png, gif up to 1MB. Recommended dimensions: 200px X
            200px
          </p>
        </div>
        <div className="container2">
          <form className="form">
            <label className="label" htmlFor="name">
              Employee Full Name*
            </label>
            <div className="name-container">
              <input
                type="text"
                placeholder="First Name"
                className="input input1"
                id="name"
              />
              <input type="text" placeholder="Middle Name" className="input " />
              <input
                type="text"
                placeholder="Last Name"
                className="input input2"
              />
            </div>
            <div className="id-outer-container">
              <div className="id-container">
                <label className="label" htmlFor="id">
                  Employee Id
                </label>
                <input
                  type="text"
                  placeholder="0011"
                  className="input input4"
                  id="id"
                />
              </div>
              <div className="id-container margin">
                <label className="label" htmlFor="id1">
                  Email Id
                </label>
                <input
                  type="text"
                  className="input input4"
                  id="id1"
                  placeholder="xyz@gmail.com"
                  onChange={e => setGmail(e.target.value)}
                />
              </div>
            </div>
          </form>
          <hr className="hr-line" />
          <div>
            <label htmlFor="switch" className="label">
              Create Login Details
            </label>
            <Switch defaultChecked id="switch" />
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="save-container">
        <p className="label">Required*</p>
        <div className="button-container">
          <button type="button" className="cancel-button">
            Cancel
          </button>
          <button type="button" className="save-button" onClick={onClickSave}>
            Save
          </button>
        </div>
      </div>
      {showMsg && <p className="msg">Gmail Added Successfully</p>}
    </div>
  )
}

export default AddEmployee
