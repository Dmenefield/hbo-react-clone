/* eslint-disable @next/next/no-img-element */

import Account from "../Account/account"
import SearchModal from "../SearchModal/SearchModal"


const Header = (props) => {
  return (
    <header className="top-header">
      <div className="top-header__left-side">

        <div className="top-header__menu-btn">
          <i className="fas fa-bars"></i>
        </div>
        
        <div className="top-header__search-btn">
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="top-header__logo"></div>
      <div className="top-header__account">
      <img className='top-header__user-img' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50' alt='' />      
      <div className="top-header__user-name">Bentley</div>
      </div>
      <Account/>
      <SearchModal/>
    </header>
  )
}

export default Header;