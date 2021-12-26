/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      <div
        css={css`
          padding: 2rem 4rem;
        `}
      >
        <Logo />
      </div>
    </div>
  );
};

export default Navbar;
