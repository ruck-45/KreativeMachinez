// Dependencies
import ServiceImage from "./ServiceImage";
// Local Files
import socialMedia from "../assets/socialMedia.jpg";
import seo from "../assets/seo.jpg";
import webDev from "../assets/webDev.jpg";
import graphic from "../assets/graphic.jpg";
import analytics from "../assets/analytics.jpg";

const Services = () => {
  let miniWidth = 400;

  if (window.innerWidth <= 768) {
    miniWidth = 800;
  }

  return (
    <div className="flex flex-col md:flex-row bg-white">
      <ServiceImage className="smm" textSize="3rem" width={800} image={socialMedia}  state={{id: 2}}/>
      <div className="grow grid grid-cols-1 md:grid-cols-2">
        <ServiceImage className="seo" textSize="2rem" width={miniWidth} image={seo} state={{id: 1}}/>
        <ServiceImage className="web" textSize="2rem" width={miniWidth} image={webDev} state={{id: 0}}/>
        <ServiceImage className="graph" textSize="2rem" width={miniWidth} image={graphic} state={{id: 4}}/>
        <ServiceImage className="analytics" textSize="2rem" width={miniWidth} image={analytics} state={{id: 3}}/>
      </div>
    </div>
  );
};

export default Services;
