/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase";
import { css, jsx } from "@emotion/react";
import googleAuth from "../../assets/google.svg";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [selected, setSelected] = useState(null);
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  const handleSelectChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

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
          Already have an account,{" "}
          <span
            css={css`
              color: #4f4dab;
              font-weight: 600;
            `}
          >
            Sign in
          </span>
        </p>
        <p p className="form-label">
          Name
        </p>
        <input
          type="text"
          className="form-input"
          Placeholder="Enter your name"
          autocomplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          css={css`
            margin-bottom: 8px;
            margin-top: 1px;
          `}
        ></input>
        <p p className="form-label">
          Email
        </p>
        <input
          type="text"
          className="form-input"
          Placeholder="Enter your email address"
          autocomplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          css={css`
            margin-bottom: 8px;
            margin-top: 1px;
          `}
        ></input>
        <p className="form-label">Password</p>
        <input
          className="form-input"
          type="password"
          Placeholder="Enter your password"
          autocomplete="off"
          css={css`
            margin-bottom: 8px;
            margin-top: 1px;
          `}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <p className="form-label">Who you are?</p>
        <select
          className="form-input"
          css={css`
            margin-bottom: 8px;
            margin-top: 1p;
            padding-right: 20px;
          `}
          value={selected}
          onChange={handleSelectChange}
        >
          <option style={{ display: "none" }}>&#xf883; Sort By</option>

          <option value="price_low_to_high">Low To High</option>
          <option value="price_high_to_low"> High to Low</option>
        </select>
        <button
          className="btn"
          css={css`
            width: 100%;
            margin-top: 30px;
          `}
          onClick={register}
        >
          Sign Up
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

export default Signup;
