import React, { useState } from "react";
import s from "./Header.module.scss";
import logo from "../assets/logo.png";
import languagesIcon from "../assets/planet.png";
import user from "../assets/user.png";
import balance from "../assets/balance.png";
import bell from "../assets/bell.png";
import cartIcon from "../assets/cart.png";
import arrowDown from "../assets/arrowDown.png";
import Menu from "../Menu/Menu";
import { connect } from "react-redux";
import Cart from "../Cart/Cart";
import { setLanguageSelected } from "../redux/languageReducer";
import controls from "../assets/controls.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let [isOpenCart, setData] = useState(false);
  let [isToggleBodyScroll, toggleScroll] = useState(true);

  let toggleViewCart = () => setData(!isOpenCart);

  let toggleBodyScroll = () => {
    let main = document.querySelector("main");
    toggleScroll(!isToggleBodyScroll);
    /* console.log(isToggleBodyScroll); */

    if (isToggleBodyScroll) {
      main.classList.add("hideBodyScroll");
    } else {
      main.classList.remove("hideBodyScroll");
    }
  };

  return (
    <div className={s.header}>
      <div className={s.controls}><img src={controls}/></div>
      <div className={s.leftBlock}>
        <NavLink to="/home">
          <div className={s.logo}>
            <img src={logo} alt="logoIcon" />
          </div>
        </NavLink>

        <div className={s.languagesBlock}>
          <div className={s.languagesIcon}>
            <img src={languagesIcon} alt="languagesIcon" />
          </div>

          {/* <div
            onClick={() =>
              props.setLanguageSelected(
                props.languageItems.find((item) => {
                  return item.value === "italian";
                })
              )
            }
          >
            {props.languageSelected.label}
          </div> */}

          <select
            className={s.languagesList}
            defaultValue={props.languageSelected.value}
            onChange={(event) =>
              props.setLanguageSelected(
                props.languageItems.find(
                  (item) => item.value === event.target.value
                )
              )
            }
          >
            {props.languageItems.map((elem) => {
              return (
                <option value={elem.value} key={elem.id}>
                  {elem.label}
                </option>
              );
            })}
          </select>
        </div>
      </div>
     {/*  <Menu /> */}
      <div className={s.rightBlock}>
        <div className={s.myProfile}>
          <div className={s.myProfileIcon}>
            <img src={user} alt="myProfileIcon" />
          </div>
          <div className={s.myProfileLabel}>My profile</div>
          <span>
            <img src={arrowDown} alt="arrowDownIcon" />
          </span>
        </div>

        <div className={s.money}>
          <img src={balance} alt="balanceIcon" />
        </div>
        <div className={s.notifications}>
          <img src={bell} alt="bellIcon" />
        </div>
        <div
          className={s.cartBlock}
          onClick={() => {
            toggleViewCart();
            toggleBodyScroll();
          }}
        >
          <div className={s.cartCounter}>
            {props.cartList.reduce((totalCount, el) => {
              return (totalCount += +el.count);
            }, 0)}
          </div>
          <div className={s.cartIcon}>
            <img src={cartIcon} alt="cartIcon" />
          </div>
        </div>
        {isOpenCart && (
          <div className={s.cartModal}>
            <Cart
              toggleViewCart={toggleViewCart}
              toggleBodyScroll={toggleBodyScroll}
            />
          </div>
        )}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    languageItems: state.language.languageItems,
    languageSelected: state.language.languageSelected,
    cartList: state.cart.cartList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setLanguageSelected: (languageSelected) => {
      dispatch(setLanguageSelected(languageSelected));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
