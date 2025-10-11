import React from "react";
import BeforeAfterSection from "../components/BeforeAfterSection";
import "./BeforeAfterSlider.css";
import Footer from "../components/footer";

const BeforeAfterSlider = () => {
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
      beforeImg:
        "https://res.cloudinary.com/djhpllutc/image/upload/v1741320332/samples/man-portrait.jpg",
      afterImg:
        "https://res.cloudinary.com/djhpllutc/image/upload/v1741320332/samples/outdoor-woman.jpg",
    },
  ];

  return (
    <div className="ba-page">
      <div className="ba-content">
        <h1 className="ba-page-title">Before & After Transformations</h1>

        <div className="ba-inner">
          {sections.map((sec, idx) => (
            <BeforeAfterSection
              key={idx}
              title={sec.title}
              beforeImg={sec.beforeImg}
              afterImg={sec.afterImg}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      
    </div>
  );
};

export default BeforeAfterSlider;
