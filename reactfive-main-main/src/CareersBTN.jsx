import { NavLink } from "react-router-dom";
import { useContext } from "react";
import RemoveNavContext from "./RemoveNavContext";

let CareersBTN = () => {
  let Careers1 = {
    fontSize: "22.5px",
    fontWeight: "500",
  };

  let Careers2 = {
    color: "orangered",
    fontSize: "44px",
    position: "relative",
    top: "-20px",
  };

  let Careers3 = {
    color: "orangered",
    fontSize: "44px",
    position: "relative",
    top: "-52px",
  };

  let Careers4 = {
    fontSize: "23.5px",
    fontWeight: "500",
    position: "relative",
    top: "-1.5px",
  };

  let Careers5 = {
    fontSize: "23.5px",
    fontWeight: "500",
    position: "relative",
    top: "-12px",
  };

  let Careers6 = {
    position: "relative",
    left: "-35px",
    top: "-45px",
  };

  let Careers7 = {
    fontWeight: "300",
    textAlign: "center",
    position: "relative",
    top: "10px",
    left: "-7px",
    border: "0.5px solid orangered",
    height: "50px",
    padding: "5px",
    cursor: "pointer",
  };

  let Careers8 = {
    position: "relative",
    top: "49px",
    fontWeight: "300",
    fontSize: "17.5px",
    border: "0.5px solid orangered",
    height: "50px",
    padding: "5px",
    cursor: "pointer",
  };

  let Careers9 = {
    fontWeight: "300",
    textAlign: "center",
    position: "relative",
    top: "5px",
    left: "-7px",
    border: "0.5px solid orangered",
    height: "50px",
    padding: "5px",
    cursor: "pointer",
  };

  let Careers10 = {
    fontWeight: "300",
    textAlign: "center",
    left: "-4px",
    border: "0.5px solid orangered",
    height: "50px",
    padding: "5px",
    cursor: "pointer",
    position: "relative",
    top: "-12px",
  };

  let Careers11 = {
    fontWeight: "300",
    textAlign: "center",
    left: "-6px",
    position: "relative",
    top: "-31px",
    border: "0.5px solid orangered",
    height: "50px",
    padding: "5px",
    cursor: "pointer",
  };

  let Careers12 = {
    fontWeight: "300",
    textAlign: "center",
    left: "-6px",
    border: "0.5px solid orangered",
    height: "50px",
    padding: "5px",
    cursor: "pointer",
    position: "relative",
    top: "30px",
  };

  const { handleToggleNav, handleToggleContent, handleColorChange } =
    useContext(RemoveNavContext);

  let careersInputBTN = () => {
    handleToggleNav();
    handleToggleContent();
    handleColorChange();
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

  return (
    <div>
      <header style={{ position: "relative", left: "130px", top: "30px" }}>
        <h1 style={Careers1}>Join the Success</h1>
        <h1 style={Careers2}>We Are Hiring a Range</h1>
        <h1 style={Careers3}>of Positions</h1>
      </header>

      <div className="div-gridContainer">
        <div className="slideOne">
          <header style={Careers6}>
            <h1 style={Careers4}>Construction</h1>
            <h1 style={Careers5}>Scheduler</h1>
            <p
              style={{ width: "225px", lineHeight: "29px", fontWeight: "350" }}
            >
              Schedulers and expediters coordinate and expedite the flow of work
              and materials within a construction company and or on construction
              job sites, prepare work and production schedules.
            </p>
            <NavLink
              to="/careersInput"
              className="careerStyles"
              onClick={careersInputBTN}
            >
              <h3 style={Careers7}>
                <span id="careerSpan1">Apply Now</span>
              </h3>
            </NavLink>
          </header>
        </div>

        <div className="slideOne">
          <header style={Careers6}>
            <h1 style={Careers4}>Receptionsit</h1>
            <p
              style={{
                width: "225px",
                lineHeight: "29px",
                fontWeight: "350",
                position: "relative",
                top: "40px",
              }}
            >
              They greet visitors, answer phone calls, and run errands while
              maintaining professional composure throughout interactions with
              customers or potential clients. This helps make everthing easier
              overall.{" "}
            </p>
            <NavLink
              to="/careersInput"
              className="careerStyles"
              onClick={careersInputBTN}
            >
              <h4 style={Careers8}>
                <span id="careerSpan2">Apply Now</span>
              </h4>
            </NavLink>
          </header>
        </div>

        <div className="slideOne">
          <header style={Careers6}>
            <h1 style={Careers4}>Civil Engineer -</h1>
            <h1 style={Careers5}>Senior Level</h1>
            <p
              style={{
                width: "225px",
                lineHeight: "29px",
                fontWeight: "350",
                position: "relative",
                top: "-10px",
              }}
            >
              Civil engineers design major transportation projects. Civil
              engineers plan, design, and supervise the construction and
              maintenance of building and infrastructure projects. This keeps
              everything order
            </p>
            <NavLink
              to="/careersInput"
              className="careerStyles"
              onClick={careersInputBTN}
            >
              <h3 style={Careers9}>
                <span id="careerSpan1">Apply Now</span>
              </h3>
            </NavLink>
          </header>
        </div>

        <div className="slideOne">
          <header style={Careers6}>
            <h1
              style={{
                fontSize: "23.5px",
                fontWeight: "500",
                position: "relative",
                top: "-25px",
              }}
            >
              CP Engineer -
            </h1>
            <h1
              style={{
                fontSize: "23.5px",
                fontWeight: "500",
                position: "relative",
                top: "-33px",
              }}
            >
              Entry Level
            </h1>
            <p
              style={{
                width: "225px",
                lineHeight: "29px",
                fontWeight: "350",
                position: "relative",
                top: "-30.5px",
              }}
            >
              At CP Engineers, we don’t overcomplicate things. Rather, we
              provide custom engineering solutions with practical applications
              without unnecessary complications to the problems.
            </p>
            <NavLink
              to="/careersInput"
              className="careerStyles"
              onClick={careersInputBTN}
            >
              <h3 style={Careers10}>
                <span id="careerSpan1">Apply Now</span>
              </h3>
            </NavLink>
          </header>
        </div>

        <div className="slideOne">
          <header style={Careers6}>
            <h1
              style={{
                fontSize: "23.5px",
                fontWeight: "500",
                position: "relative",
                top: "-31px",
              }}
            >
              Site Safety
            </h1>
            <h1
              style={{
                fontSize: "23.5px",
                fontWeight: "500",
                position: "relative",
                top: "-78.5px",
                left: "119px",
              }}
            >
              and Health
            </h1>
            <h1
              style={{
                fontSize: "23.5px",
                fontWeight: "500",
                position: "relative",
                top: "-86px",
              }}
            >
              Officier
            </h1>
            <p
              style={{
                width: "225px",
                lineHeight: "29px",
                fontWeight: "350",
                position: "relative",
                top: "-83.5px",
              }}
            >
              A Site Manager or Site Administrator is responsible for one or
              more locations of a multi-location practice or a group of
              hospital-owned practices.
            </p>
            <NavLink
              to="/careersInput"
              className="careerStyles"
              onClick={careersInputBTN}
            >
              <h3 style={Careers11}>
                <span id="careerSpan1">Apply Now</span>
              </h3>
            </NavLink>
          </header>
        </div>

        <div className="slideOne">
          <header style={Careers6}>
            <h1
              style={{
                fontSize: "23.5px",
                fontWeight: "500",
                position: "relative",
                top: "-31px",
              }}
            >
              Carpenter
            </h1>
            <p
              style={{
                width: "225px",
                lineHeight: "29px",
                fontWeight: "350",
                position: "relative",
                top: "-3.5px",
              }}
            >
              A carpenter is a position in modern construction work that
              involves shaping, cutting and installing wood for buildings or
              smaller structures. Carpenters create, fix and install either
              smaller parts of structures.
            </p>
            <NavLink
              to="/careersInput"
              className="careerStyles"
              onClick={careersInputBTN}
            >
              <h3 style={Careers12}>
                <span id="careerSpan1">Apply Now</span>
              </h3>
            </NavLink>
          </header>
        </div>
      </div>

      <hr
        style={{
          marginLeft: "140px",
          marginRight: "140px",
          position: "relative",
          top: "-60px",
        }}
      />

      {footerArray.map((result) => (
        <div>
          <header style={{ position: "relative", left: "180px", top: "15px" }}>
            <h1>{result.MCR}</h1>
            <p style={{ position: "relative", top: "-25px", left: "-2px" }}>
              {result.Construction}
            </p>
          </header>

          <header style={{ position: "relative", top: "-94px", left: "500px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "450" }}>
              {result.headOffice}
            </h1>

            <p>{result.name1}</p>
            <p>{result.name2}</p>
            <p>{result.name3}</p>
            <p>{result.name4}</p>
          </header>

          <header
            style={{ position: "relative", left: "850px", top: "-303px" }}
          >
            <h1 style={{ fontSize: "28px", fontWeight: "450" }}>
              {result.Socials}
            </h1>

            <p>{result.name5}</p>
            <p>{result.name6}</p>
            <p>{result.name7}</p>
          </header>

          <header
            style={{ position: "relative", left: "1100px", top: "-480.5px" }}
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
  );
};

export default CareersBTN;
