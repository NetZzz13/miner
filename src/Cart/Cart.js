import React, { useState } from "react";
import s from "./Cart.module.scss";
import closeIcon from "../assets/close.png";
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import sumIcon from "../assets/sum.png";
import removeIcon from "../assets/removeIcon.png";
import { connect } from "react-redux";
import {
  setCartList,
  removeCartList,
  removeItemFromCart,
  clearAllCart,
} from "../redux/cartReducer";

import visa from "../assets/payment/1.png";
import paypal from "../assets/payment/2.png";
import coinpayments from "../assets/payment/3.png";
import skrill from "../assets/payment/4.png";
import webmoney from "../assets/payment/5.png";
import alipay from "../assets/payment/6.png";

const paymentSystemsImages = [
  visa,
  paypal,
  coinpayments,
  skrill,
  webmoney,
  alipay,
];

const Cart = (props) => {
  let [isShowBillingStep, setBillingStep] = useState(false);
  let [isShowThirdStep, setThirdStep] = useState(false);
  let [isShowFouthStep, setFouthStep] = useState(false);
  let [isHiddenAllButtons, setHiddenAllButtons] = useState(false);
  let [isCartOpen, setCartOpen] = useState(true);

  let getModalFirstActionButton = () => {
    if (isShowBillingStep) {
      return (
        <div>
          <button
            onClick={() => {
              setThirdStep(true);
              setBillingStep(false);
            }}
          >
            Continue
          </button>
          <button
            onClick={() => {
              setBillingStep(false);
            }}
          >
            Back
          </button>
        </div>
      );
    } else if (isShowThirdStep) {
      return (
        <div>
          <button
            onClick={() => {
              setBillingStep(false);
              setThirdStep(false);
              setFouthStep(true);
              setHiddenAllButtons(true);
              setCartOpen(false);
              props.clearAllCart();
            }}
          >
            Buy
          </button>
          <button
            onClick={() => {
              setThirdStep(false);
              setBillingStep(true);
            }}
          >
            Back
          </button>
        </div>
      );
    } else if (!isShowBillingStep && !isHiddenAllButtons) {
      return (
        <div>
          <button
            onClick={() => {
              setBillingStep(true);
            }}
          >
            Continue
          </button>
          <button onClick={() => props.clearAllCart()}>Remove all</button>
        </div>
      );
    }
  };

  return (
    <div className={s.cartBlock}>
      {isCartOpen && (
        <div className={`${s.cart} ${s.cartAllMainBlock}`}>
          <div className={s.titleBlock}>
            <p>You have {props.cartList.length} items in your cart</p>
            <div
              className={s.closeIcon}
              onClick={() => {
                props.toggleViewCart();
                props.toggleBodyScroll();
              }}
            >
              <img src={closeIcon} alt="closeIcon" />
            </div>
          </div>

          <div className={s.itemsBlock}>
            {props.cartList.map((el) => (
              <div className={s.itemBlock} key={el.id}>
                <div
                  className={s.itemPhoto}
                  onClick={() => {
                    props.removeCartList(el);
                  }}
                >
                  <img src={el.photo} className={s.itemIcon} alt="itemPhoto" />
                  <img
                    src={removeIcon}
                    className={s.removeIcon}
                    alt="removeItem"
                  />
                </div>
                <div className={s.itemInfo}>
                  <div className={s.itemTitle}>
                    <div className={s.itemName}>{el.name}</div>{" "}
                    <div className={s.itemPower}>{el.power}</div>
                  </div>
                  <div className={s.itemCountBlock}>
                    <div className={s.itemCount}>
                      <div
                        className={s.arrow}
                        onClick={() => {
                          props.removeItemFromCart(el);
                          if (+el.count === 0) {
                            props.removeCartList(el);
                          }
                        }}
                      >
                        <img src={arrowLeft} alt="arrowLeftIcon" />
                      </div>
                      <div className={s.counter}>{el.count}</div>
                      <div
                        className={s.arrow}
                        onClick={() => {
                          props.setCartList(el);
                        }}
                      >
                        <img src={arrowRight} alt="arrowRightIcon" />
                      </div>
                    </div>
                    <div className={s.itemSum}>${el.price * el.count}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isShowBillingStep && (
        <div className={s.billing + " " + s.cartAllMainBlock}>
          <div className={s.billingTitleBlock}>
            <div className={s.billingTitle}>Enter your Billing details</div>
            <div className={s.billingRememberMe}>
              <input type="checkbox" className={s.checkbox} id="checkbox" />
              <label htmlFor="checkbox">Remember</label>
            </div>
          </div>
          <div className={s.billingInputs}>
            <form action="#">
              <input type="text" placeholder="First name*" />
              <input type="text" placeholder="Last name*" />
              <input type="text" placeholder="Company name" />
              <input type="text" placeholder="County*" />
              <input
                type="text"
                placeholder="House number and street name*"
                className={s.billingInputsHouse}
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit etc (optional)"
                className={s.billingInputsAppartment}
              />
              <input type="text" placeholder="Town / City*" />
              <input type="text" placeholder="State*" />
              <input type="text" placeholder="ZIP*" />
              <input type="text" placeholder="Phone*" />
              <input type="text" placeholder="Email address*" />
              <input type="text" placeholder="Create account password*" />
            </form>
          </div>
        </div>
      )}

      {isShowThirdStep && (
        <div className={s.payment + " " + s.cartAllMainBlock}>
          <div className={s.paymentTitleBlock}>
            <div className={s.paymentTitle}>Choose your payment method</div>
            <div className={s.paymentRememberMe}>
              <input type="checkbox" className={s.checkbox} id="checkbox" />
              <label htmlFor="checkbox">Remember</label>
            </div>
          </div>

          <div className={s.paymentSystems}>
            {paymentSystemsImages.map((el) => {
              return <img src={el} alt="payment service" key={el} />;
            })}
          </div>

          <div className={s.paymentInputs}>
            <form action="#">
              <input
                type="text"
                placeholder="XXXX XXXX XXXX XXXX   Card number*"
                className={s.cardNumber}
              />
              <input
                type="text"
                placeholder="********* *********   Card holder name*"
                className={s.cardHolderName}
              />
              <input type="number" placeholder="XX / XX   Expire date*" />
              <input type="number" placeholder="XXX   CVV*" />
            </form>
          </div>
        </div>
      )}

      {isShowFouthStep && (
        <div className={s.purchase + " " + s.cartAllMainBlock}>
          <div className={s.titleBlock}>
            <p>Successfull purchase</p>
            <div
              className={s.closeIcon}
              onClick={() => {
                props.toggleViewCart();
                props.toggleBodyScroll();
              }}
            >
              <img src={closeIcon} alt="closeIcon" />
            </div>
          </div>

          <div className={s.purchaseInfo}>
            <p className={s.purchaseText}>
              Thank you for using our marketplace. Your Order number is{" "}
              <span>#23542</span>. If you still have any questions click{" "}
              <a href={"https://www.google.com/"}>here</a> to ask!
            </p>
          </div>
        </div>
      )}

      {props.cartList.length !== 0 && (
        <div className={s.stepsBlock}>
          <div className={s.buttonsBlock}>{getModalFirstActionButton()}</div>
          <div className={s.summuryBlock}>
            <img src={sumIcon} alt="sumIcon" />
            <span>
              $
              {props.cartList.reduce((total, elem) => {
                return total + elem.price * elem.count;
              }, 0)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    cartList: state.cart.cartList,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    setCartList: (cartList) => {
      dispatch(setCartList(cartList));
    },
    removeCartList: (cartList) => {
      dispatch(removeCartList(cartList));
    },
    removeItemFromCart: (cartList) => {
      dispatch(removeItemFromCart(cartList));
    },
    clearAllCart: () => {
      dispatch(clearAllCart());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

/* export default Cart; */
