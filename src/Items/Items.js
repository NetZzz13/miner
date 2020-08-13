import React from "react";
import s from "./Items.module.scss";
import Item from "./Item/Item";
import { connect } from "react-redux";

const Items = (props) => {
  return (
    <div className={s.itemsBlock}>
      <div className={s.itemsLabel}>
        <h2>On sale</h2>
      </div>
      <div className={s.items}>
        {props.itemsData.map((el) => {
          return <Item el={el} key={el.id} />;
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

export default connect(mapStateToProps, {})(Items);

/* export default Items; */
