// Dependencies
import { Input, Textarea, Button } from "@nextui-org/react";
import { IoSend } from "react-icons/io5";
import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster, ToastPosition } from "react-hot-toast";

const emailRe: RegExp = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const toastSetting: {
  position: ToastPosition;
} = { position: "top-center" };

const formNotFill = (): string => toast.error("Please Fill The Form Correctly", toastSetting);
const emailSent = (): string => toast.success("Email Sent", toastSetting);
const emailNotSent = (): string => toast.error("Email Not Sent", toastSetting);

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const email = useRef<string>("");

  const [emailValidity, setEmailValidity] = useState<boolean>(false);

  const [emailState, setEmailState] = useState<number>(-1);
  const [userNameState, setUserNameState] = useState<number>(-1);

 const sendEmail = async () => {
   try {
     if (userNameState > 0 && emailState > 0) {
      await emailjs.sendForm(
         `${process.env.REACT_APP_SERVICE_ID}`,
         `${process.env.REACT_APP_TEMPLATE_ID}`,
         form.current!,
         `${process.env.REACT_APP_PUBLIC_KEY}`
       );

       emailSent();
     } else {
       formNotFill();
     }
   } catch (error) {
     emailNotSent();
   }
 };


  const checkEmail = (event: FormEvent<HTMLInputElement>) => {
    email.current = event.currentTarget.value;
    setEmailState(event.currentTarget.value.length);

    const validity = email.current.match(emailRe);

    if (validity) {
      setEmailValidity(false);
    } else {
      setEmailValidity(true);
    }
  };

  return (
    <div className="bg-black px-[3rem] md:px-[5rem] py-[5rem] dark flex flex-col lg:flex-row gap-[2rem] lg:gap-[5rem]">
      <div className="text-white lg:w-[40%] flex flex-col gap-[1rem] lg:order-last">
        <h1 className="font-['lilita_one'] text-[3rem] ">Email Us</h1>
        <p className="text-justify text-default-500 text-[0.95rem] sm:text-md">
          Have questions or need assistance? Feel free to reach out to our dedicated team via email. Whether you're
          looking for information on our services, need support, or have specific inquiries, we're here to help. Drop us
          a mail, and we'll get back to you promptly. Your digital success starts with us , let's connect!
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
            onChange={(event) => setUserNameState(event.currentTarget.value.length)}
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
        <Input type="text" label="Subject" name="subject" />
        <Textarea label="Message" />
      </form>
      <Button
        color="warning"
        variant="shadow"
        className="w-[10rem]"
        endContent={<IoSend className="mt-[0.2rem]" />}
        onClick={sendEmail}
      >
        Send Message
      </Button>
      <Toaster />
    </div>
  );
};

export default EmailForm;
