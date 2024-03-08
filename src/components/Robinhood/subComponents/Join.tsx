import { Button } from "@nextui-org/react";

const Join = () => {
  return (
    <div
      className="h-[43rem] bg-no-repeat bg-cover bg-center p-[5rem] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1535350356005-fd52b3b524fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      <p className="max-w-[50rem] text-[3.5rem] font-bold leading-[5rem] text-center">
        Join A New <span className="text-[#F5A524] bg-black">&nbsp;Generation&nbsp;</span> Of &nbsp;
        <span className="text-[#F5A524] bg-black">&nbsp;Investors&nbsp;</span> . InvestNow
      </p>
    </div>
  );
};

export default Join;
