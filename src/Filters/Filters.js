import React from "react";
import s from "./Filters.module.scss";
import btc from "../assets/tickers/btc.png";
import ppc from "../assets/tickers/ppc.png";
import etp from "../assets/tickers/etp.png";

const Filters = () => {
  return (
    <div className={s.filters}>
      <form action="#">
        <div className={s.filtersLabel}><h2>Filters </h2></div>
        <div className={s.filtersContent}>
          
          
          <select className={s.algorithm}>
            <option value="">By Algorithm</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
  
          <select className={s.coin}>
            <option value="">By Coin</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
  
          <div className={s.coinToBlock}>
            <div className={s.coinToCart}>
              <img src={btc} alt="btc"/>
              <p>BTC</p>
            </div>
            <div className={s.coinToCart}>
              <img src={ppc} alt="ppc"/>
              <p>PPC</p>
            </div>
            <div className={s.coinToCart}>
              <img src={etp} alt="etp"/>
              <p>ETP</p>
            </div>
            <div className={s.coinToCart}>
              <img src={btc} alt="btc"/>
              <p>BTC</p>
            </div>
            <div className={s.coinToCart}>
              <img src={ppc} alt="ppc"/>
              <p>PPC</p>
            </div>
            <div className={s.coinToCart}>
              <img src={etp} alt="etp" />
              <p>ETP</p>
            </div>
          </div>
  
          <select className={s.equipment}>
            <option value="">By Equipment</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
  
          <select className={s.manufacturer}>
            <option value="">By Manufacturer</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
  
          <input className={s.minimumPrice} type="number" placeholder="Minimum Price" />
          <input className={s.maximumPrice} type="number" placeholder="Maximum Price" />
          <input className={s.search} placeholder="Search" />
  
          <p>
            <input type="submit" value="Filter" className={s.buttonFilter}/>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Filters;
