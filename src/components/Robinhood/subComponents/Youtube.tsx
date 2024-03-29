const Youtube = () => {
  let width = 560;
  let height = 315;

  if (window.innerWidth <= 620) {
    width = 350;
    height = 197;
  }

  return (
    <div className="px-[3rem] md:px-[5rem] py-[5rem] flex flex-col lg:flex-row lg:justify-evenly items-center gap-[2rem] lg:gap-[5rem] bg-white">
      <div className="lg:w-[40%] flex flex-col gap-[1.5rem] lg:order-last">
        <h1 className="font-['Roboto'] text-[3rem] leading-[3rem] font-semibold">
          Embark on an Epic Investment Odyssey
        </h1>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Embark on an epic journey into the realm of InvestNow, where innovation meets opportunity, and financial
          excellence knows no bounds. Our introductory video serves as a portal into the heart of our organization,
          where passion, expertise, and a relentless pursuit of success converge to redefine the investment experience.
          Witness firsthand the dedication of our diverse team as they navigate the ever-evolving landscape of finance
          with precision and ingenuity. As pioneers in our field, we invite you to join us on this exhilarating voyage
          and discover how InvestNow is revolutionizing the world of investment. Press play and embark on your
          extraordinary investment journey today.
        </p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Press play and step into the extraordinary realm of InvestNow
        </p>
      </div>
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/ZcJENkBh-lY"
        title="KreativeMachinez Promo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-3xl"
      />
    </div>
  );
};

export default Youtube;
