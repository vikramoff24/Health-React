/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";
import React, { Fragment } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Sidebar from "./components/Shared/Sidebar";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App(props) {
  return (
    <div>
      <Global
        styles={css`
          font-family: "Poppins", sans-serif;
          font-style: normal;
          box-sizing: border-box;
          *:focus {
            outline: 0 !important;
          }
          .form-input {
            border: 2px solid #4f4dab;
            box-sizing: border-box;
            border-radius: 8px;
            padding: 12px;
            color: rgba(136, 136, 136, 1);
            font-size: 14px;
            height: 45px;
            width: 100%;
            text-align: left;

            &:focus {
              color: rgba(136, 136, 136, 1);
            }
          }
          .form-label {
            font-weight: 600;
            font-size: 17px;
            line-height: 38px;
            letter-spacing: 0.08em;
            color: #333944;
            margin: 0;
          }
          .btn {
            background: #4f4dab;
            box-shadow: 4px 8px 12px rgba(78, 99, 141, 0.06);
            border-radius: 8px;
            border: none;
            color: #fff;
            height: 45px;
            display: block;

            font-weight: 600;
            &:active {
              color: #fff;
              outline: none;
            }
            &:hover {
              color: #fff;
              outline: none;
            }
          }
        `}
      />
      <div
        css={css`
          position: absolute;
        `}
      >
        <Sidebar />
      </div>
      <div
        css={css`
          padding-left: 290px;
        `}
      >
        <Router>
          {/* <SignIn /> */}

          <SignUp />
          <Fragment>
            <Switch></Switch>
          </Fragment>
        </Router>
      </div>
    </div>
  );
}
export default App;
