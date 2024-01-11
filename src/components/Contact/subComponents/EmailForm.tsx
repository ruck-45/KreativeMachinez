// Dependencies
import { Input, Textarea, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";

const EmailForm = () => {
  return (
    <div className="bg-black px-[3rem] md:px-[5rem] py-[5rem] dark flex flex-col lg:flex-row gap-[2rem] lg:gap-[5rem]">
      <div className="text-white lg:w-[40%] flex flex-col gap-[1rem] lg:order-last">
        <h1 className="font-['lilita_one'] text-[3rem] ">Email Us</h1>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Whether you're curious about our services, or looking for personalized solutions for your brand, the Kreative
          Machinez team is here for you. Your privacy is our priority, and we ensure the confidentiality of your
          information. Rest assured, we don't share your details with any third party. Our team of professionals
          understands your needs, offering expert guidance to propel your digital journey forward. Drop us an email, and
          we will get back to you at the earliest.
        </p>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          We'll never share your email with anyone else.
        </p>
      </div>
      <div className="flex flex-col gap-[1rem] items-center grow">
        <div className="flex gap-[1rem] w-full">
          <Input type="text" label="Name" />
          <Input type="email" label="Email" />
        </div>
        <Input type="text" label="Subject" />
        <Textarea label="Message" />
        <Button color="warning" variant="shadow" className="w-[10rem]" endContent={<IoSend className="mt-[0.2rem]" />}>
          Send Message
        </Button>
      </div>
    </div>
  );
};

export default EmailForm;
