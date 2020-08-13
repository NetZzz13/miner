import React from "react";
import s from "./Item.module.scss";
import star from "../../assets/star.png";
import { setCartList } from "../../redux/cartReducer";
import { connect } from "react-redux";

const Item = (props) => {
  return props.el ? (
    <div className={s.item}>
      <div className={s.itemDescriptionBlock}>
        <div className={s.itemInfo}>
          <div className={s.itemName}>{props.el.name}</div>
          <div className={s.itemPower}>{props.el.power}</div>
        </div>
        <div className={s.itemIsWish}>
          <img src={star} alt="starIcon"/>
        </div>
      </div>
      <div className={s.itemPhoto}>
        <img src={props.el.photo} alt="itemPhoto" />
      </div>
      <div className={s.itemPriceBlock}>
        <div className={s.itemPrice}>
          {props.el.currency}
          {props.el.price}
        </div>
        <div className={s.itemType}>PSU</div>
      </div>
      <div className={s.itemHover}>
        <div
          className={s.addToCart}
          onClick={() => {
            props.setCartList(props.el);
          }}
        >
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  ) : null;
};

let mapStateToProps = (dispatch) => {
  return {};
};

let mapDispatchToProps = (dispatch) => {
  return {
    setCartList: (cartList) => {
      dispatch(setCartList(cartList));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

/* export default Item; */
