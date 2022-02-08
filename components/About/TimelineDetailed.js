/*
  IMPORTANT THING TO NOTE: Whenever I have an overflow (x in this case), the resulting scroll bar if I overflow: auto or overflow: scroll
  will have the width/height of the current overflow. In here we have a wrapper div of about 1300px, but the max-width was determined at about
  945px. So, an overflow-x of 1300-945 is made. Maximum scroll width will be of that amount (356). To overcome that, I have to make the last
  div 100%.
*/

import { useState, useEffect, useRef } from "react";

import {
  TimeLinedDetailedYear,
  TimeLineDetailedDescription,
  TimeLineDetailedWrappingNode,
  TimeLineDetailedDiv,
  TimelineDetailedWrapperDiv,
  TimeLineDiv,
} from "./TimeLineStyles";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import data from "../../utils/data";

const TimelineDetailed = () => {
  const TIMELINE_LENGTH = data.timeline.length;
  const [targetSlide, setTargetSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const wrapperRef = useRef(null);
  const yearRef = useRef(null);
  const nodeRef = useRef(null);

  const scrollToTargetSlide = () => {
    const wrapper = wrapperRef.current;
    const year = yearRef.current;
    const scroll = year.offsetLeft;

    wrapper.scrollTo({ left: scroll, behavior: "smooth" });

    setActiveSlide(targetSlide);
  };

  const handleScroll = () => {
    const { scrollLeft } = wrapperRef.current;
    const style =
      nodeRef.current.currentStyle || window.getComputedStyle(nodeRef.current);
    const margin = parseInt(style.marginRight.split("p")[0]);
    const width = yearRef.current.getBoundingClientRect().width;

    console.log(scrollLeft);
    console.log(margin);
    console.log(width);

    setTargetSlide(Math.round(scrollLeft / (width + margin)));
  };

  const handleLeft = () => {
    setTargetSlide(Math.max(targetSlide - 1, 0));
  };

  const handleRight = () => {
    setTargetSlide(Math.min(TIMELINE_LENGTH - 1, targetSlide + 1));
  };

  useEffect(() => {
    scrollToTargetSlide();
  }, [targetSlide]);

  return (
    <TimeLineDiv>
      <AiFillCaretLeft size={"3rem"} className="icon" onClick={handleLeft} />

      <TimelineDetailedWrapperDiv ref={wrapperRef} onScroll={handleScroll}>
        {data.timeline.map((item, index) => {
          return (
            <TimeLineDetailedWrappingNode
              key={index}
              last={TIMELINE_LENGTH - 1 === index ? true : false}
              ref={index === 0 ? nodeRef : null}
            >
              <TimeLineDetailedDiv
                index={index}
                onClick={() => setTargetSlide(index)}
                ref={targetSlide === index ? yearRef : null}
                last={TIMELINE_LENGTH - 1 === index ? true : false}
              >
                <TimeLinedDetailedYear>{item.year}</TimeLinedDetailedYear>
                <TimeLineDetailedDescription>
                  {item.description}
                </TimeLineDetailedDescription>
              </TimeLineDetailedDiv>
            </TimeLineDetailedWrappingNode>
          );
        })}
      </TimelineDetailedWrapperDiv>

      <AiFillCaretRight size={"3rem"} className="icon" onClick={handleRight} />
    </TimeLineDiv>
  );
};

export default TimelineDetailed;
