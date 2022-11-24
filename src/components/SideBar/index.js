import {VscSearch} from 'react-icons/vsc'
import {FaUsers, FaRegCalendarTimes, FaUserCog} from 'react-icons/fa'
import {RiAdminFill, RiBookletLine, RiWechatLine} from 'react-icons/ri'
import {BiTimer} from 'react-icons/bi'
import {GiAutoRepair} from 'react-icons/gi'
import {AiOutlineHome} from 'react-icons/ai'
import './index.css'

const SideBar = () => (
  <div className="sidebar">
    <img
      src="https://res.cloudinary.com/dwp6uyiir/image/upload/v1669121360/202-2023162_card-image-cap-orange-hrm-logo-png-removebg-preview-removebg-preview_vkfbsr.png"
      alt="website logo"
      className="logo"
    />

    <div className="menu">
      <div className="search">
        <VscSearch size={20} className="searchIcon" />
        <input type="text" placeholder="Search" className="searchInput" />
      </div>
      <hr />
      <ul className="menu-list">
        <li className="list-item">
          <RiAdminFill size={20} />
          <span className="list-text">Admin</span>
        </li>
        <li className="list-item">
          <FaUsers size={20} />
          <span className="list-text">PIM</span>
        </li>
        <li className="list-item">
          <FaRegCalendarTimes size={20} />
          <span className="list-text">Leave</span>
        </li>
        <li className="list-item">
          <BiTimer size={20} />
          <span className="list-text">Time</span>
        </li>
        <li className="list-item">
          <FaUserCog size={20} />
          <span className="list-text">My Info</span>
        </li>
        <li className="list-item">
          <AiOutlineHome size={20} />
          <span className="list-text">Dashboard</span>
        </li>
        <li className="list-item">
          <RiBookletLine size={20} />
          <span className="list-text">Directory</span>
        </li>
        <li className="list-item">
          <GiAutoRepair size={20} />
          <span className="list-text">Maintenance</span>
        </li>
        <li className="list-item">
          <RiWechatLine size={20} />
          <span className="list-text">Buzz</span>
        </li>
      </ul>
    </div>
  </div>
)

export default SideBar
