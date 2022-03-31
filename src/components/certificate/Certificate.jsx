import { useState } from "react";
import "./certificate.scss"

export default function Certificate() {
 const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
     {
      id: "1",
      img:
        "assets/Kotlin.jpg",
    },
    {
      id: "2",
      img:
        "assets/flutter 2.0.jpg",
    },
    {
      id: "3",
      img:
       "assets/flutter 2.2.jpg",
    },
    {
      id: "4",
      img:
        "assets/flutter & dart.jpg",
    },
     {
      id: "5",
      img:
        "assets/flutter Firebase.jpg",
    },

   
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="certificate" id="certificates">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
                <img 
                  src={d.img}
                  alt=""
                />               
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}