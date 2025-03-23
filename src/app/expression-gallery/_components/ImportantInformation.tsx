import Container from "@/components/shared/Container";
import React from "react";

const information = [
  {
    _id: 1,
    description:
      "Processing Time: Please allow up to 24–48 hours for processing and account creation after purchase.",
  },
  {
    _id: 2,
    description:
      "Secured Portal Access: All files are hosted securely. You will not be able to download files; instead, you can view and print them directly from the portal.",
  },
  {
    _id: 3,
    description: "Print Limits: Each deck has a specific print limit of 10.",
  },
  {
    _id: 4,
    description: "No Refunds: Purchases are non-refundable.",
  },
];

const ImportantInformation = () => {
  return (
    <Container className="lg:space-y-10 space-y-6">
      <div>
        <h1 className="xl:text-5xl md:text-2xl text-xl font-merienda text-center text-[#F59200] mb-4">
          Important Information
        </h1>
        <hr className="border-black/50" />
      </div>
      <div className="lg:space-y-5 space-y-3">
        {information.map((item) => (
          <div key={item._id} className="flex gap-x-3">
            <p> {item?._id}.</p>
            <p className="md:text-xl  text-lg ">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ImportantInformation;
