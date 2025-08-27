"use client";
import { PDFViewer } from "@react-pdf/renderer";
import PdfTemplate from "@/components/shared/PdfTemplate/PdfTemplate";
// import { useRef } from "react";
// import { useGetPrintsQuery, useUpdatePrintDataMutation } from "@/redux/api/printApi";

const pdfData = [
  {
    name: "cchildren",
    cardData: [
      { _id: 1, image: "/cchildren_image1.png" },
      { _id: 2, image: "/cchildren_image2.png" },
      { _id: 3, image: "/cchildren_image3.png" },
      { _id: 4, image: "/cchildren_image4.png" },
      { _id: 5, image: "/cchildren_image5.png" },
      { _id: 6, image: "/cchildren_image6.png" },
      { _id: 7, image: "/cchildren_image7.png" },
      { _id: 8, image: "/cchildren_image8.png" },
      { _id: 9, image: "/cchildren_image9.png" },
      { _id: 10, image: "/cchildren_image10.png" },
      { _id: 11, image: "/cchildren_image11.png" },
      { _id: 12, image: "/cchildren_image12.png" },
      { _id: 13, image: "/cchildren_image13.png" },
      { _id: 14, image: "/cchildren_image14.png" },
      { _id: 15, image: "/cchildren_image15.png" },
      { _id: 16, image: "/cchildren_image16.png" },
      { _id: 17, image: "/cchildren_image17.png" },
      { _id: 18, image: "/cchildren_image18.png" },
    ],
  },
  {
    name: "cadult",
    cardData: [
      { _id: 1, image: "/cadult_image1.png" },
      { _id: 2, image: "/cadult_image2.png" },
      { _id: 3, image: "/cadult_image3.png" },
      { _id: 4, image: "/cadult_image4.png" },
      { _id: 5, image: "/cadult_image5.png" },
      { _id: 6, image: "/cadult_image6.png" },
      { _id: 7, image: "/cadult_image7.png" },
      { _id: 8, image: "/cadult_image8.png" },
      { _id: 9, image: "/cadult_image9.png" },
      { _id: 10, image: "/cadult_image10.png" },
      { _id: 11, image: "/cadult_image11.png" },
      { _id: 12, image: "/cadult_image12.png" },
      { _id: 13, image: "/cadult_image13.png" },
      { _id: 14, image: "/cadult_image14.png" },
      { _id: 15, image: "/cadult_image15.png" },
      { _id: 16, image: "/cadult_image16.png" },
      { _id: 17, image: "/cadult_image17.png" },
      { _id: 18, image: "/" },
    ],
  },
  {
    name: "action",
    cardData: [
      {
        _id: 1,
        image: "/action_card1.png",
      },
      {
        _id: 2,
        image: "/action_card2.png",
      },
      {
        _id: 3,
        image: "/action_card3.png",
      },
      {
        _id: 4,
        image: "/action_card4.png",
      },
      {
        _id: 5,
        image: "/action_card5.png",
      },
      {
        _id: 6,
        image: "/action_card6.png",
      },
      {
        _id: 7,
        image: "/action_card7.png",
      },
      {
        _id: 8,
        image: "/action_card8.png",
      },
      {
        _id: 9,
        image: "/action_card9.png",
      },
      {
        _id: 10,
        image: "/action_card10.png",
      },
      {
        _id: 11,
        image: "/action_card11.png",
      },
      {
        _id: 12,
        image: "/action_card12.png",
      },
      {
        _id: 13,
        image: "/action_card13.png",
      },
      {
        _id: 14,
        image: "/",
      },
    ],
  },
  {
    name: "behavior",
    cardData: [
      {
        _id: 1,
        image: "/behavior_image1.png",
      },
      {
        _id: 2,
        image: "/behavior_image2.png",
      },
      {
        _id: 3,
        image: "/behavior_image3.png",
      },
      {
        _id: 4,
        image: "/behavior_image4.png",
      },
      {
        _id: 5,
        image: "/behavior_image5.png",
      },
      {
        _id: 6,
        image: "/behavior_image6.png",
      },
      {
        _id: 7,
        image: "/behavior_image7.png",
      },
      {
        _id: 8,
        image: "",
      },
    ],
  },
  {
    name: "diversity",
    cardData: [
      {
        _id: 1,
        image: "/diversity_image1.png",
      },
      {
        _id: 2,
        image: "/diversity_image2.png",
      },
      {
        _id: 3,
        image: "/diversity_image3.png",
      },
      {
        _id: 4,
        image: "/diversity_image4.png",
      },
      {
        _id: 5,
        image: "/diversity_image5.png",
      },
      {
        _id: 6,
        image: "/diversity_image6.png",
      },
    ],
  },
  {
    name: "emotion",
    cardData: [
      {
        _id: 1,
        image: "/emotion_image1.png",
      },
      {
        _id: 2,
        image: "/emotion_image2.png",
      },
      {
        _id: 3,
        image: "/emotion_image3.png",
      },
      {
        _id: 4,
        image: "/emotion_image4.png",
      },
      {
        _id: 5,
        image: "/emotion_image5.png",
      },
      {
        _id: 6,
        image: "/emotion_image6.png",
      },
      {
        _id: 7,
        image: "/community_helper_image1.png",
      },
      {
        _id: 8,
        image: "/community_helper_image2.png",
      },
      {
        _id: 9,
        image: "/community_helper_image3.png",
      },
      {
        _id: 10,
        image: "/community_helper_image4.png",
      },
    ],
  },
  {
    name: "prepositions",
    cardData: [
      {
        _id: 1,
        image: "/prepositions_image1.png",
      },
      {
        _id: 2,
        image: "/prepositions_image2.png",
      },
      {
        _id: 3,
        image: "/prepositions_image3.png",
      },
      {
        _id: 4,
        image: "/",
      },
    ],
  },
  {
    name: "potty_training",
    cardData: [
      {
        _id: 1,
        image: "/potty_training_image1.png",
      },
      {
        _id: 2,
        image: "/potty_training_image2.png",
      },
    ],
  },
  {
    name: "sequence",
    cardData: [
      {
        _id: 1,
        image: "/sequence_image1.png",
      },
      {
        _id: 2,
        image: "/sequence_image2.png",
      },
      {
        _id: 3,
        image: "/sequence_image3.png",
      },
      {
        _id: 4,
        image: "/sequence_image4.png",
      },
      {
        _id: 5,
        image: "/sequence_image5.png",
      },
      {
        _id: 6,
        image: "/sequence_image6.png",
      },
      {
        _id: 7,
        image: "/sequence_image7.png",
      },
      {
        _id: 8,
        image: "/sequence_image8.png",
      },
      {
        _id: 9,
        image: "/sequence_image9.png",
      },
      {
        _id: 10,
        image: "/",
      },
    ],
  },
  {
    name: "safety",
    cardData: [
      {
        _id: 1,
        image: "/safety_image1.png",
      },
      {
        _id: 2,
        image: "/safety_image2.png",
      },
    ],
  },
  {
    name: "sensory",
    cardData: [
      {
        _id: 1,
        image: "/sensory_image3.png",
      },
      {
        _id: 2,
        image: "/sensory_image2.png",
      },
    ],
  },
  {
    name: "social_story",
    cardData: [
      { _id: 1, image: "/socialstory_image1.png" },
      { _id: 2, image: "/socialstory_image2.png" },
      { _id: 3, image: "/socialstory_image3.png" },
      { _id: 4, image: "/socialstory_image4.png" },
      { _id: 5, image: "/socialstory_image5.png" },
      { _id: 6, image: "/socialstory_image6.png" },
      { _id: 7, image: "/socialstory_image7.png" },
      { _id: 8, image: "/socialstory_image8.png" },
      { _id: 9, image: "/socialstory_image9.png" },
      { _id: 10, image: "/socialstory_image10.png" },
      { _id: 11, image: "/socialstory_image11.png" },
      { _id: 12, image: "/socialstory_image12.png" },
      { _id: 13, image: "/socialstory_image13.png" },
      { _id: 14, image: "/socialstory_image14.png" },
      { _id: 15, image: "/socialstory_image15.png" },
      { _id: 16, image: "/socialstory_image16.png" },
      { _id: 17, image: "/socialstory_image17.png" },
      { _id: 18, image: "/socialstory_image18.png" },
      { _id: 19, image: "/socialstory_image19.png" },
      { _id: 20, image: "/socialstory_image20.png" },
      { _id: 21, image: "/socialstory_image21.png" },
      { _id: 22, image: "/socialstory_image22.png" },
    ],
  },
];

const PdfPreviewContainer = ({ cardName }: { cardName: string }) => {
  // const toolbarRef = useRef<HTMLDivElement>(null);
 


  const currentDoc = pdfData?.find((d) => d.name === cardName);

 

  if (!currentDoc) return <div>No PDF data found for {cardName}</div>;

  return (
    <div className="h-screen flex flex-col relative">
      {/* <div className="p-2 bg-gray-100 flex justify-between" ref={toolbarRef}>
        <div>Downloads: {downloadCount} | Prints: {printCount} </div>
      </div> */}

      

      <div className="flex-grow">
        <PDFViewer width="100%" height="100%">
          {/* @ts-ignore */}
          <PdfTemplate data={currentDoc.cardData} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default PdfPreviewContainer;
