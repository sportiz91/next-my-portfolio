import { useState, useEffect, useRef } from "react";

import {
  TimeLinedDetailedYear,
  TimeLineDetailedDescription,
  TimeLineDetailedDiv,
  TimelineDetailedWrapperDiv,
  TimeLineDiv,
} from "./TimeLineStyles";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import data from "../../utils/data";

const TimelineDetailed = () => {
  const [targetSlide, setTargetSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const wrapperRef = useRef(null);
  const yearRef = useRef(null);

  const scrollToTargetSlide = () => {
    const wrapper = wrapperRef.current;
    const year = yearRef.current;

    console.log(wrapper);
    console.log(year);

    const scroll = year.offsetLeft;

    console.log(scroll);

    wrapper.scrollTo({ left: scroll, behavior: "smooth" });
  };

  useEffect(() => {
    scrollToTargetSlide();
  }, [targetSlide]);

  return (
    <TimeLineDiv>
      <AiFillCaretLeft size={"3rem"} className="icon" />

      <TimelineDetailedWrapperDiv ref={wrapperRef}>
        {data.timeline.map((item, index) => {
          return (
            <TimeLineDetailedDiv
              key={index}
              onClick={() => setTargetSlide(index)}
              ref={targetSlide === index ? yearRef : null}
            >
              <TimeLinedDetailedYear>{item.year}</TimeLinedDetailedYear>
              <TimeLineDetailedDescription>
                {item.description}
              </TimeLineDetailedDescription>
            </TimeLineDetailedDiv>
          );
        })}
      </TimelineDetailedWrapperDiv>

      <AiFillCaretRight size={"3rem"} className="icon" />
    </TimeLineDiv>
  );
};

export default TimelineDetailed;
