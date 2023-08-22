import { NavLink } from "react-router-dom";
import { useContext } from "react";
import RemoveNavContext from "./RemoveNavContext";
import "./App.css";

let ProjectsBTN = () => {
  let projectsStyle1 = {
    fontSize: "22.5px",
    fontWeight: "600",
  };

  let projectsStyle2 = {
    fontSize: "45px",
    color: "orangered",
    position: "relative",
    top: "-25px",
  };

  let projectsStyle3 = {
    width: "470px",
    lineHeight: "32px",
    fontFamily: "Gill Sans",
    fontSize: "18px",
    fontWeight: "350",
    position: "relative",
    top: "-40px",
  };

  let footerArray = [
    {
      MCR: "MCR",
      Construction: "Construction",
    },

    {
      headOffice: "Head Office",
      name1: "500 Terry Francine Street",
      name2: "San Francisco, CA 94158",

      name3: "123-456-7890",
      name4: "info@mysite.com",
    },

    {
      Socials: "Socials",
      name5: "Facebook",
      name6: "Instagram",
      name7: "LindedIn",
    },

    {
      Inquiries: "Inquiries",
      name8: "For any inquiries, questions",
      name9: "or commendations, please",
      name10: "call: 123-456-7890",
    },
  ];

  const { handleToggleNav, handleToggleContent } = useContext(RemoveNavContext);

  return (
    <div>
      <header style={{ position: "relative", left: "130px", top: "30px" }}>
        <h1 style={projectsStyle1}>Our Projects</h1>
        <h1 style={projectsStyle2}>We Build Projects That Last</h1>
        <p style={projectsStyle3}>
          In the construction industry a Project Manager is highly needed, like
          in any industry the Project Manager has many responsibilities, passion
          for multitasking, communication and technical skills.
        </p>
      </header>

      <div className="flex-container">
        <div className="flex-item1">
          <NavLink
            to="/carousel1"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="a"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              Angela Residence
            </h2>
          </NavLink>
        </div>

        <div className="flex-item2">
          <NavLink
            to="/carousel2"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="b"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              Sam Valley <span id="highway">Highway</span>
            </h2>
          </NavLink>
        </div>

        <div className="flex-item3">
          <NavLink
            to="/carousel3"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="d"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              Irving Industrial <span id="region">Region</span>
            </h2>
          </NavLink>
        </div>

        <div className="flex-item4">
          <NavLink
            to="/carousel4"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="e"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              Mission Lake <span id="bridge">Bridge</span>
            </h2>
          </NavLink>
        </div>

        <div className="flex-item5">
          <NavLink
            to="/carousel5"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="f"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              Halston Parkway
            </h2>
          </NavLink>
        </div>

        <div className="flex-item6">
          <NavLink
            to="/carousel6"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="g"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              Sunnydale <span id="apartment">Apartment</span>{" "}
              <span id="complex">Complex</span>
            </h2>
          </NavLink>
        </div>

        <div className="flex-item7">
          <NavLink
            to="/carousel7"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="h"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              North Campus HQ
            </h2>
          </NavLink>
        </div>

        <div className="flex-item8">
          <NavLink
            to="/carousel8"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="l"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              Oceanside Railway <span id="station">Station</span>
            </h2>
          </NavLink>
        </div>

        <div className="flex-item9">
          <NavLink
            to="/carousel9"
            className="imgStyles"
            onClick={handleToggleContent}
          >
            <img
              alt="n"
              onClick={handleToggleNav}
              id="height1"
              className="removeImg && provider"
              src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg"
            />
            <h2 onClick={handleToggleNav} style={{ fontWeight: "400" }}>
              Mills Way <span id="interchange">Interchange</span>
            </h2>
          </NavLink>
        </div>
      </div>

      <div id="removeFooter">
        <div id="footer3">
          <div id="footer" className="footer2">
            <hr
              id="hr1"
              style={{
                marginLeft: "140px",
                marginRight: "140px",
                position: "relative",
                top: "-60px",
              }}
            />

            {footerArray.map((result) => (
              <div>
                <header
                  style={{ position: "relative", left: "-525px", top: "15px" }}
                >
                  <h1>{result.MCR}</h1>
                  <p
                    style={{ position: "relative", top: "-25px", left: "5px" }}
                  >
                    {result.Construction}
                  </p>
                </header>

                <header
                  style={{ position: "relative", top: "-94px", left: "-150px" }}
                >
                  <h1 style={{ fontSize: "28px", fontWeight: "450" }}>
                    {result.headOffice}
                  </h1>

                  <p>{result.name1}</p>
                  <p>{result.name2}</p>
                  <p>{result.name3}</p>
                  <p>{result.name4}</p>
                </header>

                <header
                  style={{ position: "relative", left: "130px", top: "-303px" }}
                >
                  <h1 style={{ fontSize: "28px", fontWeight: "450" }}>
                    {result.Socials}
                  </h1>

                  <p>{result.name5}</p>
                  <p>{result.name6}</p>
                  <p>{result.name7}</p>
                </header>

                <header
                  style={{
                    position: "relative",
                    left: "415px",
                    top: "-480.5px",
                  }}
                >
                  <h1 style={{ fontSize: "28px", fontWeight: "450" }}>
                    {result.Inquiries}
                  </h1>

                  <p>{result.name8}</p>
                  <p>{result.name9}</p>
                  <p>{result.name10}</p>
                </header>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsBTN;
