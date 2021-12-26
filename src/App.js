/** @jsxImportSource @emotion/react */
import { Global, css, jsx } from "@emotion/react";
import React, { Fragment, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Sidebar from "./components/Shared/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import DoctorPage from "./pages/DoctorPage";
import PatientPage from "./pages/PatientPage";

function App(props) {
  const [user, loading, error] = useAuthState(auth);
  const [page, setPage] = useState("/");

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
          .base-color {
            color: rgba(91, 103, 202, 1);
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
      <Router>
        {/* <Route path="/:path">
          {user && (
            <div
              css={css`
                position: absolute;
              `}
            >
              <Sidebar />
            </div>
          )}
        </Route> */}

        {/* TODO Replace this with a Layout Component */}
        <div
        // css={
        //   user && page !== "/"
        //     ? css`
        //         padding-left: 290px;
        //       `
        //     : css`
        //         padding-left: 0px;
        //       `
        // }
        >
          <Switch>
            <Route exact path="/" component={() => <HomePage />} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/dashboard" component={DashboardPage} />
            <Route path="/doctorpage" component={DoctorPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
