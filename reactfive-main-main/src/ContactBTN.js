let ContactBTN = () => {
  let ContactBTN1 = {
    color: "orangered",
    fontSize: "44px",
    position: "relative",
    top: "-70px",
  };

  let ContactBTN2 = {
    fontSize: "23.5px",
    fontWeight: "500",
    color: "black",
    position: "relative",
    top: "-45px",
  };

  let ContactImage = {
    position: "relative",
    left: "20px",
    height: "590px",
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
      <header style={{ position: "relative", top: "75px", left: "167px" }}>
        <h1 style={ContactBTN2}>Contact Us</h1>
        <h1 style={ContactBTN1}>For Inquiries or Questions</h1>
        <p style={{ position: "relative", top: "-82px" }}>
          Please use the form or call us on 123-456-7890
        </p>
      </header>

      <label
        style={{
          color: "black",
          position: "relative",
          left: "172px",
          top: "38px",
          fontWeight: "350",
        }}
        htmlFor="input1"
      >
        First Name
      </label>
      <input
        style={{
          borderColor: "whitesmoke",
          borderBottomColor: "black",
          outline: "none",
          color: "black",
          position: "relative",
          left: "96px",
          top: "74.5px",
          paddingLeft: "35px",
        }}
        type="text"
        id="input1"
      ></input>

      <label
        style={{
          color: "black",
          position: "relative",
          left: "175px",
          top: "32.5px",
          fontWeight: "350",
        }}
        htmlFor="input1"
      >
        Last Name
      </label>
      <input
        style={{
          position: "relative",
          left: "100px",
          top: "75px",
          borderColor: "whitesmoke",
          borderBottomColor: "black",
          color: "black",
          outline: "none",
          paddingLeft: "35px",
        }}
        type="text"
        id="input1"
      ></input>

      <label
        style={{
          color: "black",
          position: "relative",
          left: "-135px",
          top: "172px",
          fontWeight: "350",
        }}
        htmlFor="input1"
      >
        Subject
      </label>
      <input
        style={{
          position: "relative",
          left: "-192.5px",
          top: "212.5px",
          borderColor: "whitesmoke",
          borderBottomColor: "black",
          paddingLeft: "35px",
          color: "black",
          outline: "none",
        }}
        type="text"
        id="input1"
      ></input>

      <label
        style={{
          color: "black",
          position: "relative",
          left: "-728.5px",
          top: "173px",
          fontWeight: "350",
        }}
        htmlFor="input1"
      >
        Email*
      </label>
      <input
        style={{
          position: "relative",
          left: "-776px",
          top: "212px",
          borderColor: "whitesmoke",
          borderBottomColor: "black",
          paddingLeft: "35px",
          outline: "none",
          color: "black",
        }}
        type="text"
        id="input1"
      ></input>

      <label
        style={{
          color: "white",
          position: "relative",
          left: "-1008px",
          top: "300px",
          fontWeight: "350",
        }}
        htmlFor="input1"
      >
        Leave us a message...
      </label>
      <input
        style={{
          position: "relative",
          left: "168px",
          top: "-180px",
          padding: "75px",
          paddingRight: "287px",
          borderColor: "black",
          color: "black",
          outline: "none",
        }}
        type="text"
        id="input1"
      ></input>
      <button
        style={{
          padding: "20px",
          width: "210px",
          position: "relative",
          top: "-38px",
          left: "-380px",
          backgroundColor: "orangered",
          fontSize: "16px",
          cursor: "pointer",
          fontWeight: "300px",
          border: "none",
        }}
      >
        Submit
      </button>

      <img
        style={ContactImage}
        alt={"ContactImage"}
        src="https://www.vectorsolutions.com/wp-content/uploads/2020/11/safety20workers20at20construction20site20with20laptop-scaled.jpg"
        width="700px"
      />

      <div style={{ position: "relative", top: "140px" }}>
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
            <header
              style={{ position: "relative", left: "170px", top: "15px" }}
            >
              <h1>{result.MCR}</h1>
              <p style={{ position: "relative", top: "-25px", left: "-2px" }}>
                {result.Construction}
              </p>
            </header>

            <header
              style={{ position: "relative", top: "-94px", left: "490px" }}
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
              style={{ position: "relative", left: "860px", top: "-303px" }}
            >
              <h1 style={{ fontSize: "28px", fontWeight: "450" }}>
                {result.Socials}
              </h1>

              <p>{result.name5}</p>
              <p>{result.name6}</p>
              <p>{result.name7}</p>
            </header>

            <header
              style={{ position: "relative", left: "1115px", top: "-480.5px" }}
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
  );
};

export default ContactBTN;
