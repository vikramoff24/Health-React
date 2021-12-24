/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
// import styled from "@emotion/styled";
import React, { Fragment } from "react";
import hero from "../../assets/hero.svg";
import Navbar from "../Shared/Navbar";
const Hero = () => {
  // const HighlightedSpan = styled.span`
  //   color: rgba(91, 103, 202, 1);
  // `;

  return (
    <div
      css={css`
        background-color: #eae9f4;
        height: 100vh;
        position: relative;
      `}
    >
      <Navbar />
      <img
        src={hero}
        alt="hero"
        css={css`
          width: auto;
          height: 500px;
          position: absolute;
          right: 0px;
          top: 50%;
          transform: translate(0, -50%);
        `}
      />
      <div
        css={css`
          position: absolute;
          top: 50%;
          left: 70px;
          transform: translate(0, -50%);
        `}
      >
        <h1
          css={css`
            font-weight: 500;
            font-size: 57px;
            line-height: 69px;

            width: 420px;
            color: #333944;
          `}
        >
          Find your <span className="base-color">doctor</span> & make{" "}
          <span className="base-color">appointment.</span>
        </h1>
        <button
          className="btn "
          css={css`
            background-color: rgba(91, 103, 202, 1);
            font-weight: 400;
            border-radius: 8px;
            height: 55px;
            width: 260px;
            font-size: 19px;
            letter-spacing: 0.3px;
            margin-top: 55px;
          `}
        >
          {" "}
          Make Appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
