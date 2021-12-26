/** @jsxImportSource @emotion/react */
import { css, jsx } from "@emotion/react";
import React, { Fragment } from "react";
import hero from "../../assets/hero.svg";
import Navbar from "../Shared/Navbar";
const Hero = () => {
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
          left: 4rem;
          transform: translate(0, -50%);
        `}
      >
        <h1
          css={css`
            font-weight: 500;
            font-size: 42pt;
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
            border-radius: 0.5rem;
            padding: 1rem 3rem;
            text-align: center;
            font-size: 16pt;
            margin-top: 3rem;
          `}
        >
          Make Appointment
        </button>
      </div>
    </div>
  );
};

export default Hero;
