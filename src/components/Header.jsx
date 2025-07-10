import React from "react";
import { FaHome, FaUserGraduate } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">
          <FaHome className="icon" />
          صفحه اصلی
        </Link>
        <Link to="/students" className="nav-link">
          <FaUserGraduate className="icon" />
          دانشجویان
        </Link>
      </nav>
    </header>
  );
};

export default Header;
