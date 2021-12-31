/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
const MenuItem = ({ item }) => {
  return (
    <Link to={item.path}>
      <div
        css={css`
          margin-top: 0.5rem;
        `}
      >
        <img src={item.icon} alt={"svg0"} width="24px" height="24px"></img>

        <p
          css={css`
            font-size: 14pt;
            color: rgba(51, 57, 68, 0.75);
            display: inline-block;
            vertical-align: -4px;
            margin-left: 2rem;
          `}
        >
          {item.name}
        </p>
      </div>
    </Link>
  );
};

export default withRouter(MenuItem);
