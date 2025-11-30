// src/App.jsx
import './App.css';

import logoDiscord from "./assets/images/discord-logo-white.png";
import backDiscord from "./assets/images/discord-background.png";
import menuDiscord from "./assets/images/menu-icon.png";

function App() {
  return (
    <>
      <div className="App">
        <nav className="navbar mb-5">
          <div className="container-fluid">
            <img src={logoDiscord}
            alt="Logo" 
            width="120" 
            height="24" 
            className="d-inline-block align-text-top m-3"></img>

            <img src={menuDiscord} 
            className='d-flex m-3'></img>
          </div>
        </nav>

        <div className="container-fluid">
          <div className='d-flex flex-column ms-3'>
            <div className="heading text-white w-50">
              <p className='m-0 p-0 lh-1'>IMAGINE A PLACE...</p>
            </div>

            <div className='mt-4 w-75'>
              <p className='text-white pe-5 text'>
                ...where you can belong to a school club, a gaming group, or a
                worldwide art community. Where just you and a handful of
                friends can spend time together. A place that makes it easy to
                talk every day and hang out more often.
              </p>
            </div>

            <div className='row'>
              <div className='col-md-5 d-flex flex-column'>
                <div>
                  <button className='btn bg-white text-black rounded-5 px-3 py-2 text'>
                    Download for Mac
                  </button>
                </div>
                
                <div className='mt-3'>
                  <button className='btn bg-black text-white rounded-5 px-3 py-2 text'>
                    Open Discord in your browser
                  </button>
                </div>
              </div>
              
              <div className='col-md-7 d-flex justify-content-end'>
                <img src={backDiscord}
                alt="Image bottom"
                style={{ width: "500px", height: "auto" }}></img>
              </div>            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;