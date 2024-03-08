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
          Embark on a Financial Brilliance
        </h1>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Venture into the dynamic world of OpenAI Investment, where financial innovation and expertise converge to
          shape exceptional investment experiences. Our video introduction encapsulates the essence of who we are and
          what sets us apart in the investment landscape. Witness our team's passion, diverse financial expertise, and
          commitment to excellence unfold on screen. As architects of success in the financial realm, we invite you to
          press play and explore how OpenAI Investment is redefining the landscape of financial brilliance. Your
          investment journey begins here, where financial creativity knows no bounds, and innovation knows no limits.
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
