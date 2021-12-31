/** @jsxImportSource @emotion/react */
import React from "react";
import { Global, css, jsx } from "@emotion/react";
const Table = () => {
  return (
    <>
      <div
        css={css`
          margin: 2rem 0 1rem 0;
          color: #333944;
          font-size: 18pt;
          font-weight: 600;
        `}
      >
        Recent Doctors
      </div>

      <div
        css={css`
          border: 1px solid #4f4dab;
          border-radius: 0.5rem;
          width: 100%;
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
              padding: 1rem 0;
              color: #333944;
              font-weight: 700;
            }
            td {
              padding: 0.75rem 0;
              color: rgba(51, 57, 68, 0.75);
            }
          `}
        />

        <table
          css={css`
            width: 100%;
            font-size: 14pt;
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
    </>
  );
};

export default Table;
