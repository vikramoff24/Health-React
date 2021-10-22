/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import appo from "../../assets/DashboardIcons/appointments.svg";
const DashboardCard = () => {
  return (
    <div
      css={css`
        background: #ffffff;
        box-shadow: 0px 4px 16px 2px rgba(51, 57, 68, 0.12);
        border-radius: 8px;
        width: 327.6px;
        height: 135.1px;
        margin-left: 20px;
        padding: 15px 20px;
        position: relative;
      `}
    >
      <p
        css={css`
          letter-spacing: 0.1px;
          color: #4f4dab;
          font-size: 29.5px;
          margin: 0;
        `}
      >
        2
      </p>
      <p
        css={css`
          letter-spacing: 0.1px;
          color: #333944;
          font-size: 18dpx;
          margin: 0;
          font-weight: 400;
          margin-top: -10px;
        `}
      >
        Appointments
      </p>
      <p
        css={css`
          letter-spacing: 0.1px;
          color: #333944;
          font-size: 12.8px;
          margin-top: 17px;
        `}
      >
        Approve Appointment : 0
      </p>
      <img
        src={appo}
        alt="Appointments"
        css={css`
          position: absolute;
          top: 0px;
          width: 48px;
          right: 30px;
          top: 50%;
          transform: translate(0, -50%);
        `}
      ></img>
    </div>
  );
};

export default DashboardCard;
