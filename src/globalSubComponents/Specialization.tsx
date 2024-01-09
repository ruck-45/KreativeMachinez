// Dependencies
import { Chip } from "@nextui-org/react";

const serviceArea = [
  "Photography",
  "Education",
  "Real Estate",
  "Medical",
  "Automobile",
  "Insurance",
  "Technology",
  "Health",
  "Hotel & Travel",
  "Ecommerce",
];

const Specialization = () => {
  return (
    <div className="bg-[black] flex flex-col items-center text-white px-[2rem] py-[5rem] gap-[3rem]">
      <div className="text-center">
        <h1 className="font-['lilita_one'] text-[3rem]">Our Area Of Service</h1>
        <p className="text-default-400 max-w-[35rem]">
          At Kreative Machinez, we're passionate about crafting innovative brand solutions. We seamlessly blend
          technology and design with cutting-edge visual storytelling, giving our clients a competitive edge in the
          digital realm. This approach has empowered us to establish partnerships across diverse industries.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2rem]">
        {serviceArea.map((data, index) => {
          let baseClass = "h-[5rem] rounded-lg hover:scale-110 cursor-pointer duration-200";

          if (index === 9) {
            baseClass += " md:mx-auto md:col-span-3 lg:col-span-1 lg:mx-0";
          }

          return (
            <Chip
              key={index}
              classNames={{
                base: baseClass,
                content: "w-[8rem] font-semibold text-center",
              }}
              size="lg"
              color="warning"
              variant="shadow"
            >
              {data}
            </Chip>
          );
        })}
      </div>
    </div>
  );
};

export default Specialization;
