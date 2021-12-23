/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import admin from "../../assets/HomePageIcons/admin.svg";

import { cardItems } from "../../components/Data/HomeData";
const HeroCategory = () => {
  return (
    <div
      css={css`
        display: block;
        margin: 55px auto;
        width: fit-content;
      `}
    >
      <p
        css={css`
          font-weight: 500;
          font-size: 33px;
          text-align: center;
          color: #333944;
        `}
      >
        Who are you?
      </p>
      {cardItems.map((item) => (
        <div
          css={css`
            background: #ffffff;
            border: 2px solid #5b67ca;
            box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            width: 245px;
            height: 290px;
            margin: 20px 50px;
            display: inline-block;
          `}
        >
          <img
            src={item.icon}
            alt="category-card"
            css={css`
              width: 105px;
              height: auto;
              margin: 35px auto;
              display: block;
            `}
          ></img>
          <p
            css={css`
              font-weight: 500;
              font-size: 36px;
              text-align: center;
              display: block;
              color: #333944;
              margin-top: 65px;
            `}
          >
            {item.name}
          </p>
        </div>
      ))}
      ;
    </div>
  );
};

export default HeroCategory;
