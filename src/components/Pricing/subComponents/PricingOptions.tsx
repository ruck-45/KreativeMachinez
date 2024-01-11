// Dependencies
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const serviceAvail = [
  {
    service: "Complementary Website",
    basic: (
      <Chip variant="flat" color="danger">
        0
      </Chip>
    ),
    standard: (
      <Chip variant="flat" color="warning">
        2
      </Chip>
    ),
    premium: (
      <Chip variant="flat" color="success">
        3
      </Chip>
    ),
  },
  {
    service: "Website Design & Development",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    service: "Search Engine Optimization (SEO)",
    basic: true,
    standard: true,
    premium: true,
  },
  {
    service: "Social Media Marketing",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    service: "Web Analytics",
    basic: false,
    standard: true,
    premium: true,
  },
  {
    service: "Graphic Design",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    service: "Email Marketing",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    service: "Priority Support",
    basic: (
      <Chip variant="flat" color="danger">
        None
      </Chip>
    ),
    standard: (
      <Chip color="warning" variant="flat">
        Intermediate
      </Chip>
    ),
    premium: (
      <Chip color="success" variant="flat">
        Immidiate
      </Chip>
    ),
  },
  {
    service: "Monthly Strategy Consultation",
    basic: false,
    standard: false,
    premium: true,
  },
  {
    service: "Exclusive Access to New Features",
    basic: false,
    standard: false,
    premium: true,
  },
];

const PricingOptions = () => {
  return (
    <div className="bg-[#e9ecef] md:px-[5rem] py-[5rem] flex flex-col lg:flex-row gap-[2.5rem] lg:gap-[5rem]">
      <div className="flex items-center justify-center">
        <h1 className="font-['lilita_one'] text-[3rem] text-center">
          Our <span className="text-[#F5A524]">packages</span>
        </h1>
      </div>

      <Table aria-label="Example static collection table" className="dark">
        <TableHeader>
          <TableColumn className="text-center font-['DM_Serif_Display'] text-lg sm:text-[1.5rem] py-[1.5rem] text-default-800">
            Services
          </TableColumn>
          <TableColumn className="py-[1.5rem]">
            <div className="flex flex-col text-center sm:gap-[0.25rem]">
              <h1 className="font-['DM_Serif_Display'] text-[#F31260] text-lg sm:text-[1.5rem]">Basic</h1>
              <p>$79/month</p>
            </div>
          </TableColumn>
          <TableColumn className="py-[1.5rem]">
            <div className="flex flex-col text-center sm:gap-[0.25rem]">
              <h1 className="font-['DM_Serif_Display'] text-[#F5A524] text-lg sm:text-[1.5rem]">Standard</h1>
              <p>$99/month</p>
            </div>
          </TableColumn>
          <TableColumn className="py-[1.5rem]">
            <div className="flex flex-col text-center sm:gap-[0.25rem]">
              <h1 className="font-['DM_Serif_Display'] text-[#17C964] text-lg sm:text-[1.5rem]">Premium</h1>
              <p>$199/month</p>
            </div>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {serviceAvail.map((data, index) => {
            if (index === 0 || index === 7) {
              return (
                <TableRow key={index} className="font-['poppins']">
                  <TableCell className="text-center text-xs sm:text-sm text-white">{data.service}</TableCell>
                  <TableCell className="text-center">{data.basic}</TableCell>
                  <TableCell className="text-center">{data.standard}</TableCell>
                  <TableCell className="text-center">{data.premium}</TableCell>
                </TableRow>
              );
            } else {
              return (
                <TableRow key={index} className="font-['poppins']">
                  <TableCell className="text-center text-xs sm:text-sm text-white">
                    {data.service}
                  </TableCell>
                  <TableCell className="text-center">
                    {data.basic ? (
                      <div className="flex justify-center">
                        <TiTick className="text-[#17C964] text-lg sm:text-[1.5rem]" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <ImCross className="text-[#F31260]" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {data.standard ? (
                      <div className="flex justify-center">
                        <TiTick className="text-[#17C964] text-lg sm:text-[1.5rem]" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <ImCross className="text-[#F31260]" />
                      </div>
                    )}
                  </TableCell>
                  <TableCell className="text-center">
                    {data.premium ? (
                      <div className="flex justify-center">
                        <TiTick className="text-[#17C964] text-lg sm:text-[1.5rem]" />
                      </div>
                    ) : (
                      <div className="flex justify-center">
                        <ImCross className="text-[#F31260]" />
                      </div>
                    )}
                  </TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default PricingOptions;
