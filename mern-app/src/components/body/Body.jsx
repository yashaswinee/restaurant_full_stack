import { React, useState, useEffect } from "react";
import Cards from "../cards/Cards";
import pizza from "../../assets/pizza.jpg";
import burger from "../../assets/burger.jpg";
import momos from "../../assets/momo.jpg";
import "./body.css";

import Carousel from "../carousel/Carousel";

const Body = () => {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    let response = await fetch("http://localhost:5000/api/foodItems", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    response = await response.json();
    setFoodCat(response[1]);
    setFoodItem(response[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="section__padding">
      <Carousel
        img1={pizza}
        img2={burger}
        img3={momos}
        search={search}
        setSearch={setSearch}
      />
      <br />

      <div className="body__cards-container">
        {foodItem != []
          ? foodItem
              .filter((item) => {
                const itemName = item.name.toLowerCase();
                const searchQuery = search.toLowerCase();
                return itemName.includes(searchQuery);
              })
              .map((item, index) => {
                return (
                  <Cards
                    title={item.name}
                    image={item.img}
                    description={item.description}
                    options={Object.entries(item.options[0])}
                    key={item.description + index}
                  />
                );
              })
          : "No items found"}
      </div>
    </div>
  );
};

export default Body;
