/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <main
      css={css`
        display: grid;
        grid-template-columns: 290px 1fr;
      `}
    >
      <Sidebar />
      <section
        css={css`
          padding: 2.5rem;
        `}
      >
        {children}
      </section>
    </main>
  );
};

export default DashboardLayout;
