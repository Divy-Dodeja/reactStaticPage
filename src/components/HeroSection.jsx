import React, { useState } from "react";
import "./HeroSection.css";
import pepsiCan from "../public/pepsiCan.png";
import Card from "./Card";
import { LuRectangleVertical } from "react-icons/lu";
import { LiaWineBottleSolid } from "react-icons/lia";
import pepsi1L from "../public/pepsi1l.png";
import pepsi2L from "../public/pepsi2l.png";
import pepsiSoda from "../public/pepsiSoda.png";
import pepsiBottle from "../public/pepsi500.png";
import pepsi15L from "../public/pepsi15l.png";
import { nutritionFactsData } from "./data";

const HeroSection = () => {
  const [selectedBottle, setSetselectedBottle] = useState({
    1: false,
    2: true,
    3: false,
    4: false,
    5: false,
    6: false,
  });
  const [data, setData] = useState(nutritionFactsData[1]);

  const handleSelected = (index) => {
    let obj = {
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
      6: false,
    };
    obj[index] = !obj[index];
    setSetselectedBottle(obj);
    setData(nutritionFactsData[index - 1]);
  };

  return (
    <div className="hero-container">
      <div>
        <div>
          <h1 className="hero-title">Pepsi Classic</h1>
          <p className="hero-description">
            Carbonated Water, High Fructose, Corn Syrup, Caramel Color, Sugar,
            Phosphoric Acid, Caffeine, Citric Acid, Natural Flavor
          </p>
        </div>
        <div className="facts">
          <h5 className="hero-subtitle">Nutrition Facts</h5>
          <Card data={data} />
          <p className="disclaimer">
            Not a significant source of other nutrients.
          </p>
          <p className="disclaimer">
            *Percent Daily Values are based on a 2,000 calorie diet
          </p>
        </div>
        <div>
          <a href="#buy-products" className="btn btn-small">
            buy now
          </a>
        </div>
        <div>
          <div className="bottleList">
            <div className="bottle">
              <LiaWineBottleSolid
                size={"35px"}
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["1"] ? "#a2a2a2" : "white",
                }}
                onClick={() => handleSelected(1)}
              />
              <p
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["1"] ? "#a2a2a2" : "white",
                }}
              >
                0.3
              </p>
            </div>
            <div className="bottle">
              <LuRectangleVertical
                size={"30px"}
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["2"] ? "#a2a2a2" : "white",
                }}
                onClick={() => handleSelected(2)}
              />
              <p
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["2"] ? "#a2a2a2" : "white",
                }}
              >
                0.33
              </p>
            </div>
            <div className="bottle">
              <LiaWineBottleSolid
                size={"40px"}
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["3"] ? "#a2a2a2" : "white",
                }}
                onClick={() => handleSelected(3)}
              />
              <p
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["3"] ? "#a2a2a2" : "white",
                }}
              >
                0.5
              </p>
            </div>
            <div className="bottle">
              <LiaWineBottleSolid
                size={"50px"}
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["4"] ? "#a2a2a2" : "white",
                }}
                onClick={() => handleSelected(4)}
              />
              <p
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["4"] ? "#a2a2a2" : "white",
                }}
              >
                1
              </p>
            </div>
            <div className="bottle">
              <LiaWineBottleSolid
                size={"57px"}
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["5"] ? "#a2a2a2" : "white",
                }}
                onClick={() => handleSelected(5)}
              />
              <p
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["5"] ? "#a2a2a2" : "white",
                }}
              >
                1.5
              </p>
            </div>
            <div className="bottle">
              <LiaWineBottleSolid
                size={"65px"}
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["6"] ? "#a2a2a2" : "white",
                }}
                onClick={() => handleSelected(6)}
              />
              <p
                style={{
                  cursor: "pointer",
                  color: !selectedBottle["6"] ? "#a2a2a2" : "white",
                }}
              >
                2
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {selectedBottle["1"] && (
          <img className="hero-img" alt="pepsiSoda" src={pepsiSoda} />
        )}
        {selectedBottle["2"] && (
          <img className="hero-img" alt="pepsiCan" src={pepsiCan} />
        )}
        {selectedBottle["3"] && (
          <img className="hero-img" alt="pepsiBottle" src={pepsiBottle} />
        )}
        {selectedBottle["4"] && (
          <img className="hero-img" alt="pepsi1l" src={pepsi1L} />
        )}
        {selectedBottle["5"] && (
          <img className="hero-img" alt="pepsi15l" src={pepsi15L} />
        )}
        {selectedBottle["6"] && (
          <img className="hero-img" alt="pepsi2l" src={pepsi2L} />
        )}
      </div>
      <div className="corner-div">
        <div className="upper-div">
          <p className="corner-head">{data.quantity}</p>
          <p className="sub-text">Serving Size: 1 serving per container </p>
        </div>
        <div className="lower-div"></div>
      </div>
    </div>
  );
};

export default HeroSection;
