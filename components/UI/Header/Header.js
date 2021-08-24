/* eslint-disable @next/next/no-img-element */
import { useStateContext } from "../../HBOProvider";
import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal"


const Header = (props) => {
  const globalState = useStateContext();


  return (
    <header className={`top-header ${globalState.accountModalOpen || globalState.sideNavOpen ? 'top-header--menu-open' : ''}`}>
      <div className="top-header__left-side">

        <div className="top-header__menu-btn" onClick={globalState.setSideNavOpenAction}>
          <i className="fas fa-bars"></i>
        </div>
        
        <div className="top-header__search-btn" onClick={globalState.setSearchModalOpenAction}>
          <i className="fas fa-search"></i>
        </div>
      </div>

      <div className="top-header__logo"></div>
      <div className="top-header__account"  onClick={() => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}>
      <img className='top-header__user-img' src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50' alt='' />      
      <div className="top-header__user-name">Bentley</div>
      </div>
      <Account/>
      <SearchModal/>
    </header>
  )
}

export default Header;
