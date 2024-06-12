import "./leftbar.css";
import { Library, Menu, General } from "../../data/static/data.js";
import { useEffect } from "react";
import MenuIcon from "../../../public/Menu.svg";

const LeftBar = () => {
  //
  const FillData = (data) => {
    return data.map((d, key) => (
      <li className="MenuItem" key={key}>
        <img src={d.icon} />
        <span className="Icon">{d.name}</span>
      </li>
    ));
  };

  return (
    <>
      {/* <div>
        <img src={MenuIcon} />
      </div> */}
      <div className="LeftBarContainer">
        <div className="LeftBar">
          <div className="Logo">
            Movies
            <br /> Gallery
          </div>
          <div className="MenusContainer">
            <div className="MenuTitle"> Menu</div>
            <ul className="MenuContent">{FillData(Menu)}</ul>
            <div className="MenuTitle"> Library</div>
            <ul className="MenuContent">{FillData(Library)}</ul>
            <div className="MenuTitle"> General</div>
            <ul className="MenuContent">{FillData(General)}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftBar;
