import Container from "@/components/shared/Container";

const DescriptionSection = () => {
  return (
    <Container>
      <h4 className="lg:text-4xl md:text-2xl text-xl text-[#C37E19] font-merienda text-center lg:mb-14 mb-7">
        Welcome to the Hue-man Expressions App
      </h4>
      <div className="space-y-4 lg:space-y-6">
        <p className="lg:text-2xl font-lucida text-[#482F10]">
          The Hue-man Expressions App is a groundbreaking digital platform
          designed to bridge the gap in representation within educational and
          therapeutic resources. This app provides culturally inclusive,
          high-quality visuals and tools that celebrate diversity while
          supporting effective communication, learning, and engagement for
          individuals with unique needs.
        </p>
        <p className="lg:text-2xl font-lucida text-[#482F10]">
          Developed with a deep understanding of the importance of inclusively,
          Hue-man Expressions offers professionals, families, and educators’
          access to visuals that reflect the experiences of Black and Brown
          children and adults—fostering connection, understanding, and equity in
          therapy and education.
        </p>
        <p className="lg:text-2xl font-lucida text-[#482F10]">
          With Hue-man Expressions, representation meets functionality,
          empowering you to create meaningful learning moments through tools
          that truly reflect the world around us. By subscribing to Hue-man
          Expressions, you’re not only gaining access to transformative
          resources but also joining a mission-driven community dedicated to
          inclusively and equity.
        </p>
      </div>
    </Container>
  );
};

export default DescriptionSection;
