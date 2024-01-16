// Dependencies
import { Accordion, AccordionItem } from "@nextui-org/react";

// Local Files
import { questionPattern } from "../utils/types";

type QuestionAccordionProps = {
  questions: questionPattern;
  className?: string;
  varient: "light" | "shadow" | "bordered" | "splitted" | undefined;
};

const QuestionAccordion = (props: QuestionAccordionProps) => {
  const className = "font-['poppins'] " + props.className;

  return (
    <Accordion className={className} isCompact variant={props.varient}>
      {props.questions.map((queries, index) => (
        <AccordionItem
          key={index}
          aria-label={`Question ${index + 1}`}
          title={queries.question}
          className="py-[1rem] text-default-500 text-sm"
        >
          <div className="flex flex-col gap-[2rem]">
            {queries.answer.map((ans, index) => {
              if (ans.bullet) {
                return (
                  <div className="flex flex-col gap-[1rem]" key={index}>
                    <p>{ans.data.main}</p>
                    <ul className="px-[1rem] flex flex-col gap-[0.5rem]">
                      {ans.data.points.map((point, index) => (
                        <li key={index} className="list-disc list-inside text-justify">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              } else {
                return <p key={index}>{ans.data.main}</p>;
              }
            })}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default QuestionAccordion;
