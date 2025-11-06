import React, { useState } from "react";
import { Search } from "lucide-react";
import './style.css'

const teamMembers = [
  {
    name: "Shri Yogesh Mandhani",
    title: "President",
    company: "M/s SMW Ispat (P) Ltd",
    img: "media/team/Ygesh-Mandhani-Ji-Image.jpg",
  },
  {
    name: "Shri Gopal Gupta",
    title: "President Emeritus",
    company: "M/s Laxcon Steel Ltd",
    img: "media/team/Gopal-sir-photo-nc.jpg",
  },
  {
    name: "Shri Devendra Kumar Agrawal",
    title: "Immediate Past President",
    company: "M/s Kashi Vishwanath Steels Ltd.",
    img: "media/team/g2.png",
  },
  {
    name: "Shri Ashok Garg",
    title: "Sr. Vice President (Hon. Treasurer)",
    company: "M/s Reby Castings Pvt Ltd",
    img: "media/team/ashok-garg.png",
  },
  {
    name: "Shri Kamal Aggarwal",
    title: "Hon. Secretary General",
    company: "M/s NIFS Steels",
    img: "media/team/NIFS-Steels-Kamal-Sir-photo.jpg",
  },
];

export default function GoverningBodies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = teamMembers.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      
      <section className="our-team-section">
        <div className="our-team-container">
          <p className="our-team-subtitle">GOVERNING BODIES</p>
          <h2 className="our-team-title">Our Team</h2>

          {/* Search Bar */}
          <div className="our-team-search-wrapper">
  <div className="our-team-search-box">
    <Search className="our-team-search-icon" size={18} />
    <input
      type="text"
      placeholder="Search team member..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="our-team-search"
    />
  </div>
</div>

          <div className="our-team-grid">
            {filteredMembers.map((member, index) => (
              <div className="our-team-card" key={index}>
                <div className="our-team-img-wrapper">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="our-team-img"
                  />
                </div>
                <h4 className="our-team-name">{member.name}</h4>
                <p className="our-team-role">{member.title}</p>
                <p className="our-team-company">{member.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
