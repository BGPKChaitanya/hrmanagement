import {GoTriangleDown} from 'react-icons/go'
import './index.css'

const EmployeeProfile = () => (
  <div>
    <div className="profile-container">
      <div className="container1-user">
        <h1 className="username">Chahal Vadalmiya</h1>
        <img
          src="https://res.cloudinary.com/dwp6uyiir/image/upload/v1669207794/istockphoto-1016744004-170667a-removebg-preview_ha4jzw.png"
          alt="profile"
          className="profile-pic1"
        />
        <ul className="user-details-list">
          <li className="user-details-list-item">Personal Details</li>
          <li className="user-details-list-item">Contact Details</li>
          <li className="user-details-list-item">Emergency Contacts</li>
          <li className="user-details-list-item">Dependents</li>
          <li className="user-details-list-item">Immigrations</li>
          <li className="user-details-list-item">Job</li>
          <li className="user-details-list-item">Salary</li>
          <li className="user-details-list-item">Report-to</li>
          <li className="user-details-list-item">Qualifications</li>
          <li className="user-details-list-item">Memberships</li>
        </ul>
      </div>
      <div className="container2">
        <h1 className="user-employee">Personal Details</h1>
        <hr className="hr-line" />
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
            <input
              type="text"
              placeholder="Middle Name"
              className="input input5"
            />
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
                Other Id
              </label>
              <input type="text" className="input input4" id="id1" />
            </div>
          </div>
          <div className="id-outer-container">
            <div className="id-container">
              <label className="label" htmlFor="id2">
                Drivers Licence Number
              </label>
              <input type="text" className="input input4" id="id2" />
            </div>
            <div className="id-container margin">
              <label className="label" htmlFor="id3">
                License Expiry Date
              </label>
              <input type="date" className="input input4" id="id3" />
            </div>
          </div>
          <div className="id-outer-container">
            <div className="id-container">
              <label className="label" htmlFor="id4">
                Country
              </label>
              <div className="drop drop-input input4">
                <select className="select drop-select">
                  <option className="drop-option">India</option>
                  <option className="drop-option">Srilanka</option>
                  <option className="drop-option">China</option>
                </select>
                <button type="button" className="drop-button">
                  <GoTriangleDown size={15} />
                </button>
              </div>

              {/* <input type="text" /> */}
            </div>
            <div className="id-container margin">
              <label className="label" htmlFor="id3">
                Marital Status
              </label>
              <div className="drop drop-input input4">
                <select className="select drop-select">
                  <option className="drop-option">Single</option>
                  <option className="drop-option">Married</option>
                </select>
                <button type="button" className="drop-button">
                  <GoTriangleDown size={15} />
                </button>
              </div>
            </div>
          </div>
          <div className="id-outer-container">
            <div className="id-container">
              <label className="label" htmlFor="id2">
                Date of Birth
              </label>
              <input type="date" className="input input4" id="id2" />
            </div>
            <div className="id-container margin">
              <p className="label">Gender</p>
              <div className="gender-con ">
                <div className="g-radio">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    className="g-input"
                  />
                  <label className="label g-label" htmlFor="male">
                    Male
                  </label>
                </div>
                <div className="g-radio">
                  <input type="radio" id="female" name="gender" />
                  <label className="label g-label" htmlFor="female">
                    Female
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
        <hr className="hr-line" />
        <div className="save-container">
          <p className="label">Required*</p>
          <div className="button-container">
            <button type="button" className="cancel-button">
              Cancel
            </button>
            <button type="button" className="save-button">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default EmployeeProfile
