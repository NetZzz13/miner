import React from "react";
import s from "./Footer.module.scss";
import facebook from "../assets/social/facebook.png";
import twitter from "../assets/social/twitter.png";
import youtube from "../assets/social/youtube.png";
import reddit from "../assets/social/reddit.png";
import star from "../assets/star.png";
import awards from "../assets/awards.png";

const Footer = () => {
  return (
    <div className={s.footer}>
      <div className={s.footerReview}>
        <div className={s.footerReviewPoints}>4.9</div>
        <div className={s.footerReviewInfo}>
          <div className={s.footerReviewText}>Great service and prices!</div>
          <div className={s.footerReviewStars}>
            <img src={star} alt="starIcon"/>
          </div>
          <div className={s.footerReviewAuthor}>David Smith</div>
        </div>
      </div>
      <div className={s.footerSocial}>
        <a href="#" >
          <div className={s.footerSocialIcon}>
            <img src={facebook} alt="facebook" />
          </div>
        </a>
        <a href="#" >
          <div className={s.footerSocialIcon}>
            <img src={twitter} alt="twitter" />
          </div>
        </a>
        <a href="#" >
          <div className={s.footerSocialIcon}>
            <img src={youtube} alt="youtube" />
          </div>
        </a>
        <a href="#" >
          <div className={s.footerSocialIcon}>
            <img src={reddit} alt="reddit" />
          </div>
        </a>
      </div>
      <div className={s.footerAwards}>
        <img src={awards} alt="awards" />
      </div>
    </div>
  );
};

export default Footer;
