/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
const Signup = () => {
  return (
    <div className="container-fluid">
      <div
        css={css`
          width: 400px;
          display: block;
          margin: 0 auto;
          margin-top: 100px;
        `}
      >
        <p
          css={css`
            font-weight: 800;
            font-size: 25px;
            line-height: 35px;
            letter-spacing: 0.1em;
            color: #333944;
            margin: 0;
          `}
        >
          WELCOME ADMIN!
        </p>
        <p
          css={css`
            font-weight: normal;
            font-size: 17px;
            line-height: 33px;
            letter-spacing: 0.1em;
            color: #333944;
            margin-left: 3px;
          `}
        >
          Already have an account,{" "}
          <span
            css={css`
              color: #4f4dab;
              font-weight: 600;
            `}
          >
            Sign in
          </span>
        </p>
        <p p className="form-label">
          Name
        </p>
        <input
          type="text"
          className="form-input"
          Placeholder="Enter your name"
          autocomplete="off"
          css={css`
            margin-bottom: 8px;
            margin-top: 1px;
          `}
        ></input>
        <p p className="form-label">
          Email
        </p>
        <input
          type="text"
          className="form-input"
          Placeholder="Enter your email address"
          autocomplete="off"
          css={css`
            margin-bottom: 8px;
            margin-top: 1px;
          `}
        ></input>
        <p className="form-label">Password</p>
        <input
          className="form-input"
          type="password"
          Placeholder="Enter your password"
          autocomplete="off"
          css={css`
            margin-bottom: 8px;
            margin-top: 1px;
          `}
        ></input>
        <button
          className="btn"
          css={css`
            width: 100%;
          `}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
