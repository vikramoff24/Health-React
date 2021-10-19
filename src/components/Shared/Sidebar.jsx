/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import Logo from "./Logo";
import Profile from "../../assets/Person.png";
const Sidebar = () => {
  return (
    <div
      css={css`
        box-shadow: 4px 0px 16px rgba(51, 57, 68, 0.12);
        width: 290px;
        height: 720px;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          width: fit-content;
          padding-top: 15px;
        `}
      >
        {" "}
        <Logo />
      </div>
      <div
        css={css`
          text-align: center;
        `}
      >
        <img
          src={Profile}
          alt="profile"
          css={css`
            width: 65px;
            margin: 0 auto;
            margin-top: 30px;
            display: block;
          `}
        />

        <p
          css={css`
            font-size: 19px;
            letter-spacing: 0.1px;
            margin-top: 10px;
            color: rgba(136, 136, 136, 0.75);
          `}
        >
          Admin
        </p>
        <p
          css={css`
            font-weight: 500;
            font-size: 25px;
            line-height: 20px;
            letter-spacing: 0.1px;
            color: #333944;
            margin-top: 20px;
          `}
        >
          {" "}
          John Smith
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
