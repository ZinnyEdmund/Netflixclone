import "./Partiesrow.css";
import icons from "../../Images/Avatar.png";

const Partiesrow = () => {
  return (
    <div className="partiesrow">
      <div className="partiesrow_header">
        <h1>Parties</h1>
      </div>

      <div className="The_partiesroww">
        <div className="partiessrow_container">
          <div className="partiesrow_img_content">
            <img src={icons} alt="icons" className="first_icon" />
            <div className="de_icons">
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
            </div>
          </div>

          <div className="partiesrow_text">
            <h2>Cadaver</h2>
            <p>Horro Marathon</p>
          </div>
        </div>

        <div className="partiessrow_container">
          <div className="partiesrow_img_content">
            <img src={icons} alt="icons" className="first_icon" />
            <div className="de_icons">
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
            </div>
          </div>

          <div className="partiesrow_text">
            <h2>Bladerunner 2049</h2>
            <p>Sci fi binge</p>
          </div>
        </div>

        <div className="partiessrow_container">
          <div className="partiesrow_img_content">
            <img src={icons} alt="icons" className="first_icon" />
            <div className="de_icons">
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
            </div>
          </div>

          <div className="partiesrow_text">
            <h2>Monsters inc.</h2>
            <p>Don't make me grow up</p>
          </div>
        </div>

        <div className="partiessrow_container">
          <div className="partiesrow_img_content">
            <img src={icons} alt="icons" className="first_icon" />
            <div className="de_icons">
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
              <img src={icons} alt="icons" />
            </div>
          </div>

          <div className="partiesrow_text">
            <h2>Friends</h2>
            <p>We were on a break!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partiesrow;
