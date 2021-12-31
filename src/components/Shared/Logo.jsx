/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
const Logo = () => {
  return (
    <p
      css={css`
        font-size: 35px;
        font-weight: 500;
        color: #333944;
        width: fit-content;
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
  );
};

export default Logo;
