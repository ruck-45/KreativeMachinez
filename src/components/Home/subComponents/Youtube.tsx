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
        <h1 className="font-['lilita_one'] text-[3rem] leading-[2.7rem]">A Visual Odyssey into Digital Brilliance</h1>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Step into the dynamic world of Kreative Machinez, where innovation and creativity converge to sculpt
          exceptional digital experiences. Our video introduction captures the essence of who we are and what sets us
          apart. Witness our team's passion, diverse expertise, and commitment to excellence unfold on screen. As
          architects of success in the digital realm, we invite you to embark on a journey where ideas transform into
          impactful realities. Press play, explore our vision, and discover how Kreative Machinez is redefining the
          landscape of digital excellence. Your story begins here, where creativity knows no bounds, and innovation
          knows no limits.
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
