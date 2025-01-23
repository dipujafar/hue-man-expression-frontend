import React from "react";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <h1 className="text-main-text-color md:text-6xl text-3xl text-center">
      {title}
    </h1>
  );
};

export default PageTitle;
