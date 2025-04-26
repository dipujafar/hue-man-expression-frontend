"use client";
import PdfPreviewContainer from "./_components/PdfPreviewContainer";


const PdfPreviewPage = async ({params}: any) => {
    const cardName = (await params)?.cardName
  return (
    <>
        <PdfPreviewContainer cardName={cardName}></PdfPreviewContainer>
    </>
  );
};

export default PdfPreviewPage;
