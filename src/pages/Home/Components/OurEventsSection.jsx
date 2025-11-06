import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OurEventsSection() {
  const events = [
    {
      year: "2022",
      title: "Event AIIFA",
      location: "SHANGRI-LA'S NEW DELHI",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event1.jpg",
      link: "/past-event-2022",
    },
    {
      year: "2019",
      title: "Event AIIFA",
      location: "SHANGRI-LA’S EROS HOTEL, NEW DELHI",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event2.png",
      link: "/past-event-2019",
    },
    {
      year: "2018",
      title: "Event AIIFA",
      location: "HOTEL E-MERIDIEN NEW DELHI OCT 22, 2018",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event3.jpg",      
      link: "/past-event-2018",
    },
    {
      year: "2017",
      title: "Event AIIFA",
      location: "SHANGRI-LA’S EROS HOTEL, NEW DELHI",
      img: "http://hoverbusinessservices.com/cloud/aiifa/media/events/event4.jpg",
      link: "/past-event-2017",
    },
  ];

  return (
    <section className="our-events-section pt-5">
      <div className="container text-center">
        <p className="our-events-subtitle mb-2">OUR SUCCESS</p>
        <h2 className="our-events-title mb-5">Past Events</h2>

        <div className="row justify-content-center">
          {events.map((event, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="our-events-card">
                <div className="our-events-img-wrapper">
                  <img
                    src={event.img}
                    alt={`${event.year} ${event.title}`}
                    className="our-events-img"
                  />
                </div>
                <div className="our-events-content">
                  <h5 className="our-events-heading">
                    {event.year} {event.title}
                  </h5>
                  <p className="our-events-location">{event.location}</p>
                  <a href={event.link} className="our-events-link">
                    Read More <span>→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
