/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import { css, jsx } from "@emotion/react";
import googleAuth from "../../assets/google.svg";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  return (
    <div className="container-fluid">
      <div
        css={css`
          width: 400px;
          display: block;
          margin: 0 auto;
          margin-top: 38px;
        `}
      >
        <p
          css={css`
            font-weight: 800;
            font-size: 25px;
            line-height: 35px;
            letter-spacing: 0.1em;
            color: #333944;
            margin: 0;
          `}
        >
          WELCOME ADMIN!
        </p>
        <p
          css={css`
            font-weight: normal;
            font-size: 17px;
            line-height: 33px;
            letter-spacing: 0.1em;
            color: #333944;
            margin-left: 3px;
          `}
        >
          Don’t have an account,{" "}
          <span
            css={css`
              color: #4f4dab;
              font-weight: 600;
            `}
          >
            Sign up
          </span>
        </p>
        <p p className="form-label">
          Email
        </p>
        <input
          type="text"
          className="form-input"
          Placeholder="Enter your email address"
          autocomplete="off"
          css={css`
            margin-bottom: 8px;
            margin-top: 1px;
          `}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <p className="form-label">Password</p>
        <input
          className="form-input"
          type="password"
          Placeholder="Enter your password"
          autocomplete="off"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          css={css`
            margin-bottom: 8px;
            margin-top: 1px;
          `}
        ></input>
        <button
          className="btn"
          css={css`
            width: 100%;
            margin-top: 30px;
          `}
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Sign In
        </button>
        <div
          css={css`
            position: relative;
          `}
        >
          <div
            css={css`
              border-top: 1.6px solid rgba(79, 77, 171, 0.75);
              width: 75%;
              display: block;
              margin: 0 auto;
              margin-top: 34px;
            `}
          ></div>

          <p
            css={css`
              position: absolute;
              background-color: #fff;
              width: fit-content;
              top: -10px;
              left: 50%;
              transform: translate(-50%);
              font-size: 14px;
              padding: 0 4px;
              color: #333944;
            `}
          >
            or continue with
          </p>
        </div>
        <div
          css={css`
            border: 1.6px solid #4f4dab;
            box-sizing: border-box;
            border-radius: 8px;
            width: fit-content;
            padding: 6px 17px;
            margin: 0 auto;
            margin-top: 23px;
          `}
          onClick={signInWithGoogle}
        >
          {" "}
          <img
            src={googleAuth}
            alt="google-auth"
            css={css`
              width: 30px;
            `}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Signin;
