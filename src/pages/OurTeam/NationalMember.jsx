import React, { useState } from "react";
import { Search } from "lucide-react";
import './style.css'

const NationalMember = [
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
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/Gopal-sir-photo-nc.jpg",
  },
  {
    name: "Shri Devendra Kumar Agrawal",
    title: "Immediate Past President",
    company: "M/s Kashi Vishwanath Steels Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri -devendra-kumar -agrawal.png",
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
  {
    name: "Shri Jitendra Singh",
    title: "Patron",
    company: "M/s ISC Machines Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-jitendra-singh.jpg",
  },
  {
    name: "Shri Sandeep Jain",
    title: "Patron",
    company: "M/s Trishala Alloys Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-sandee- jain.png",
  },
  {
    name: "Shri Ashok Surana",
    title: "Patron",
    company: "M/s Shobha Enterprises",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-ashok-surana.jpg",
  },
  {
    name: "Shri Dev Gupta",
    title: "Sr. Vice President",
    company: "M/s Renny Strips (P) Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-dev-gupta.jpg",
  },
  {
    name: "Shri Anil Goyal",
    title: "Sr. Vice President",
    company: "M/s Kalika Steel Jalna, Maharashtra",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Chandraprakash R Dad",
    title: "Sr. Vice President",
    company: "M/s Viraj Steel Mumbai, Maharashtra",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Subhash Chand Agrawal",
    title: "Vice President",
    company: "M/s Shivali Udyog (I) Private Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Lalit Bansal",
    title: "Vice President",
    company: "M/s SBF Ispat Private Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Ramesh Chand Goyal",
    title: "Vice President",
    company: "M/s BDG Metal & Power Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-ramesh-chand-goyal.jpg",
  },
  {
    name: "Shri Rajesh Kabra",
    title: "Vice President",
    company: "M/s Raghav Productivity Enhancers Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name: "Shri Ashwani Bhatia",
    title: "Vice President",
    company: "M/s ARS Steels & Alloy International Pvt. Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-ashwani-bhatia.jpg",
  },
  {
    name: "Shri S.S. Agarwal",
    title: "Vice President",
    company: "M/s Premium Ferro Alloys Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-s.s.-agarwal.png",
  },
  {
    name:"Shri K. K. Garg",
    title:"Northern Zonal Chairman",
    comapny:"M/s Sharu Steels Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-k. k.-garg.jpg",
  },
  {
    name:"N.D.Rao",
    title:"Eastern Zonal Chairman",
    comapny:"M/s Amalgam Steel Ltd (Crest Steel & Power Private Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Dinesh Agarwal",
    title:"Western Zonal Chairman",
    comapny:"M/s Jalna Siddhivinayak Alloys Private Limited (Roopam Steel Rolling Mills)",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Suman Saraf",
    title:"Southern Zonal Chairman",
    comapny:"M/s Radha Smelters Private Limited Hyderabad",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Ramesh Agarwal",
    title:"Central Zonal Chairman",
    comapny:"M/s G. R. Sponge And Power Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Keyur Shah",
    title:"Gujarat State Chairman",
    comapny:"M/s Mono Steel (India) Ltd Gujarat",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Sudesh Sharma",
    title:"Rajasthan State Chairman",
    comapny:"M/s Shri Prithvi Alloys Pvt ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Mohinder Gupta",
    title:"Punjab State Chairman",
    comapny:"M/s Gian Castings Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-mohinder-gupta.jpg",
  },
  {
    name:"Shri Kamal Goyal",
    title:"UP State Chairman",
    comapny:"M/s Amba Shakti Udyog",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Jullain JallanShri Jullain Jallan",
    title:"Karnataka State Chairman",
    comapny:"M/s A-One Steel & Alloys Private Limited",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Nikunj Beriwala",
    title:"West Bengal State Chairman",
    comapny:"M/s SRMB Steel Kolkata",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Pawan Kumar Agarwal",
    title:"Uttarakhand State Chairman",
    comapny:"M/s Shree Sidhbali Industries Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Megh Raj Garg",
    title:"Himachal State Chairman",
    comapny:"M/s H M Steel Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Pavan Singhania",
    title:"Madhya Pradesh State Chairman",
    comapny:"M/s Jaideep Ispat & Alloys (P) Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-pavan-singhania.jpg",
  },
  {
    name:"Shri Ashok Agarwal",
    title:"Cluster Chairman",
    comapny:"M/s Prime Ispat Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Amarjeet Singh",
    title:"National Council Member",
    comapny:"M/s Atam Concast Steels Pvt. Ltd,",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-amarjeet-singh.jpg",
  },
  {
    name:" Shri Pawan Bansal",
    name:"Shri Tanuj Bansal",
    title:"National Council Member",
    comapny:"M/s Shree Jagdambay Castings Pvt Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Niwas Gupta",
    title:"National Council Member",
    comapny:"M/s Shree Krishna Rolling Mills (Jaipur) Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/shri-niwas-gupta.jpg",
  },
  {
    name:"Shri Sudhir Goyal",
    title:"National Council Member",
    comapny:"M/s Madhav KRG Ltd",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Nikunj Daga",
    title:"National Council Member",
    comapny:"M/s Nikunj Udyog",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  {
    name:"Shri Amit Gupta Kasaniya",
    title:"National Council Member",
    comapny:"M/s Hari Iron (India) Ltd.",
    img: "http://hoverbusinessservices.com/cloud/aiifa/media/members/user.png",
  },
  
  
  
];

export default function GoverningBodies() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMembers = NationalMember.filter(
    (member) =>
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      
      <section className="our-team-section">
        <div className="our-team-container">
          <p className="our-team-subtitle">NATIONAL MEMBER</p>
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