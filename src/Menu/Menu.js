import React, { useState } from "react";
import s from "./Menu.module.scss";
import hamburger from "../assets/hamburger1.png";
import { NavLink, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";

const Menu = (props) => {
  let [isOpen, setData] = useState(false);

  let toggleViewMenuContent = (isView) => setData(isView);

  let getLabel = (label) => {
    return props.menu[props.languageSelected.value][label];
  };

  return (
    <div className={s.menuBlock}>
      <div
        className={s.menu}
        onClick={() => {
          toggleViewMenuContent(true);
        }}
      >
        <img src={hamburger} alt="hamburgerIcon" />
      </div>

      <div className={`${s.menuContent} ${isOpen && s.menuContentOpened}`}>
        <button
          onClick={() => {
            toggleViewMenuContent(false);
          }}
        >
          X
        </button>

        {/*      {[{}].map(el => {
           <NavLink to="/home" className={s.home}>
           HOME
         </NavLink>
        })} */}

        <NavLink to="/home" className={s.menuLink} activeClassName={s.active}>
          {getLabel("lbl_home")}
        </NavLink>
        <div className={s.menuDots}>...</div>
        <NavLink to="/sell" className={s.menuLink} activeClassName={s.active}>
          {getLabel("lbl_sell")}
        </NavLink>
        <div className={s.menuDots}>...</div>
        <NavLink to="/host" className={s.menuLink} activeClassName={s.active}>
          {getLabel("lbl_host")}
        </NavLink>
        <div className={s.menuDots}>...</div>
        <NavLink
          to="/aboutUs"
          className={s.menuLink}
          activeClassName={s.active}
        >
          {getLabel("lbl_aboutUs")}
        </NavLink>
        <div className={s.menuDots}>...</div>
        <NavLink
          to="/support"
          className={s.menuLink}
          activeClassName={s.active}
        >
          {getLabel("lbl_support")}
        </NavLink>
        <Switch>
          <Redirect to="/home" />
        </Switch>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    languageSelected: state.language.languageSelected,
    menu: state.menu.labels,
  };
};

export default connect(mapStateToProps, {})(Menu);

/* export default Menu; */
