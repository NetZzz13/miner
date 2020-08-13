import React from "react";
import s from "./News.module.scss";
import newsLogo from "../assets/news/newsLogo.png";
import newsPhoto from "../assets/news/newsPhoto.png";
import dots from "../assets/news/3dots.png";

const News = () => {
  return (
    <div className={s.newsBlock}>
      <div className={s.newsLabel}>
        <h2>News</h2>
      </div>
      <div className={s.newsContent}>
        <div className={s.newsLogo}>
          <img src={newsLogo} alt="newsLogo"/>
        </div>
        <div className={s.newsTitle}>The standart for crypto consulting</div>
        <div className={s.newsFeatures}>
          <p>Mining Operations</p>
          <p>ICO (Initial Coin Offering)</p>
          <p>New Business Investment</p>
          <p>Blockchain Technology</p>
        </div>
        <div className={s.newsPhoto}>
        <img src={newsPhoto} alt="newsPhoto"/>
        </div>
        <div className={s.newsManagement}>
        <img src={dots} alt="dotsIcon"/>
        </div>
      </div>
    </div>
  );
};

export default News;
