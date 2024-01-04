const Achievement = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 py-[5rem] px-[2rem] md:px-[5rem] lg:px-[8rem] text-[white] text-center gap-[2rem] bg-center">
      <div>
        <h1 className="font-['lilita_one'] text-[2.5rem]">3+</h1>
        <p className="font-['poppins']">Years of Experience</p>
      </div>

      <div>
        <h1 className="font-['lilita_one'] text-[2.5rem]">160 +</h1>
        <p className="font-['poppins']">Portfolio</p>
      </div>

      <div>
        <h1 className="font-['lilita_one'] text-[2.5rem]">500 +</h1>
        <p className="font-['poppins']">Satisfied Customers</p>
      </div>

      <div>
        <h1 className="font-['lilita_one'] text-[2.5rem]">23+</h1>
        <p className="font-['poppins']">Expert Team</p>
      </div>
    </div>
  );
};

export default Achievement;
