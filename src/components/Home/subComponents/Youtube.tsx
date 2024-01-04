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
        <h1 className="font-['lilita_one'] text-[3rem] leading-[2.7rem]">Watch Us In Action</h1>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Explore the dynamic world of Kreative Machinez through our promotional video. Immerse yourself in the essence
          of our innovative digital marketing solutions, where creativity meets strategy. Join us on a visual journey
          showcasing how we elevate brands, boost online presence, and drive success. Watch now and envision the
          possibilities for your brand's digital future!
        </p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Press play and step into the extraordinary realm of Kreative Machinez!
        </p>
      </div>
      <iframe
        width={width}
        height={height}
        src="https://www.youtube.com/embed/AT6oSIDbGkw"
        title="KreativeMachinez Promo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-3xl"
      />
    </div>
  );
};

export default Youtube;
