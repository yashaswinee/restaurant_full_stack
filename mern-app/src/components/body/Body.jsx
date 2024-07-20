import React from "react";
import Cards from "../../containers/cards/Cards";
import pizza from "../../assets/pizza.jpg";
import burger from "../../assets/burger.jpg";
import momos from "../../assets/momo.jpg";
import ramen from "../../assets/ramen.jpg";
import './body.css'

import Carousel from "../../containers/carousel/Carousel";

const CardsContent = [
  {
    image: pizza,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    image: burger,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    image: momos,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    image: ramen,
    description:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const Body = () => {
  return (
    <div className="section__padding">
      <Carousel img1={pizza} img2={burger} img3={momos} />
      <br />

      <div className="body__cards-container">
        {CardsContent.map((item, index) => (
          <Cards
            image={item.image}
            description={item.description}
            key={item.description + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
