/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import Logo from "./Logo";
import Profile from "../../assets/Person.png";
import i from "../../assets/Icons/dashboard.svg";
import { menuItems, logOut } from "../Data/SidebarData";
import MenuItem from "./MenuItem";
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
      <div
        css={css`
          padding-top: 30px;
          width: fit-content;
          margin: 0 auto;
          padding-right: 35px;
        `}
      >
        {" "}
        {menuItems.map((item) => (
          <MenuItem item={item} />
        ))}{" "}
      </div>
      <div
        css={css`
          border-top: 1px solid rgba(136, 136, 136, 0.5);
          margin-top: 18px;
        `}
      ></div>
      <div
        css={css`
          margin: 0 auto;
          margin-top: 20px;
          width: 217px;
          padding-right: 35px;
        `}
      >
        <MenuItem item={logOut[0]} />
      </div>
    </div>
  );
};

export default Sidebar;
