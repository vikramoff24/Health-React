/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import { css, jsx } from "@emotion/react";
import Logo from "./Logo";
import Profile from "../../assets/Person.png";
import i from "../../assets/Icons/dashboard.svg";
import { menuItems, logOut } from "../Data/SidebarData";
import MenuItem from "./MenuItem";
import { auth, db, logout } from "../../firebase";

const Sidebar = () => {
  const [user, loading, error] = useAuthState(auth);

  const history = useHistory();
  const [name, setName] = useState("");

  const fetchUserName = async () => {
    // try {
    // console.log(user?.uid);
    // console.log(user);
    // const query = await db.collection("Client").get();
    // console.log(query);
    // if (query.size > 0) {
    //   const data = await query.docs[0].data();
    //   console.log(data);
    //   console.log("now");
    //   setName(data.name);
    // } else {
    //   console.log("No such document!");
    // }
    try {
      //   const query = await db
      //     .collection("users")
      //     .where("uid", "==", user?.uid)
      //     .get();
      //   const data = await query.docs[0].data();
      //   setName(data.name);
      // } catch (err) {
      //   console.error(err);
      //   alert("An error occured while fetching user data");
      // }
    } catch (err) {
      console.error(err);
      // alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) {
      console.log("no user");
      return;
    }
    if (user) {
      // fetchUserName();
      setName(user.displayName);
    }
  }, [user, loading]);
  return (
    <div
      css={css`
        box-shadow: 4px 0px 16px rgba(51, 57, 68, 0.12);
        width: 290px;
        height: 720px;
      `}
    >
      <div
        css={css`
          margin: 0 auto;
          width: fit-content;
          padding-top: 15px;
        `}
      >
        {" "}
        <Logo />
      </div>
      <div
        css={css`
          text-align: center;
        `}
      >
        <img
          src={Profile}
          alt="profile"
          css={css`
            width: 65px;
            margin: 0 auto;
            margin-top: 30px;
            display: block;
          `}
        />

        <p
          css={css`
            font-size: 19px;
            letter-spacing: 0.1px;
            margin-top: 10px;
            color: rgba(136, 136, 136, 0.75);
          `}
        >
          Admin
        </p>
        <p
          css={css`
            font-weight: 500;
            font-size: 25px;
            line-height: 20px;
            letter-spacing: 0.1px;
            color: #333944;
            margin-top: 20px;
          `}
        >
          {" "}
          {name}
        </p>
      </div>
      <div
        css={css`
          padding-top: 30px;
          width: fit-content;
          margin: 0 auto;
          padding-right: 35px;
        `}
      >
        {" "}
        {menuItems.map((item) => (
          <MenuItem item={item} />
        ))}{" "}
      </div>
      <div
        css={css`
          border-top: 1px solid rgba(136, 136, 136, 0.5);
          margin-top: 18px;
        `}
      ></div>
      <div
        css={css`
          margin: 0 auto;
          margin-top: 20px;
          width: 217px;
          padding-right: 35px;
        `}
      >
        {" "}
        <div onClick={logout}>
          <MenuItem item={logOut[0]} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
