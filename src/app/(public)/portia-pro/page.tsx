import Container from "@/components/shared/Container";
import { PortiaDetails } from "./_components/PortiaDetails";
import { PortiaForm } from "./_components/PortiaForm";


export default function PortiaPro() {
  return (
    <Container className="flex gap-x-4">
      <PortiaDetails />
      <PortiaForm />
    </Container>
  );
}
