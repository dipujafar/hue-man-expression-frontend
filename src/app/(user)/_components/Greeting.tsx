"use client";

import useGreeting from "@/app/hooks/useGreeting";

const Greeting = () => {
  const greeting = useGreeting();
  return <p className="font-medium">{greeting}</p>;
};

export default Greeting;
