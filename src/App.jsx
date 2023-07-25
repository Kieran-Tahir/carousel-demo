import "./styles/index.scss";
import Image from "./Image";
import React, { useState } from "react";

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let images = [
    {
      src: "/fish.jpeg",
      link: "https://modestfish.com/colorful-freshwater-fish/"
    },
    {
      src: "/shark.jpg",
      link: "https://modestfish.com/colorful-freshwater-fish/"

    },
    {
      src: "/shark2.avif",
      link: "https://modestfish.com/colorful-freshwater-fish/"

    },
    {
      src: "/gold.webp",
      link: "https://modestfish.com/colorful-freshwater-fish/"

    },
    {
      src: "/blue.jpeg",
      link: "https://modestfish.com/colorful-freshwater-fish/"
    },
  ];

  function nextImage() {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <>
      <div className="App">
        <div className="image-row">
          <div className="image-container">
            <img
              src={
                currentImageIndex === 0
                  ? images[images.length - 1].src
                  : images[currentImageIndex - 1].src
              }
              alt="1"
            />
            <button class="transparent-button left-button" onClick={prevImage}></button>
          </div>
          <div className="image-container middle-image-container">
            <a href={images[currentImageIndex].link}><img src={images[currentImageIndex].src} alt="2"/></a>
          </div>
          <div className="image-container">
            <img
              src={
                currentImageIndex === 4
                  ? images[0].src
                  : images[currentImageIndex + 1].src
              }
              alt="3"
            />
            <button className="transparent-button right-button" onClick={nextImage}></button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
