/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import Navbar from "../components/Shared/Navbar";
import Sidebar from "../components/Shared/Sidebar";
import Signup from "../components/SignUp/Signup";
import DashboardCard from "../components/Shared/DashboardCard";
import Table from "../components/Shared/Table";
const SignUp = () => {
  return (
    <div>
      <Navbar />
      <Table />
      <DashboardCard />
      <Signup />
    </div>
  );
};

export default SignUp;
