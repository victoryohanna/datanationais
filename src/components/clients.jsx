
import "../sass/clients.scss";
import { client1, client2, client3 } from "./elements/services";

const Clients = ()=>{
    return(
        <div className="clients-wrapper " id="clients-section">
            <div className="container clients-container">
                <div className="header-text">
                    <h1>Our Clients</h1>
                </div>
                <div className="clients-section">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={client1} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img src={client2} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img src={client3} alt="" />
                        </div>
                        <div className="col-md-3">
                            <img src={client2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients;