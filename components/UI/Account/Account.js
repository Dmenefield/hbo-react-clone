/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import {useStateContext} from '../../HBOProvider'

const Account = (props) => {
  const globalState = useStateContext();
  const loopComp = (comp, digit) => {;
    let thumbnails = [];
    for(let index = 0; index <= digit; index++) {
        thumbnails.push(comp)
    }
    return thumbnails;
}

  return (
    <div className={`account ${globalState.accountModalOpen ? 'account--active' : ''}`}>
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          {loopComp((<div className="account__watch-video">
            <img
              src="https://m.media-amazon.com/images/I/51aHfqvu3-L._AC_.jpg"
              alt=""
            />
            <div className="account__watch-overlay">
              <div className="account__watch-buttons">
                <div className="account__watch-circle">
                  <i className="fas fa-play" />
                </div>

                <div className="account__watch-circle">
                  <i className="fas fa-times" />
                </div>
              </div>
            </div>
          </div>), 7)}
        </div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <a href="/" className="active">
              My List
            </a>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="account__main">
          <li>
            <a href="/" className="active">
              Account
            </a>
          </li>
          <li>
            <a href="/" className="active">
              Sign Out
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
