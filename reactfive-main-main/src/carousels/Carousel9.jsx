import { IoCloseOutline } from "react-icons/io5";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import RemoveNavContext from "../RemoveNavContext";

let Carousel9 = () => {
  const { handleToggleAppear, handleToggleContent } =
    useContext(RemoveNavContext);

  return (
    <div>
      <CarouselProvider
        style={{ position: "relative", left: "170px", top: "80px" }}
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={9}
      >
        <Slider>
          <Slide index={9}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://cdn.vox-cdn.com/thumbor/yS3tiiNXRBeZhh4HtsRbEzHz0J0=/0x0:5200x3460/1200x800/filters:focal(2184x1314:3016x2146)/cdn.vox-cdn.com/uploads/chorus_image/image/53113253/GettyImages_145049633.0.jpg"
            />
            <header
              style={{ position: "relative", left: "835px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35px" }}>
                Mills Way Interchnage
              </h1>
              <p style={{ width: "280px", lineHeight: "25px" }}>
                Interchange is important because it helps drive the growth of
                the payment system. Interchange fees earned by card-issuing
                banks provide financial motivation for them to promote and issue
                more cards to more cardholders. Interchange also helps cover the
                risk associated with doing so.
              </p>
            </header>
          </Slide>
          <Slide index={8}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://www.publicdomainpictures.net/pictures/180000/velka/train-station-platform-1465841565Olp.jpg"
            />
            <header
              style={{ position: "relative", left: "835px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35x" }}>
                Oceanside Railway Station
              </h1>
              <p style={{ width: "335px", lineHeight: "25px" }}>
                Regional rail services carry more than three times the numbers
                of passengers than the much higher profile long distance
                Inter-City services. As the UK’s city regions increasingly
                develop their service sector economies and concentrate
                employment in city centres, rail enables large numbers of people
                to be moved efficiently and effectively into these ever more
                congested places.
              </p>
            </header>
          </Slide>
          <Slide index={7}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://collegeaftermath.com/wp-content/uploads/2022/11/porter-raab-gnj9vj-FRY-unsplash-1024x768.jpg"
            />
            <header
              style={{ position: "relative", left: "835px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35px" }}>
                Norht Campus HQ
              </h1>
              <p style={{ width: "280px", lineHeight: "25px" }}>
                Living on campus enables you to be in the heart of things, and
                it also ensures that you’re part of a community. A campus offers
                more opportunity for social interaction and connection with
                other students than a city university, which means more
                opportunities to make friends.
              </p>
            </header>
          </Slide>
          <Slide index={6}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://www.schwarzproperties.net/wp-content/uploads/2020/08/AdobeStock_122809314-1000x648.jpeg"
            />
            <header
              style={{ position: "relative", left: "835px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35px" }}>
                Sunnydale Apartment Complex
              </h1>
              <p
                style={{
                  width: "350px",
                  lineHeight: "25px",
                  position: "relative",
                  left: "15px",
                }}
              >
                The first benefit of living in an apartment is the financial
                aspect of renting. Rent is generally cheaper than a mortgage. In
                addition to an overall lower monthly payment, other financial
                components such as upkeep and utilities are usually lower. This
                is due to the smaller space and the overall responsibility of a
                landlord/owner versus a tenant.
              </p>
            </header>
          </Slide>
          <Slide index={5}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://cdn.website-editor.net/79676135bdd94f11ab4b145060c039ab/dms3rep/multi/Circlestone-Community-Assoc-0031.jpg"
            />
            <header
              style={{ position: "relative", left: "865px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35px" }}>
                Halston Parkway
              </h1>
              <p style={{ width: "280px", lineHeight: "25px" }}>
                Four parkways are stand-alone units of the National Park System:
                Blue Ridge Parkway, George Washington Parkway, John D.
                Rockefeller Memorial Parkway, and Natchez Trace Parkway. Others
                are managed as part of another unit.
              </p>
            </header>
          </Slide>
          <Slide index={3}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://i.pinimg.com/originals/71/69/54/7169546a58ce8bba3687cebc9ed0a933.jpg"
            />
            <header
              style={{ position: "relative", left: "865px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35px" }}>
                Irving Industrial Region
              </h1>
              <p style={{ width: "280px", lineHeight: "25px" }}>
                Regions in industrial transition have a comparatively strong
                potential to seize the chances offered by current megatrends to
                revive economic growth and productivity in industrial transition
                often have a strong legacy in manufacturing and sophisticated
                innovation activities in local core industries
              </p>
            </header>
          </Slide>
          <Slide index={1}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://photos.v3.mlsstratus.com/Live/photos/full/1/770/H6059770.jpg"
            />
            <header
              style={{ position: "relative", left: "865px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35px" }}>
                Angela Residence
              </h1>
              <p style={{ width: "280px", lineHeight: "25px" }}>
                Living in residences allows the student to focus on his studies
                without worrying about the economic concepts of having a home,
                because one single bill covers everything. No need to worry
                about the costs of electricity, water, internet.
              </p>
            </header>
          </Slide>
          <Slide index={4}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://www.missioncityrecord.com/wp-content/uploads/2021/08/26066994_web1_210806-MCR-lanes-open-bridge-Mission-Bridge_1-1024x683.jpg"
            />
            <header
              style={{ position: "relative", left: "865px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35px" }}>
                Mission Lake Bridge
              </h1>
              <p style={{ width: "280px", lineHeight: "25px" }}>
                The bridges take a special role, due its function to connect two
                different points, crossing valleys, rivers, lakes and cliffs.
                Bridges are needed on land transportation infrastructure because
                they connect different points that usually can be inaccessible.
              </p>
            </header>
          </Slide>
          <Slide index={2}>
            <img
              alt="a"
              className="provider"
              style={{ width: "750px", height: "550px" }}
              src="https://sasfin.com/media/s1iiroyo/04_corporates-and-institution-s-fixed-income.jpg"
            />
            <header
              style={{ position: "relative", left: "865px", top: "-485px" }}
            >
              <h1 style={{ fontWeight: "400", fontSize: "35px" }}>
                Sam Valley Highway
              </h1>
              <p style={{ width: "280px", lineHeight: "25px" }}>
                Highways play an important role in making travel easier and more
                expedient. This is of great assistance whether traveling for
                work or play as well as travel involving transporting goods. The
                highway system connects large metropolises and rural communities
                across the country.
              </p>
            </header>
          </Slide>
        </Slider>

        <ButtonBack style={{ border: "none", backgroundColor: "whitesmoke" }}>
          <SlArrowLeft
            style={{
              fontSize: "25px",
              position: "relative",
              left: "-63px",
              top: "-496px",
            }}
          />
        </ButtonBack>

        <ButtonNext style={{ border: "none", backgroundColor: "whitesmoke" }}>
          <SlArrowRight
            style={{
              fontSize: "25px",
              position: "relative",
              top: "-499px",
              left: "737px",
            }}
          />
        </ButtonNext>
      </CarouselProvider>

      <NavLink to="/home9" onClick={handleToggleContent}>
        <IoCloseOutline
          onClick={handleToggleAppear}
          style={{
            fontSize: "75px",
            position: "relative",
            left: "1390px",
            top: "-775px",
          }}
        />
      </NavLink>
    </div>
  );
};

export default Carousel9;
