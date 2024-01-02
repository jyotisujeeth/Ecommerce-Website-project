import React, { Fragment } from "react";
//import {Link} from 'react-router-dom';
import "./Home.css";
import { BsPlayCircle } from "react-icons/bs";

function Home() {
  return (
    <Fragment>
      <p
        className="display-5 text-center p-3 bg-secondary mt-1 text-white"
        style={{ fontSize: "8em", fontFamily: "bold" }}
      >
        The Generics
        <br />
        <BsPlayCircle />
      </p>

      <div className="home-page">
        <h1>Tours</h1>
        <div>
          <div className="show-box">
            <div> Feb 10</div>
            <div>DETROIT, MI</div>
            <div>DTE ENERGY MUSIC THEATRE</div>
            <div>
              <button>Buy Tickets</button>
            </div>
          </div>
          <div className="show-box">
            <div> Feb 11</div>
            <div>TORONTO,ON</div>
            <div>BUDWEISER STAGE</div>
            <div>
              <button>Buy Tickets</button>
            </div>
          </div>
          <div className="show-box">
            <div> Feb 12</div>
            <div>BRISTOW, VA</div>
            <div>JIGGY LUBE LIVE</div>
            <div>
              <button>Buy Tickets</button>
            </div>
          </div>
          <div className="show-box">
            <div> Feb 13</div>
            <div>PHOENIX, AZ</div>
            <div>AK-CHIN PAVILION</div>
            <div>
              <button>Buy Tickets</button>
            </div>
          </div>
          <div className="show-box">
            <div> Feb 14</div>
            <div>LAS VEGAS, NV</div>
            <div>AK-CHIN PAVILION</div>
            <div>
              <button>Buy Tickets</button>
            </div>
          </div>
          <div className="show-box">
            <div> Feb 15</div>
            <div>PHOENIX, AZ</div>
            <div>AK-CHIN PAVILION</div>
            <div>
              <button>Buy Tickets</button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Home;
