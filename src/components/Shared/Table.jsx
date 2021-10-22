/** @jsxImportSource @emotion/react */
import React from "react";
import { Global, css, jsx } from "@emotion/react";
const Table = () => {
  return (
    <div
      css={css`
        border: 1px solid #4f4dab;
        box-shadow: 0px 12px 26px rgba(16, 30, 115, 0.06);
        border-radius: 8px;
        width: 90%;
        display: block;
        margin: 0 auto;
        text-align: center;
      `}
    >
      <Global
        styles={css`
          td,
          th {
            border-bottom: 0.8px solid rgba(136, 136, 136, 0.25);
          }
          th {
            padding-top: 20px;
            padding-bottom: 10px;
            letter-spacing: 0.1px;
            color: #333944;
            font-weight: 700;
          }
          td {
            padding: 10px 0;
            letter-spacing: 0.1px;

            color: rgba(51, 57, 68, 0.75);
          }
        `}
      />

      <table
        css={css`
          width: 100%;
          font-size: 16.5px;
        `}
      >
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Mobile</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>Leslie</td>
          <td>Neurology</td>
          <td>8002234567</td>
          <td>On Hold</td>
        </tr>
        <tr>
          <td>Leslie</td>
          <td>Neurology</td>
          <td>8002234567</td>
          <td>On Hold</td>
        </tr>
      </table>
    </div>
  );
};

export default Table;
