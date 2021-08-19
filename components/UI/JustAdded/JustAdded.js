/* eslint-disable @next/next/no-img-element */


const JustAdded = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for(let index = 0; index <= digit; index++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
      <div className='just-added'>
          <h3 className="just-added__title"> Just Added</h3>
          <div className="just-added__thumbnails">
              
              {loopComp((<div className="just-added__thumbnail">
                  <img src="https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4940c5878babf3dc5d2ca567b7558178_9e62fc4c-4116-48e5-a4f5-3a99c73ae7b1_240x360_crop_center.progressive.jpg?v=1573651499" alt=""/>
                <div className="just-added__top-layer">
                    <i className="fas fa-play"/>
                </div>
              </div>), 10)}

          </div>
      </div>
    )
  }
  
  export default JustAdded;
  