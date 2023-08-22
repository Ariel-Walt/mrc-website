import React, { useEffect, useState } from "react";
import NameData from "./NameData";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let styleOne = {
    position: "relative",
    top: "-410.5px",
    left: "127px",
    fontSize: "22.5px",
    fontWeight: "600",
    color: "black",
    zIndex: "-1",
  };

  let styleTwo = {
    position: "relative",
    top: "-425.5px",
    left: "125px",
    color: "orangered",
    zIndex: "-1",
    fontSize: "45px",
  };

  let styleThree = {
    position: "relative",
    top: "-460px",
    left: "124.5px",
    fontSize: "45px",
    color: "orangered",
    zIndex: "-1",
  };

  let firstImg = {
    width: "775px",
    position: "relative",
    left: "685px",
    top: "-400px",
    height: "735px",
    zIndex: "-1",
  };

  let styleFour = {
    position: "relative",
    top: "-1000px",
    left: "131px",
  };

  let styleFive = {
    position: "relative",
    top: "-980px",
    width: "410px",
    left: "129.5px",
    lineHeight: "40px",
    fontFamily: "Gill Sans",
    fontSize: "18px",
  };

  let secondImg = {
    width: "700px",
    position: "relative",
    top: "-800px",
    left: "100px",
    height: "720px",
  };

  let styleSix = {
    position: "relative",
    top: "-1295px",
    left: "920px",
  };

  let styleSeven = {
    position: "relative",
    top: "-1273.5px",
    left: "920.5px",
    width: "410px",
    lineHeight: "40px",
    fontSize: "18px",
    fontFamily: "Gill Sans",
  };

  let thirdImg = {
    position: "relative",
    left: "710px",
    top: "-1130px",
    width: "750px",
    height: "750px",
  };

  let styleEight = {
    position: "relative",
    top: "-1700px",
    left: "160px",
  };

  let styleNine = {
    position: "relative",
    top: "-1675px",
    left: "160px",
    fontFamily: "Gill Sans",
    width: "400px",
    fontSize: "18px",
    lineHeight: "40px",
  };

  let parallaxStyle = {
    backgroundImage:
      "url(http://www.proctorcc.com/wp-content/uploads/2016/07/services-construction-management.jpg)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  let dataFive = NameData.map((value, index) => (
    <header
      key={value.id ? value.id : index}
      style={{ position: "relative", top: "-2055px", left: "100px" }}
    >
      <h1 style={{ color: "white", fontSize: "22.5px", fontWeight: "600" }}>
        {value.nameOne}
      </h1>
      <h1 style={{ color: "orangered", fontSize: "45px", marginTop: "-8px" }}>
        {value.nameTwo}
      </h1>
      <p
        style={{
          color: "white",
          width: "500px",
          marginTop: "-8.5px",
          lineHeight: "35px",
          fontFamily: "sans-serif",
        }}
      >
        {value.nameThree}
      </p>
      <h1 style={{ color: "white", fontSize: "65px", marginBottom: "70px" }}>
        {value.number1}
      </h1>
      <h1
        style={{
          color: "white",
          fontSize: "65px",
          position: "relative",
          top: "-156px",
          left: "220px",
        }}
      >
        {value.number2}
      </h1>
      <h1
        style={{
          color: "white",
          fontSize: "65px",
          position: "relative",
          top: "-285px",
          left: "398.5px",
        }}
      >
        {value.number3}
      </h1>
      <h1
        style={{
          color: "white",
          fontSize: "65px",
          position: "relative",
          top: "-415px",
          left: "600px",
        }}
      >
        {value.number4}
      </h1>
      <p style={{ position: "relative", top: "-470px", color: "white" }}>
        {value.establishment}
      </p>
      <p
        style={{
          position: "relative",
          left: "223px",
          top: "-505px",
          color: "white",
        }}
      >
        {value.projects}
      </p>
      <p
        style={{
          position: "relative",
          left: "415px",
          top: "-540px",
          color: "white",
        }}
      >
        {value.employees}
      </p>
      <p
        style={{
          position: "relative",
          left: "615px",
          top: "-577px",
          color: "white",
        }}
      >
        {value.partners}
      </p>
    </header>
  ));

  let styleTen = {
    fontSize: "22.5px",
    fontWeight: "600",
    position: "relative",
    top: "20px",
  };

  let styleEleven = {
    fontSize: "45px",
    color: "orangered",
    position: "relative",
    top: "-5px",
  };

  let styleTwelve = {
    width: "470px",
    lineHeight: "32px",
    fontFamily: "Gill Sans",
    fontSize: "18px",
    position: "relative",
    top: "-15px",
    left: "6px",
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
      <div
        id="parallax"
        style={{ transform: `translateY(${scrollY * -1.8}px)` }}
      >
        <h1 id="h1">Building a</h1>
        <h1 id="h11">Concrete Future</h1>
        <h2 id="h2">Honest, Reliable Builders Since 1968</h2>
      </div>

      <div>
        <h1 style={styleOne}>Building Is What We Do</h1>
        <h1 style={styleTwo}>MCR Construction Is</h1>
        <h1 style={styleThree}>Leading Quality Projects</h1>
      </div>

      <div>
        <img
          style={firstImg}
          alt="firstImg"
          src="https://www.fortunebuilders.com/wp-content/uploads/2019/05/best-places-to-buy-commercial-real-estate-1.jpg"
        />
        <h1 style={styleFour}>Commercial</h1>
        <p style={styleFive}>
          Commercial real estate is an excellent opportunity for investing and
          generating outside income. There are numerous people over the years
          that have started to invest in commercial real estate, with this type
          of property being sold and purchased on a regular basis, this could be
          a great way to invest your money with the potential of a good return.
          Before anyone ever decides to invest in the commercial market, it is
          extremely important to understand the industry and all the components
          surrounding it
        </p>
      </div>

      <div>
        <img
          style={secondImg}
          alt="secondImg"
          src="https://g.foolcdn.com/editorial/images/440687/infrastructure.jpg"
        />
        <h1 style={styleSix}>Infrastructure</h1>
        <p style={styleSeven}>
          Infrastructure includes a variety of systems and structures where
          physical components are required such as the electrical grid across a
          city, state, or country. While the facilities, equipment, or similar
          physical assets like bridges and roads are essential to an economy,
          infrastructure also enables citizens to participate in the social and
          economic community and provides them with necessities such as food and
          water.
        </p>
      </div>

      <div>
        <img
          style={thirdImg}
          alt="thirdImg"
          src="https://media.consumeraffairs.com/files/news/New_Home_Construction__alisonhancock_-_Fotolia.com.jpg"
        />
        <h1 style={styleEight}>Residential</h1>
        <p style={styleNine}>
          In certain residential areas, especially rural, large tracts of land
          may have no services whatever, such that residents seeking services
          must use a motor vehicle or other transportation, so the need for
          transportation has resulted in land development following existing or
          planned transport infrastructure such as rail and road. Development
          patterns may be regulated by restrictive covenants contained in the
          deeds to the properties in the development and may also result from or
          be reinforced by zoning.
        </p>
      </div>
      <div>
        <div className="parallax-image" style={parallaxStyle}></div>
        {dataFive}
      </div>

      <header style={{ position: "relative", left: "155px", top: "-2420px" }}>
        <h1 style={styleTen}>What We Do</h1>
        <h1 style={styleEleven}>Our Projects</h1>
        <p style={styleTwelve}>
          It is not the beauty of a building you should look at; it’s the
          construction of the foundation that will stand the test of time. Every
          building within the construction industry has a foundation that all
          other components rely on for their existence.
        </p>
      </header>

      <CarouselProvider
        style={{ position: "relative", left: "-62.5px", top: "-2350px" }}
        naturalSlideWidth={100}
        naturalSlideHeight={120}
        totalSlides={6}
      >
        <Slider>
          <Slide index={1}>
            <img
              alt="Slide2"
              className="provider"
              style={{
                width: "1200px",
                position: "relative",
                left: "220px",
                height: "530px",
              }}
              src="https://alexionpartners.com/wp-content/uploads/AdobeStock_284666797-e1569797264159.jpeg"
            />
            <p
              style={{
                color: " rgb(105, 104, 104)",
                fontSize: "35px",
                position: "relative",
                left: "615.5px",
                top: "10px",
                fontFamily: "",
                fontWeight: "400",
              }}
            >
              West Ridge Hill Interchange
            </p>
          </Slide>
          <Slide index={2}>
            <img
              alt="slide3"
              className="provider"
              style={{
                width: "1200px",
                position: "relative",
                left: "220px",
                height: "530px",
              }}
              src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg"
            />
            <p
              style={{
                color: " rgb(105, 104, 104)",
                fontSize: "35px",
                position: "relative",
                left: "696.5px",
                fontFamily: "",
                fontWeight: "400",
              }}
            >
              Halston Parkway
            </p>
          </Slide>
          <Slide index={3}>
            <img
              className="provider"
              alt="SlideIndex"
              style={{
                width: "1200px",
                position: "relative",
                left: "220px",
                height: "530px",
              }}
              src="https://www.bellefirma.com/wp-content/uploads/2018/04/Alcatel-Lucent3-1.jpg"
            />
            <p
              style={{
                color: " rgb(105, 104, 104)",
                fontSize: "35px",
                position: "relative",
                left: "696px",
              }}
            >
              Great Hill Campus
            </p>
          </Slide>
          <Slide index={4}>
            <img
              alt="slide4"
              className="provider"
              style={{
                width: "1200px",
                position: "relative",
                left: "220px",
                height: "530px",
              }}
              src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/city-of-nice-central-train-station-view-brch-photography.jpg"
            />
            <p
              style={{
                color: " rgb(105, 104, 104)",
                position: "relative",
                left: "635px",
                fontSize: "35px",
              }}
            >
              Oceanside Railway Station
            </p>
          </Slide>
          <Slide index={5}>
            <img
              className="provider"
              alt="slide5"
              style={{
                width: "1200px",
                position: "relative",
                left: "220px",
                height: "530px",
              }}
              src="https://hiddencityphila.org/wp-content/uploads/2012/09/Winston-building.jpg"
            />
            <p
              style={{
                color: " rgb(105, 104, 104)",
                fontSize: "35px",
                position: "relative",
                left: "683px",
              }}
            >
              Wintworth Building
            </p>
          </Slide>
          <Slide index={6}>
            <img
              alt="slide6"
              className="provider"
              style={{
                width: "1200px",
                position: "relative",
                left: "220px",
                height: "530px",
              }}
              src="https://i.huffpost.com/gen/1549193/thumbs/o-SUBURBS-facebook.jpg"
            />
            <p
              style={{
                color: " rgb(105, 104, 104)",
                fontSize: "35px",
                position: "relative",
                left: "645px",
              }}
            >
              Highland West Parkway
            </p>
          </Slide>
        </Slider>
        <ButtonBack
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "30px",
            marginLeft: "200px",
            border: "none",
          }}
        >
          <SlArrowLeft
            style={{ position: "relative", top: "-1588px", left: "-40.5px" }}
          />
        </ButtonBack>
        <ButtonNext
          style={{
            backgroundColor: "transparent",
            color: "black",
            fontSize: "30px",
            border: "none",
          }}
        >
          <SlArrowRight
            style={{ position: "relative", top: "-1584.5px", left: "1181.5px" }}
          />
        </ButtonNext>
      </CarouselProvider>

      <header className="headerOne" style={{ textAlign: "center" }}>
        <div>
          <h1 id="hOne" style={{ fontSize: "22.5px", fontWeight: "600" }}>
            Our Clients
          </h1>
          <h1 style={{ fontSize: "45px", color: " rgb(255, 125, 77)" }}>
            We believe each client is a
          </h1>
          <h1
            style={{
              fontSize: "45px",
              color: " rgb(255, 125, 77)",
              marginTop: "-35px",
            }}
          >
            long term partnerhsip
          </h1>
        </div>
        <img
          className="imgOne"
          alt="slider"
          src="https://turbologo.com/articles/wp-content/uploads/2020/12/logo3.png"
          style={{ width: "1125px", position: "relative", top: "-3540px" }}
        />
      </header>

      <div id="footer">
        <hr
          style={{
            marginLeft: "140px",
            marginRight: "140px",
            position: "relative",
            top: "-60px",
          }}
        />
        {footerArray.map((result, index) => (
          <div key={result.id ? result.id : index}>
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
  );
}
export default Home;
