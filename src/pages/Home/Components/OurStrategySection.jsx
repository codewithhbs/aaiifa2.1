import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OurStrategySection() {
  const strategyData = [
    {
      id: 1,
      title: "Vision",
      text: "To advance the future of machine reliability, where machines last their designed life and industries run with no unplanned breakdowns.",
    },
    {
      id: 2,
      title: "Mission",
      text: "To predict and deliver machine diagnostics and recommendations well in advance in a way that no machine experiences unexpected breakdown and industries can run at their full capacity.",
      active: true,
    },
    {
      id: 3,
      title: "Our Strategy",
      text: "We design, manufacture, and distribute a wide range of top-quality steel products for construction, infrastructure, energy, and industrial applications.",
    },
  ];

  return (
    <section className="our-strategy-section py-5">
      <div className="container text-center">
        <p className="our-strategy-subtitle mb-2">WHAT WE DO</p>
        <h2 className="our-strategy-title mb-5">Know about our strategy</h2>

        <div className="row justify-content-center">
          {strategyData.map((item, index) => (
            <div className="col-md-4 col-sm-6 mb-4" key={item.id}>
              <div 
                className={`our-strategy-item ${
                  index < strategyData.length - 1 ? "has-connector" : ""
                }`}
              >
                <div
                  className={`our-strategy-circle ${
                    item.active ? "active" : ""
                  }`}
                >
                  {item.id}
                </div>
                <h5 className="our-strategy-heading">{item.title}</h5>
                <p className="our-strategy-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}