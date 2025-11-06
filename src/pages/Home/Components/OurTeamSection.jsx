import React from "react";

const teamMembers = [
  {
    name: "Shri Yogesh Mandhani",
    title: "President",
    company: "M/s SMW Ispat (P) Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/Ygesh-Mandhani-Ji-Image.jpg",
  },
  {
    name: "Shri Gopal Gupta",
    title: "President Emeritus",
    company: "M/s Laxcon Steel Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/Gopal-sir-photo-nc.jpg",
  },
  {
    name: "Shri Devendra Kumar Agrawal",
    title: "Immediate Past President",
    company: "M/s Kashi Vishwanath Steels Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/g2.png",
  },
  {
    name: "Shri Ashok Garg",
    title: "Sr. Vice President (Hon. Treasurer)",
    company: "M/s Reby Castings Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/ashok-garg.png",
  },
  {
    name: "Shri Kamal Aggarwal",
    title: "Hon. Secretary General",
    company: "M/s NIFS Steels",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/NIFS-Steels-Kamal-Sir-photo.jpg",
  },
  {
    name: "Shri Jitendra Singh",
    title: "Patron",
    company: "M/s ISC Machines Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/jitendra.jpg",
  },
  {
    name: "Shri Sandeep Jain",
    title: "Patron",
    company: "M/s Trishala Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/sandeep.jpg",
  },
  {
    name: "Shri Ashok Surana",
    title: "Patron",
    company: "M/s Shobha Enterprises",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/team/surana.jpg",
  },
];

export default function OurTeamSection() {
  return (
    <section className="our-team-section">
      <div className="our-team-container">
        <p className="our-team-subtitle">NATIONAL MEMBER</p>
        <h2 className="our-team-title">Our Team</h2>

        <div className="our-team-grid">
          {teamMembers.map((member, index) => (
            <div className="our-team-card" key={index}>
              <div className="our-team-img-wrapper">
                <img src={member.img} alt={member.name} className="our-team-img" />
              </div>
              <h4 className="our-team-name">{member.name}</h4>
              <p className="our-team-role">{member.title}</p>
              <p className="our-team-company">{member.company}</p>
            </div>
          ))}
        </div>

        <button className="our-team-btn"><a href="/national-member" className="text-light">Read More</a></button>
      </div>
    </section>
  );
}
