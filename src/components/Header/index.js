import React from "react";
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faBriefcase,
  faEnvelope,
  faPhone,
  faEarth,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import profilePic from "../../static/profile.png";

const PROFILE_INFO = [
  { icon: faUser, value: "Shuvradeb Saha" },
  { icon: faBriefcase, value: "Software Engineer" },
  { icon: faEnvelope, value: "sahashuvradeb@gmail.com", isEmail: true },
  { icon: faPhone, value: "+8801926359697", isPhone: true },
];

const SOCIAL_SITE_INFO = [
  {
    icon: faGithub,
    link: "https://github.com/shuvradeb-saha",
    label: "github.com/shuvradeb-saha",
  },
  {
    icon: faLinkedinIn,
    link: "https://www.linkedin.com/in/shuvradeb-saha-a093aa158/",
    label: "linkedin.com/shuvradeb-saha",
  },
  {
    icon: faEarth,
    link: "https://shuvradeb-saha.github.io/",
    label: "shuvradeb-saha.github.io",
  },
];

export default function Header() {
  const renderPersonInfo = (info) => {
    const { icon, value } = info;
    return (
      <div key={value} className="profile_item">
        <span>
          <FAIcon icon={icon} />
        </span>
        <span>
          {info.isEmail ? (
            <a href={`mailto:${value}`}>{value}</a>
          ) : info.isPhone ? (
            <a href={`tel:${value}`}>{value}</a>
          ) : (
            value
          )}
        </span>
      </div>
    );
  };

  const renderSiteInfo = ({ icon, link, label }) => (
    <div key={label} className="profile_item">
      <span>
        <FAIcon icon={icon} />
      </span>
      <span>
        <a target="_blank" href={link}>
          {label}
        </a>
      </span>
    </div>
  );

  return (
    <header className="header">
      <div className="profile_detail">
        <h2>Contact</h2>
        {PROFILE_INFO.map(renderPersonInfo)}
      </div>

      <div className="profile_pic">
        <img src={profilePic} alt="Shuvradeb Saha" />
        <div className="bio">
          <span>Coder;</span>
          <span>Coffeeholic;</span>
          <span>Inquisitive</span>
        </div>
      </div>

      <div className="profile_detail">
        <h2>More</h2>
        {SOCIAL_SITE_INFO.map(renderSiteInfo)}
      </div>
    </header>
  );
}
