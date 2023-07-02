
import "../sass/team.scss";
const OurTeam = ()=>{
    return(
        <div className="team-wrapper " >
            <div className="container team-container">
                <div className="header-text">
                    <h1>Our Team</h1>
                </div>
                <div className="team-section">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="" alt="" />
                            <p>Sodiq</p>
                            <p>Team Lead</p>
                        </div>
                        <div className="col-md-4">
                            <img src="" alt="" />
                            <p>Ibukun</p>
                            <p>CTO</p>
                        </div>
                        <div className="col-md-4">
                            <img src="" alt="" />
                            <p>Abiodun</p>
                            <p>Head Training</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeam;