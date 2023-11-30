import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import img01 from "../assets/BrowseRange/img01.svg";
import img02 from "../assets/BrowseRange/img02.svg";
import img03 from "../assets/BrowseRange/img03.svg";

const data = [
  { title: "Dining", image: img01 },
  { title: "Living", image: img02 },
  { title: "Bedroom", image: img03 },
];

function RangeProduct() {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
      {data.map((item, index) => (
        <Card title={item.title} key={index} image={item.image} />
      ))}
    </ScrollMenu>
  );
}
type scrollVisibilityApiType = React.ContextType<typeof VisibilityContext>;

function onWheel(apiObj: scrollVisibilityApiType, ev: React.WheelEvent): void {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    isFirstItemVisible || (
      <button className="scrollBtn-left" onClick={() => scrollPrev()}>
        <FaRegArrowAltCircleLeft size={50} />
      </button>
    )
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    isLastItemVisible || (
      <button className="scrollBtn-right" onClick={() => scrollNext()}>
        <FaRegArrowAltCircleRight size={50} />
      </button>
    )
  );
}

interface CardProps {
  title: string;
  image: string;
}

function Card({ title, image }: CardProps) {
  return (
    <div className="range-card" tabIndex={0}>
      <img src={image} alt="" />
      <h2>{title}</h2>
    </div>
  );
}

export default RangeProduct;
