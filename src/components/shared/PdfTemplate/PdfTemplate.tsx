// components/PdfTemplate.tsx
import {
    Document,
    Page,
    Text,
    View,
    Image,
    StyleSheet,
  } from '@react-pdf/renderer';
  
  type CardProps = {
    title: string;
    imageUrl: string;
  };
  
  const styles = StyleSheet.create({
    page: {
     
    },
    card: {
    
      padding: 10,
      border: '1px solid #ccc',
      alignItems: 'center',
    },
    image: {
     height: "100%",
     width: "100%",
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
  const Card = ({ title, imageUrl }: CardProps) => (
    <View style={styles.card}>
      <Image style={styles.image} src={imageUrl} />
      {/* <Text style={styles.title}>{title}</Text> */}
    </View>
  );
  
  const PdfTemplate = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Card title="Writing" imageUrl="/action_card1.png" />
        <Card title="Sleeping" imageUrl="/action_card2.png" />
        <Card title="Sleeping" imageUrl="/action_card3.png" />
        <Card title="Sleeping" imageUrl="/action_card4.png" />
        <Card title="Sleeping" imageUrl="/action_card5.png" />
        <Card title="Sleeping" imageUrl="/action_card6.png" />
        <Card title="Sleeping" imageUrl="/action_card7.png" />
        <Card title="Sleeping" imageUrl="/action_card8.png" />
        <Card title="Sleeping" imageUrl="/action_card9.png" />
        <Card title="Sleeping" imageUrl="/action_card10.png" />
        <Card title="Sleeping" imageUrl="/action_card11.png" />
        <Card title="Sleeping" imageUrl="/action_card12.png" />
        <Card title="Sleeping" imageUrl="/action_card13.png" />
       
      </Page>
    </Document>
  );
  
  export default PdfTemplate;
  