/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import appo from "../../assets/DashboardIcons/appointments.svg";

const DashboardCard = () => {
  return (
    <div
      css={css`
        background: #ffffff;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-radius: 0.5rem;
        width: 100% auto;
        max-width: 320px;
        padding: 1.5rem;
        position: relative;
      `}
    >
      <div
        css={css`
          color: #4f4dab;
          font-size: 26pt;
        `}
      >
        2
      </div>
      <div
        css={css`
          color: #333944;
          font-size: 14pt;
          margin-top: -0.5rem;
        `}
      >
        Appointments
      </div>
      <div
        css={css`
          color: #333944;
          font-size: 12pt;
          margin-top: 1rem;
        `}
      >
        Approve Appointment : 0
      </div>

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
