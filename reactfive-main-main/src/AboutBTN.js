let AboutBTN = () => {
  let AboutStyles1 = {
    fontSize: "22.5px",
    fontWeight: "600",
    position: "relative",
    top: "7px",
  };

  let AboutStyles2 = {
    fontSize: "45px",
    color: "orangered",
    position: "relative",
    top: "-20px",
  };

  let AboutStyles3 = {
    width: "600px",
    lineHeight: "32px",
    fontFamily: "Gill Sans",
    fontSize: "18px",
    fontWeight: "350",
    position: "relative",
    top: "-30px",
  };

  let AboutStyles4 = [
    {
      Masterson: "Masterson & Richards",
      Construction1: "Construction Associates",
      Para1:
        "MRC Construction is a renowned construction company with a rich history and an unwavering commitment to excellence. For decades, they have been at the forefront of the construction industry, leaving an indelible mark on the landscapes they transform. From towering skyscrapers to sprawling residential complexes, MRC Construction has demonstrated unmatched expertise and craftsmanship in every project they undertake.",
      Para11:
        "At the heart of MRC Construction's success lies a team of passionate individuals who share a common vision of transforming the world through their construction endeavors. From skilled architects who envision breathtaking designs to engineers who meticulously plan and execute each intricate detail, MRC's workforce comprises top talent dedicated to turning dreams into reality. This cohesive approach has resulted in a diverse portfolio of projects that span commercial, residential, institutional, and industrial sectors.",
      Para111:
        "MRC Construction's visionary approach extends beyond the construction site. They actively engage in research and development, exploring emerging technologies and methodologies to enhance their capabilities continually. Their forward-thinking outlook has not only fueled their success but also inspired advancements within the broader construction industry.",
    },

    {
      RelationShips: "Relationships",
      Para2:
        "Founded by visionary leaders with a passion for innovation and a dedication to quality, MRC Construction has grown into a trusted name in the industry. Their team of skilled architects, engineers, and construction professionals work collaboratively to turn dreams into reality, creating spaces that inspire and endure.",
    },

    {
      Experience: "Experience",
      Para3:
        "Embracing the latest advancements in technology and sustainable practices, MRC Construction is constantly pushing the boundaries of what's possible in the construction realm. Their forward-thinking approach and innovative solutions have earned them accolades and recognition in the industry.",
    },

    {
      Accountability: "Accountability",
      Para4:
        "Embracing the latest advancements in technology and sustainable practices, MRC Construction is constantly pushing the boundaries of what's possible in the construction realm. Their forward-thinking approach and innovative solutions have earned them accolades and recognition in the industry.",
    },
  ];

  let AboutStyles5 = {
    width: "498px",
    lineHeight: "32px",
    fontSize: "16px",
    fontWeight: "350",
  };

  let AboutStyles6 = {
    width: "520px",
    lineHeight: "32px",
    fontSize: "16px",
    fontWeight: "350",
    position: "relative",
    top: "13px",
  };

  let AboutStyles7 = {
    width: "520px",
    lineHeight: "32px",
    fontSize: "16.5px",
    fontWeight: "350",
    position: "relative",
    top: "-50px",
  };

  let AboutStyles8 = {
    width: "520px",
    lineHeight: "32px",
    fontSize: "16.5px",
    fontWeight: "350",
    position: "relative",
    top: "-15px",
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

  let AboutImage1 =
    "https://media.licdn.com/dms/image/C4D12AQEanhsvfqRO0Q/article-cover_image-shrink_720_1280/0/1531740685395?e=2147483647&v=beta&t=tJni3bzgym6-AFBM9iGq-o8aKrO8AfpgP6HlONaRZMU";

  return (
    <div>
      <header style={{ position: "relative", left: "156px" }}>
        <h1 style={AboutStyles1}>About Us</h1>
        <h1 style={AboutStyles2}>We Build for People</h1>
        <p style={AboutStyles3}>
          MRC Group is an industry leading metal roofing, cladding,
          waterproofing, specialist coatings and fencing building envelope
          contractor, proudly working with property owners, facility managers
          and landlords delivering turnkey solutions.
        </p>
      </header>

      <section>
        <img
          style={{ position: "relative", left: "157.5px" }}
          alt={"AboutImage1"}
          src={AboutImage1}
          width="1200px"
          height="750px"
        />
      </section>

      <hr
        style={{
          position: "relative",
          top: "110px",
          marginLeft: "850px",
          marginRight: "600px",
        }}
      />
      <hr
        style={{
          position: "relative",
          top: "410px",
          marginLeft: "850px",
          marginRight: "600px",
        }}
      />
      <hr
        style={{
          position: "relative",
          marginLeft: "850px",
          marginRight: "600px",
          top: "708.5px",
        }}
      />

      {AboutStyles4.map((aboutUs) => (
        <div>
          <header style={{ position: "relative", left: "160px", top: "60px" }}>
            <h1 style={{ fontSize: "30px" }}>{aboutUs.Masterson}</h1>
            <h1
              style={{ fontSize: "30px", position: "relative", top: "-14px" }}
            >
              {aboutUs.Construction1}
            </h1>

            <p style={AboutStyles5}>{aboutUs.Para1}</p>
            <p style={AboutStyles6}>{aboutUs.Para11}</p>
          </header>

          <header
            style={{ position: "relative", left: "850px", top: "-535px" }}
          >
            <h1 style={{ fontSize: "23px", fontWeight: "400" }}>
              {aboutUs.RelationShips}
            </h1>
            <p style={AboutStyles6}>{aboutUs.Para2}</p>
          </header>

          <header
            style={{ position: "relative", left: "850px", top: "-450px" }}
          >
            <h1 style={{ fontSize: "23px", fontWeight: "400" }}>
              {aboutUs.Experience}
            </h1>
            <p style={AboutStyles6}>{aboutUs.Para3}</p>
          </header>

          <header
            style={{ position: "relative", left: "850px", top: "-370px" }}
          >
            <h1 style={{ fontSize: "23px", fontWeight: "400" }}>
              {aboutUs.Accountability}
            </h1>
            <p style={AboutStyles6}>{aboutUs.Para4}</p>
          </header>
        </div>
      ))}

      <header style={{ position: "relative", left: "107px", top: "-450px" }}>
        <h1 style={AboutStyles1}>Our Mission</h1>
        <h1 style={AboutStyles2}>We Aim to Build a</h1>
        <h1
          style={{
            fontSize: "45px",
            color: "orangered",
            position: "relative",
            top: "-52px",
          }}
        >
          Better World
        </h1>
        <p style={AboutStyles7}>
          As a responsible corporate entity, MRC Construction takes pride in
          giving back to the communities they operate in. Engaging in various
          philanthropic initiatives, they contribute to social causes, uplift
          underprivileged communities, and create a positive impact beyond
          construction. MRC's commitment to social responsibility embodies their
          belief in being a catalyst for positive change.
        </p>
        <p style={AboutStyles8}>
          In conclusion, MRC Construction's journey is a testament to their
          unwavering commitment to excellence, innovation, and sustainability.
          Their pioneering spirit, coupled with a human-centric approach, sets
          them apart as an industry leader. With each project, MRC Construction
          not only builds structures but also enriches lives and shapes the
          future of construction. As they continue to redefine the skyline and
          elevate construction standards, MRC stands as a beacon of inspiration
          for the construction fraternity and beyond.
        </p>
      </header>

      <section>
        <img
          style={{ position: "relative", left: "684px", top: "-1030px" }}
          alt={"Service"}
          src="https://fthmb.tqn.com/_ugYeD_GIESdfpmqjranpTrAZ3w%3d/5120x3413/filters:fill(auto%2c1)/GettyImages-529341337-56a36b3f3df78cf7727d4b53.jpg"
          width="780px"
          height="630px"
        />
      </section>

      <div className="footerAbout">
        <div id="footer">
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
                style={{ position: "relative", left: "-525px", top: "15px" }}
              >
                <h1>{result.MCR}</h1>
                <p style={{ position: "relative", top: "-25px", left: "5px" }}>
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
                style={{ position: "relative", left: "415px", top: "-480.5px" }}
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
  );
};

export default AboutBTN;
