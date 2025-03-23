import Container from "@/components/shared/Container";
import { terms } from "@/utils";
import { Dot } from "lucide-react";

const TermsConditions = () => {
  return (
    <Container className="flex flex-col justify-center items-center">
      <div className="space-y-5 font-lucida">
        {terms?.map((term) => (
          <div
            key={term?.id}
            className="bg-primary-white px-7 py-6 rounded-lg space-y-3"
          >
            <h2 className="md:text-4xl text-2xl text-[#684B3C]">
              → {term?.question}
            </h2>
            <ul className="space-y-1">
              {term?.subtitle?.map((answer, index) => (
                <li key={index} className="md:text-xl text-lg">
                  {answer}
                </li>
              ))}
            </ul>
            <ul className="space-y-1">
              {term?.answer?.map((answer, index) => (
                <li
                  key={index}
                  className="flex xl:items-center md:text-xl text-lg gap-x-1"
                >
                  <Dot size={20} className="size-5"></Dot>
                  {answer}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default TermsConditions;
