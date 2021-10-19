/** @jsxImportSource @emotion/react */
import React from "react";
import { css, jsx } from "@emotion/react";
import Navbar from "../components/Shared/Navbar";
import Sidebar from "../components/Shared/Sidebar";
import Signup from "../components/SignUp/Signup";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
};

export default SignUp;
