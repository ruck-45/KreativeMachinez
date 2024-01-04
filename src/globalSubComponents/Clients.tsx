// Dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Image } from "@nextui-org/react";
import { Settings } from "react-slick";

const clients = [
  "https://cdn.dribbble.com/users/6014/screenshots/364959/media/b60b815721af2a5fcaa53b9a39a37ce2.png",
  "https://cdn.dribbble.com/userupload/11405874/file/original-64854976828b8d0de07d3de5d1026ddd.jpg?resize=752x",
  "https://cdn.dribbble.com/userupload/4447651/file/original-29e07f1045990edfc336df72bac958b4.jpg?resize=752x",
  "https://cdn.dribbble.com/users/850083/screenshots/17021151/media/03a7a21971beeb08b66568ebd7c92152.png",
  "https://cdn.dribbble.com/users/61834/screenshots/367216/media/ab7aaf43e1f5390541843cbd2d3df4ab.jpg",
  "https://cdn.dribbble.com/userupload/9155273/file/original-e90d397ea3a9d953edab64f2189f0514.png?resize=752x",
  "https://cdn.dribbble.com/users/1940055/screenshots/5627168/800_600_tacoco_dribble_shot.png",
  "https://cdn.dribbble.com/users/9964/screenshots/3753154/d46-flickr-1983.png",
];

const Clients = () => {

  let clientNum = 3 

  if (window.innerWidth <= 768) {
    clientNum = 2;
  }

  if (window.innerWidth <= 560) {
    clientNum = 1;
  }

  var settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: clientNum,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[65rem] mx-auto",
    focusOnSelect: true,
    centerMode: true,
  };

  return (
    <div className="bg-[black] text-white px-[3rem] py-[5rem] ">
      <h1 className="font-['lilita_one'] text-[3rem] text-center mx-auto mb-[2rem]">Our Clients</h1>

      <Slider {...settings}>
        {clients.map((data, index) => (
          <Image width={300} src={data} key={index} isZoomed className="cursor-pointer" />
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
