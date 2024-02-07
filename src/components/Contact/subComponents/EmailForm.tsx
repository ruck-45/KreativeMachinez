// Dependencies
import { Input, Textarea, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useRef, useState } from "react";
import toast, { Toaster, ToastPosition } from "react-hot-toast";
import axios from "axios";
import { send } from "process";

const emailRe: RegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

let apiUrl = process.env.REACT_APP_API_URL;

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const [emailValidity, setEmailValidity] = useState<boolean>(false);

  const [emailState, setEmailState] = useState<number>(-1);
  const [userNameState, setUserNameState] = useState<number>(-1);
  const [state, setState] = useState(false);

  const [input, setInput] = useState({
    name: "",
    message: "",
    subject: "",
    email: "",
  });

  const handleUserInput = (event: any) => {
    const { name, value } = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const checkEmail = (event: any) => {
    input.email = event.currentTarget.value;
    setEmailState(event.currentTarget.value.length);

    const validity = input.email.match(emailRe);
    if (validity) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };

  const sendEmail = async (event: any) => {
    event.preventDefault();

    setState(true);
    if (input.name.length < 5) {
      toast.error("please Provide your name");
      setState(false);
      return;
    }

    if (!input.subject) {
      toast.error("please Provide your Subject");
      setState(false);
      return;
    }

    if (!input.message) {
      toast.error("please fill the message section");
      setState(false);
      return;
    }

    try {
      setState(true);
      const response: any = await axios.post(`${apiUrl}/contact/form`, input);
      console.log(response);

      if (response?.data?.success) {
        toast.success("Email sent Successfully");
      }
    } catch (error) {
      toast.error("failed to send Email 404");
      setState(false);
    }

    setInput({
      name: "",
      message: "",
      subject: "",
      email: "",
    });
  };
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
      <form className="flex flex-col gap-[1rem] items-center grow" ref={form} onSubmit={sendEmail}>
        <div className="flex gap-[1rem] w-full">
          <Input
            type="text"
            label="Name"
            name="name"
            id="name"
            value={input.name}
            onChange={handleUserInput}
            errorMessage={userNameState === 0 ? "Please enter a valid Name" : ""}
            isInvalid={userNameState === 0}
          />
          <Input
            type="email"
            label="Email"
            name="email"
            onChange={checkEmail}
            isInvalid={emailValidity}
            errorMessage={emailValidity ? "Please enter a valid Email" : ""}
          />
        </div>
        <Input
          type="text"
          label="Subject"
          name="subject"
          onChange={handleUserInput}
          id="subject"
          value={input.subject}
        />
        <Textarea label="Message" name="message" onChange={handleUserInput} id="message" value={input.message} />
        <Button
          color="warning"
          variant="shadow"
          className="w-[10rem]"
          endContent={<IoSend className="mt-[0.2rem]" />}
          type="submit"
          isLoading={state}
        >
          Send Message
        </Button>
        <Toaster />
      </form>
    </div>
  );
};

export default EmailForm;
