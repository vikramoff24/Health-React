import React, { useEffect, useState } from "react";
import Hero from "../components/HomePage/Hero";
import HeroCategory from "../components/HomePage/HeroCategory";
import { db } from "../firebase";
const HomePage = (props) => {
  const [data, setData] = useState([]);
  const ref = db.collection("doctors");

  useEffect(() => {
    ref.onSnapshot((querySnapshot) => {
      var items = [];
      console.log(querySnapshot);
      querySnapshot.forEach((doc) => {
        console.log(doc);
        items.push(doc.data());
      });
      setData(items);
      console.log(items);
    });
  }, []);
  return (
    <div>
      <Hero />
      <HeroCategory />
    </div>
  );
};

export default HomePage;
