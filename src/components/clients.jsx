
import "../sass/clients.scss";
import {Link} from "react-router-dom"
import { client1, client2, client3 } from "./common/clients";

const Clients = ()=>{
    return (
      <div className="clients-wrapper " id="clients-section">
        <div className="container clients-container">
          <div className="header-text">
            <h1>Our Clients</h1>
          </div>
          <div className="clients-section">
            <div className="row">
              <div className="col-md-4 ">
                <div className="client">
                  <Link to="/">
                    <img src={client1} alt="McGeorge" />{" "}
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="client">
                  <Link to="/">
                    <img src={client2} alt="NOW NOW" />
                  </Link>
                </div>
              </div>
              <div className="col-md-4 ">
                <div className="client">
                  <Link to="/">
                    <img src={client3} alt="OL Carpet" />{" "}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Clients;