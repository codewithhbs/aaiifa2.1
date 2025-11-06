import React from "react";

const PastVideos = () => {
  const events = [
    {
      year: "2024",
      title: "AIIFA SteelEx 2024 Highlights",
      videoUrl: "https://www.youtube.com/embed/MSQgsZfdv1k?si=AkQEYeBon6UjRIrz",
    },
    {
      year: "2023",
      title: "AIIFA 2023 Event Recap",
      videoUrl: "https://www.youtube.com/embed/7fjhxlHZNp8?si=-GVWAsis-DK9xmDb",
    },
    {
      year: "2022",
      title: "AIIFA 2022 Conference Moments",
      videoUrl: "https://www.youtube.com/embed/lYW2bN0V9Ug?si=MSOnj-8ltWRXminU",
    },
  ];

  return (
    <>
      
      <section className="past-events-section">
        <div className="past-events-container">
          <div className="past-events-header">
            <p className="past-events-subtitle">EVENT VIDEO</p>
            <h1 className="past-events-main-title">AIIFA</h1>
          </div>

          <div className="past-events-grid">
            {events.map((event, index) => (
              <div className="past-event-card" key={index}>
                <div className="past-event-video">
                  <iframe
                    src={event.videoUrl}
                    title={event.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="past-event-title-bar">
                  <h3>{event.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PastVideos;