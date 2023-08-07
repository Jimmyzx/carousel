import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";

// /** Carousel: displays images and arrows to navigate through them
//  * 
//  * Props:
//  * - photos: array of {src, caption} objects
//  * - title: string describing the collection of images
//  * 
//  * State:
//  * - currCardIdx: integer for current card index
//  * 
//  * App --> Carousel --> Card
//  */

function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);
  const total = photos.length;



// const [leftArrowVisible, setLeftArrowVisible] = useState(false);
// const [rightArrowVisible, setRightArrowVisible] = useState(true);

  // Hide left arrow on the first card
  const leftArrowVisible = currCardIdx > 0;

  // Hide right arrow on the last card
  const rightArrowVisible = currCardIdx < total - 1;

  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  function goBackwards() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        {leftArrowVisible && (
          <i className="bi bi-arrow-left-circle" onClick={goBackwards} />
        )}
        <Card
          caption={photos[currCardIdx].caption}
          src={photos[currCardIdx].src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        {rightArrowVisible && (
          <i className="bi bi-arrow-right-circle" onClick={goForward} />
        )}
      </div>
    </div>
  );
}

export default Carousel;


// If you remember last night we at least impemented a goForward and goBackwards button. So you need to add those to your code
// The hint I can give you is that to make your left and right arrows appear and disappear you will need state variables that are true when an arrow should appear and false otherwise. Like so:
//   const [leftArrowVisible, setLeftArrowVisible] = useState(false);
//   const [rightArrowVisible, setRightArrowVisible] = useState(true);
// and set their values in the goForward, goBackward functions. Then you use their values like i (tried) to do in the jsx code.
// My problem was that the values I used were not in state and needed to be