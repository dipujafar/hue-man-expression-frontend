// components/PdfTemplate.tsx
import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
} from "@react-pdf/renderer";

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
  <View style={styles.card}>
    <Image style={styles.image} src={imageUrl} />
    {/* <Text style={styles.title}>{title}</Text> */}
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
