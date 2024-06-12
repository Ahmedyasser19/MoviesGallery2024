import React from "react";
import "./navbar.css";

import Search from "/Search.svg";
import Filter from "/Filter.svg";
const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="Categories">
        <ul className="CategoriesUl">
          <li>Movies</li>
          <li>TVShows</li>
          <li>Anime</li>
        </ul>
      </div>
      <div className="Search">
        <img src={Search} />

        <input type="search" name="search" placeholder="Search" />
        <img src={Filter} />
      </div>
    </div>
  );
};

export default NavBar;
