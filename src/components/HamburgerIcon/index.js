/* eslint-disable import/no-extraneous-dependencies */
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {FiMenu} from 'react-icons/fi'

import './index.css'

const HamburgerIcon = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="popup-container">
      <Popup
        trigger={
          <button className="hamburger-icon" type="button">
            <FiMenu />
          </button>
        }
      >
        <div className="nav-items">
          <ul className="list-container">
            <Link to="/" className="link">
              <li className="item">Home</li>
            </Link>
            <Link to="/my-profile" className="link">
              <li className="item">Profile</li>
            </Link>
            <li>
              <button
                onClick={onClickLogout}
                className="logout-btn"
                type="button"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </Popup>
    </div>
  )
}
export default withRouter(HamburgerIcon)
