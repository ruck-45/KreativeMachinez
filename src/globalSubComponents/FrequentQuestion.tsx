// Dependencies
import { FaArrowCircleRight } from "react-icons/fa";

// Local Files
import questions from "../globalAssets/frequetQuestions.json";
import QuestionAccordion from "./QuestionAccordion";
import ButtonElement from "../globalElements/ButtonElement";

const FrequentQuestion = () => {
  return (
    <div className="flex flex-col md:flex-row px-[3rem] lg:px-[5rem] py-[5rem] gap-[2rem] md:gap-[0rem] bg-[#e9ecef]">
      <div className="md:w-[50%] flex flex-col gap-[1rem]">
        <h1 className="font-['DM_Serif_Display'] text-[2rem] font-bold">Frequently Asked Questions</h1>
        <p>
          Discover quick answers to common questions about our digital marketing services in our FAQ section. For
          specific queries or additional assistance, our support team is ready to help. We're dedicated to ensuring you
          have the information you need for a seamless experience with us.
        </p>

        <ul className="list-disc list-inside text-justify">
          <li>How can I get started and establish my online presence?</li>
          <li>What strategies is suggested for beginners entering the digital marketing space?</li>
          <li>What are the costs associated with various digital marketing packages?</li>
        </ul>
        <ButtonElement
          to="../Pricing"
          variant="shadow"
          color="warning"
          label="Learn More"
          radius="full"
          endContent={<FaArrowCircleRight className="mt-[0.2rem] ml-[1rem]" />}
          className="w-[9rem] p-0 gap-0 mt-[1rem]"
        />
      </div>

      <div className="md:w-[50%] md:ps-[2rem]">
        <QuestionAccordion className="dark" questions={questions} varient="splitted" />
      </div>
    </div>
  );
};

export default FrequentQuestion;
