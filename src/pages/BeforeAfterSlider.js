import React from "react";
import BeforeAfterSection from "../components/BeforeAfterSection";
import "./BeforeAfterSlider.css";

const BeforeAfterSlider = () => {
  // Example data, you’ll replace these URLs
  const sections = [
    {
      title: "Living Room",
      beforeImg:
        "https://res.cloudinary.com/djhpllutc/image/upload/v1758115612/91407cc0-a238-4b80-b7ac-d8892384438f_fyoymd.jpg",
      afterImg:
        "https://res.cloudinary.com/djhpllutc/image/upload/v1758115612/84660b08-d861-4756-a27e-e9d442a7de2f_smwiql.jpg",
    },
    {
      title: "Kitchen",
      beforeImg: "https://res.cloudinary.com/djhpllutc/image/upload/v1741320332/samples/man-portrait.jpg",
      afterImg: "https://res.cloudinary.com/djhpllutc/image/upload/v1741320332/samples/outdoor-woman.jpg",
    },
    // add more sections as needed
  ];

  return (
    <div className="ba-page">
      <h1 className="ba-page-title">Before & After Transformations</h1>
      {sections.map((sec, idx) => (
        <BeforeAfterSection
          key={idx}
          title={sec.title}
          beforeImg={sec.beforeImg}
          afterImg={sec.afterImg}
        />
      ))}
    </div>
  );
};

export default BeforeAfterSlider;
