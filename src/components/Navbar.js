import React from "react";
import { Link } from "react-router-dom";
function Navbar(props) {
  const { selected } = props;

  const handleToggleLinks = (e) => {
    const links = document.getElementsByClassName("links")[0];
    const navbar = document.getElementsByClassName('mobile-navbar-container')[0]
    navbar.classList.toggle('navbar-shadow')
    links.classList.toggle("active-links");
    links.classList.toggle('navbar-shadow');
  };

  return (
    <nav>
      <div className="mobile-navbar ">
        <div className="mobile-navbar-container navbar-shadow">
          <div className="bars" onClick={(e) => handleToggleLinks(e)}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <Link to="/">
            <img src="assets/logo.png" alt="Zamalek logo" />
          </Link>
        </div>


        <ul className="links">
          <Link to="/">
            <li className={selected === "home" ? "selected" : ""}>الرئيسية</li>
          </Link>
          <Link to="/news">
            <li className={selected === "news" ? "selected" : ""}>الأخبار</li>
          </Link>
          <Link to="/other_sports">
            <li className={selected === "other_sports" ? "selected" : ""}>
              الألعاب الأخري
            </li>
          </Link>
          <Link to="/media">
            <li className={selected === "media" ? "selected" : ""}>الاعلام</li>
          </Link>
          <Link to="/practice_times">
            <li className={selected === "practice_times" ? "selected" : ""}>
              مواعيد التدريبات
            </li>
          </Link>
          <Link to="/website_articles">
            <li className={selected === "website_articles" ? "selected" : ""}>
              مقالات الموقع
            </li>
          </Link>
          <Link to="/club_history">
            <li className={selected === "club_history" ? "selected" : ""}>
              تاريخ النادي
            </li>
          </Link>
        </ul>
      </div>

      <div className="desktop-navbar navbar-shadow">
        <ul className="links">
          <Link to="/" >
            <li className={selected === "home" ? "desktop-selected" : ""}>الرئيسية</li>
          </Link>
          <Link to="/news">
            <li className={selected === "news" ? "desktop-selected" : ""}>الأخبار</li>
          </Link>
          <Link to="/other_sports">
            <li className={selected === "other_sports" ? "desktop-selected" : ""}>
              الألعاب الأخري
            </li>
          </Link>
          <Link to="/media">
            <li className={selected === "media" ? "desktop-selected" : ""}>الاعلام</li>
          </Link>
          <Link to="/home">
            <li>
              <img src="assets/logo.png" alt="Zamalek logo" />
            </li>
          </Link>
          <Link to="/practice_times">
            <li className={selected === "practice_times" ? "desktop-selected" : ""}>
              مواعيد التدريبات
            </li>
          </Link>
          <Link to="/website_articles">
            <li className={selected === "website_articles" ? "desktop-selected" : ""}>
              مقالات الموقع
            </li>
          </Link>
          <Link to="/club_history">
            <li className={selected === "club_history" ? "desktop-selected" : ""}>
              تاريخ النادي
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
