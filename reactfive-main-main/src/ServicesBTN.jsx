import React from "react";
import servicesData from "./Services";

const ServicesBTN = () => {
  const headerStyle = {
    fontWeight: "600",
    fontSize: "22.5px",
  };

  const subHeaderStyle = {
    ...headerStyle,
    fontSize: "45.5px",
    color: "orangered",
  };

  const paragraphStyle = {
    width: "470px",
    lineHeight: "35.5px",
    fontWeight: "350",
    fontFamily: "Gill Sans",
    fontSize: "17px",
  };

  const footerSections = [
    { header: "MCR", items: ["MCR", "Construction"] },
    {
      header: "Head Office",
      items: [
        "500 Terry Francine Street",
        "San Francisco, CA 94158",
        "123-456-7890",
        "info@mysite.com",
      ],
    },
    { header: "Socials", items: ["Facebook", "Instagram", "LindedIn"] },
    {
      header: "Inquiries",
      items: [
        "For any inquiries, questions",
        "or commendations, please",
        "call: 123-456-7890",
      ],
    },
  ];

  const imgStyles = [
    { width: "850px", left: "585px", top: "-2000px", height: "700px" },
    { width: "800px", left: "100px", top: "-2004px", height: "650px" },
    { width: "815px", left: "615px", top: "-2008px", height: "645px" },
    { width: "800px", left: "105px", top: "-2012px", height: "645px" },
    { width: "800px", left: "635px", top: "-2016px", height: "630px" },
    { width: "825px", top: "-2020px", left: "110px", height: "615px" },
  ];

  const imgSources = [
    "https://thespringdistrict.com/wp-content/uploads/2019/04/C02-Block24_WEB-1919x1080.jpg",
    "https://www.berbay.com/wp/wp-content/uploads/2017/09/Real-estate-Storytelling.jpg",
    "https://lemacon.com/wp-content/uploads/2020/01/PreConstructionImage.jpg",
    "https://images.adsttc.com/media/images/5195/64bd/b3fc/4bc8/9b00/006c/large_jpg/069-hr-FNC_01.jpg?1368745135",
    "https://az505806.vo.msecnd.net/cms/c5e01cf7-d140-4442-86a2-85a8ec25bd50/a1ec53b7-cecf-4d9e-a362-3c4be059cd93.jpg",
    "https://www.dmagroup.co.uk/wp-content/uploads/2018/10/shutterstock_622211642-e1542980458353.jpg",
  ];

  const altTexts = [
    "the spring district",
    "Real estate story telling",
    "Preconstruction",
    "Media",
    "Medias",
    "media3",
  ];

  return (
    <div>
      {servicesData.map((service) => (
        <div key={service.title}>
          <h1 style={headerStyle}>{service.title}</h1>
          {service.subtitle &&
            service.subtitle.map((sub, index) => (
              <h2 key={index} style={subHeaderStyle}>
                {sub}
              </h2>
            ))}
          <p style={paragraphStyle}>{service.description}</p>
        </div>
      ))}

      {imgSources.map((src, index) => (
        <img
          style={{ ...imgStyles[index], position: "relative" }}
          src={src}
          alt={altTexts[index]}
          key={index}
        />
      ))}

      <div id="footer" className="footer2">
        <hr
          style={{
            marginLeft: "140px",
            marginRight: "140px",
            position: "relative",
            top: "-60px",
          }}
        />

        {footerSections.map((section, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              left: index === 0 ? "-525px" : "-150px",
              top: index === 0 ? "15px" : "-94px",
            }}
          >
            <h1
              style={index > 0 ? { fontSize: "28px", fontWeight: "450" } : null}
            >
              {section.header}
            </h1>
            {section.items.map((item, itemIndex) => (
              <p key={itemIndex}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesBTN;
