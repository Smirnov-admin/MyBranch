import React, { useState } from "react";
import "./HeaderSection.css";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

const HeaderSection = () => {

    const [isOpen, setOpen] = useState(false);
    const burgerStatus = isOpen ? 'menu-btn' : 'active';

    const changeClick = () => {
        setOpen(!isOpen);
    };

  return(
    <section className="header">
      <div className="header_item">
        <div className="header_elements">
          <div className="header_burgerMenu">
            <button onClick={changeClick} className={`menu-btn ${burgerStatus}`}>
              <span />
              <span />
              <span />
            </button>
          </div>
          <div className="header_SignInAndSearch">
            <div className="header_search">
              <CiSearch />
            </div>

            <div className="header_SignInIcon">
              <RiAccountCircleLine />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
