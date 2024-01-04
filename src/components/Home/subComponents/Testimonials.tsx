// Dependencies
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Settings } from "react-slick";

const reviews = [
  {
    name: "John Doe",
    designation: "CEO, Tech Innovations",
    rating: "⭐⭐⭐⭐⭐",
    comment:
      "❝ Working with Kreative Machinez has been a game-changer for us. Their team's expertise in digital marketing has not only increased our online visibility but has also significantly boosted our conversions. Their commitment to excellence and results-driven approach make them our go-to for all things digital. ❞",
  },
  {
    name: "Jane Smith",
    designation: "Marketing Director, HealthHub",
    rating: "⭐⭐⭐⭐⭐⭐",
    comment:
      "❝ Kreative Machinez has truly been a partner in our success. Their comprehensive digital marketing strategies, particularly in SEO and social media, have propelled our brand to new heights. The team's dedication, creativity, and attention to detail make them stand out in the industry. We couldn't be more satisfied with the results. ❞",
  },
  {
    name: "David Patel",
    designation: "Founder, EcomCraft",
    rating: "⭐⭐⭐⭐",
    comment:
      "❝ We owe a significant portion of our e-commerce success to Kreative Machinez. Their SEO tactics have not only improved our search rankings but have also translated into tangible sales growth. The personalized approach and timely delivery of results make them a valuable partner for any online business. ❞",
  },
  {
    name: "Emily Wong",
    designation: "Education Solutions Manager",
    rating: "⭐⭐⭐⭐⭐",
    comment:
      "❝ Kreative Machinez has been instrumental in shaping our digital presence. Their team took the time to understand the unique challenges of our industry and delivered a tailored digital strategy that surpassed our expectations. Their consistency, creativity, and transparent communication have made them a trusted ally in our journey. ❞",
  },
  {
    name: "Michael Turner",
    designation: "Photography Studio Owner",
    rating: "⭐⭐⭐⭐⭐",
    comment:
      "❝ Choosing Kreative Machinez was one of the best decisions for our photography studio. From designing a visually stunning website to executing effective social media campaigns, they've elevated our brand in a highly competitive market. Their creative flair, attention to detail, and commitment to our brand's success are commendable. ❞",
  },
];

const Testimonials = () => {
  let arrows = true;

  if (window.innerWidth <= 645) {
    arrows = false;
  }

  var settings: Settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    className: "max-w-[65rem] mx-auto",
    focusOnSelect: true,
    arrows: arrows,
  };

  return (
    <div className="px-[1rem] sm:px-[3rem] py-[5rem] bg-[#191f22]">
      <h1 className="font-['lilita_one'] text-[3rem] text-center mx-auto mb-[2rem] text-white">Testimonials</h1>

      <Slider {...settings}>
        {reviews.map((data, index) => (
          <div className="px-[1rem]">
            <div className="bg-white rounded-3xl p-[2rem] flex gap-[2rem]">
              <div className="w-[0.4rem] bg-[#191f22] rounded shrink-0"></div>
              <div className="flex flex-col gap-[1rem]">
                <div>
                  <h1 className="text-xl font-bold">{data.name}</h1>
                  <p className="text-default-500 text-sm">{data.designation}</p>
                </div>
                <p>{data.rating}</p>
                <p className="italic">{data.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
