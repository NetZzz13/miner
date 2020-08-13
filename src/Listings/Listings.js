import React from "react";
import s from "./Listings.module.scss";
import Item from "../Items/Item/Item";
import { connect } from "react-redux";

const Listings = (props) => {
  return (
    <div className={s.listingsBlock}>
      <div className={s.listingsLabel}>
        <h2>New Listings</h2>
      </div>
      <div className={s.listingsItems}>
        {props.itemsData.map((el) => {
          return (
            new Date(el.dateOfReceipt) > new Date("2020-07-23T10:48:00") && (
              <Item el={el} key={el.id} />
            )
          );
        })}
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    itemsData: state.itemsPage.itemsData,
  };
};

export default connect(mapStateToProps, {})(Listings);

/* export default Listings; */
