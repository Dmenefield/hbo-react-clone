/* eslint-disable @next/next/no-img-element */

export default function CreateUser() {
  return (
    <div>
      <div className="create-user">
        <div className="create-user__top">
          <div className="create-user__logo" />
          <span className="create-user__title">Who is watching?</span>
        </div>

        <div className="create-user__form">
        
            <img
              className="create-user__user-img"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50"
              alt=""
            />

            <div className="create-user__input-group">
              <label>Name</label>
              <input type="text" className="create-user__inputText" />
              <div className="create-user__colors">
                <div
                  className="create-user__color
                  create-user__color--active"
                  style={{
                    background: "rgb(2,27,64)",
                    background:
                      "linear-gradient(135deg, rgba(2,27,64,1) 11%, rgba(119,30,135,1) 100%)",
                  }}
                />
                 <div
                  className="create-user__color"
                  style={{
                    background: "rgb(22,15,22)",
                    background: "linear-gradient(135deg, rgba(22,15,22,1) 11%, rgba(156,42,148,1) 100%)"

                  }}
                />
                 <div
                  className="create-user__color"
                  style={{
                    background: "rgb(15,22,16)",
                    background: "linear-gradient(135deg, rgba(15,22,16,1) 11%, rgba(26,69,20,1) 100%)"
                  }}
                />
                 <div
                  className="create-user__color"
                  style={{
                    background: "rgb(15,22,16)",
                    background: "linear-gradient(135deg, rgba(15,22,16,1) 11%, rgba(33,47,130,1) 100%)"
                  }}
                />
              </div>
            </div>
        
        </div>
        <div className="create-user__buttons">
          <button className="create-user__cancel">Cancel</button>
          <button className="create-user__save">Save</button>
        </div>
      </div>
    </div>
  );
}
