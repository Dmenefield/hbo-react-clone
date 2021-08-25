/* eslint-disable @next/next/no-img-element */
import { useStateContext } from "../../HBOProvider";

const SearchModal = (props) => {
    const globalState = useStateContext();
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 0; index <= digit; index++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
      <div className={`search-modal ${globalState.searchModalOpen ? 'search-modal--active' : ' '}`}>
          <div className="search-modal__input-group">
          <input className="search-modal__input" type="text" placeholder="Search for a title"/>
          <div className="search-modal__close-btn" onClick={() => globalState.setSearchModalOpenAction(false)}>
              <i className="fas fa-times"/>
          </div>
          </div>

          <h3 className="search-modal__title">
              Popular Searches
          </h3>

          <div className="search-modal__thumbnails">
              
              {loopComp((<div className="search-modal__thumbnail">
                  <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4940c5878babf3dc5d2ca567b7558178_9e62fc4c-4116-48e5-a4f5-3a99c73ae7b1_240x360_crop_center.progressive.jpg?v=1573651499" alt=""/>
                <div className="search-modal__top-layer">
                    <i className="fas fa-play"/>
                </div>
              </div>), 10)}

          </div>
      </div>
    )
  }
  
  export default SearchModal;
  