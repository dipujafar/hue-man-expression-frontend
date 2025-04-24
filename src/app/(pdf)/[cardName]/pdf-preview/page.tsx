"use client";
import Container from "@/components/shared/Container";
import { PDFViewer } from "@react-pdf/renderer";
import PdfTemplate from "@/components/shared/PdfTemplate/PdfTemplate";

const PdfPreviewPage = () => {
  return (
    <div className="h-screen">
      <PDFViewer width="100%" height="100%">
        <PdfTemplate />
      </PDFViewer>
    </div>
  );
};

export default PdfPreviewPage;
