"use client";
// components/PdfTemplate.tsx
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

const customStyles = (imageUrl: string) => {
  switch (imageUrl) {
    case "/cadult_image1.png":
      return { height: "82%", width: "78%" };
    case "/potty_training_image1.png":
      return { height: "90%", width: "92%" };
    case "/potty_training_image2.png":
      return { height: "90%", width: "92%" };
    default:
      return { height: "100%", width: "100%" };
  }
};

type CardProps = {
  title?: string;
  imageUrl: string;
};

const styles = StyleSheet.create({
  page: {},
  card: {
    // padding: 10,
    // border: "1px solid #ccc",
    alignItems: "center",
  },
  image: {
    height: "100%",
    width: "100%",
    //  objectFit: "cover",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

const Card = ({ title, imageUrl }: CardProps) => (
  <View style={styles?.card}>
    <Image style={customStyles(imageUrl)} src={imageUrl} />

    {/* <Text style={styles.title}>{imageUrl}</Text> */}
  </View>
);

type TProps = {
  _id: number;
  image: string;
};

const PdfTemplate = ({ data }: { data: TProps[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {data?.map((data) => (
        <Card key={data?._id} imageUrl={data?.image} />
      ))}
    </Page>
  </Document>
);

export default PdfTemplate;
