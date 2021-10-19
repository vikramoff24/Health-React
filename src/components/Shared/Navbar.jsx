/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
const Navbar = () => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <p
        css={css`
          font-size: 35px;
          font-weight: 500;
          color: #333944;
          width: fit-content;
          padding: 15px 40px;
        `}
      >
        Med
        <span
          css={css`
            color: #4f4dab;
          `}
        >
          ex
        </span>
      </p>
    </div>
  );
};

export default Navbar;
