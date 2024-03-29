import { Button } from "@nextui-org/react";

const data = [
  {
    title: "Protecting your valuable data is our top priority.",
    thumbnail:
      "https://images.unsplash.com/photo-1604398525509-ce4af98fdb23?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Your account security is our responsibility. Trust us to keep it safe.",
    thumbnail:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Ensuring strong security with multi-factor authentication for all users.",
    thumbnail:
      "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "We're committed to supporting you 24/7, wherever you are.",
    thumbnail:
      "https://images.unsplash.com/photo-1550534791-2677533605ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Protection = () => {
  return (
    <div className="px-[1rem] md:px-[2rem] lg:px-[3rem] py-[5rem] flex flex-col items-center bg-[#052814] gap-[3rem]">
      <p className="text-white font-semibold text-[4rem] max-w-[50rem] text-center leading-[4rem]">
        SecureShield Investment Assurance
      </p>
      <Button color="warning" radius="none">
        Learn more
      </Button>
      <div className="grid sm:grid-cols-2 gap-[3rem]">
        {data.map((d, index) => (
          <div className="flex flex-col items-center gap-[2rem]">
            <div
              className="h-[10rem] w-[10rem] bg-no-repeat bg-cover bg-center rounded-full"
              style={{
                backgroundImage: `url(${d.thumbnail})`,
              }}
            ></div>
            <p className="max-w-[15rem] text-white text-center">{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Protection;
