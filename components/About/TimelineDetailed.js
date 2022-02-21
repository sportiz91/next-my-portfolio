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
  TimeLineWrapper,
  TimeLineDetailedDiv,
  TimelineDetailedWrapperDiv,
  TimeLineDiv,
  TimeLineCirclesDiv,
  TimeLineCircle,
  TimeLineCircleWrapper,
} from "./TimeLineStyles";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import useIdle from "../../hooks/useIdle";

import data from "../../utils/data";

const TimelineDetailed = () => {
  const TIMELINE_LENGTH = data.timeline.length;
  const [targetSlide, setTargetSlide] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const wrapperRef = useRef(null);
  const yearRef = useRef(null);
  const nodeRef = useRef(null);

  const scrollToTargetSlide = () => {
    const wrapper = wrapperRef.current;
    const year = yearRef.current;
    const scroll = year.offsetLeft;

    wrapper.scrollTo({ left: scroll, behavior: "smooth" });
  };

  const finishScrolling = () => {
    setTargetSlide(activeSlide);
    setDisabled(false);
  };

  const touchScroll = useIdle({
    timeout: 50,
    onIdle: finishScrolling,
  });

  const handleScroll = () => {
    const { scrollLeft } = wrapperRef.current;
    const style =
      nodeRef.current.currentStyle || window.getComputedStyle(nodeRef.current);
    const margin = parseInt(style.marginRight.split("p")[0]);
    const width = yearRef.current.getBoundingClientRect().width;

    setActiveSlide(Math.round(scrollLeft / (width + margin)));

    setDisabled(true);
    touchScroll();
  };

  const handleDiv = (index) => {
    if (disabled) return;
    setTargetSlide(index);
  };

  const handleLeft = () => {
    if (disabled) return;
    setTargetSlide(Math.max(targetSlide - 1, 0));
  };

  const handleRight = () => {
    if (disabled) return;
    setTargetSlide(Math.min(TIMELINE_LENGTH - 1, targetSlide + 1));
  };

  useEffect(() => {
    scrollToTargetSlide();
  }, [targetSlide]);

  return (
    <TimeLineWrapper>
      <TimeLineDiv>
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
                  onClick={() => handleDiv(index)}
                  ref={targetSlide === index ? yearRef : null}
                  last={TIMELINE_LENGTH - 1 === index ? true : false}
                  active={activeSlide === index}
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
      </TimeLineDiv>

      <TimeLineCirclesDiv>
        <AiFillCaretLeft className="icon" onClick={handleLeft} />
        {data.timeline.map((item, index) => {
          return (
            <TimeLineCircleWrapper
              key={index}
              onClick={() => setTargetSlide(index)}
            >
              <TimeLineCircle clicked={activeSlide === index} />
            </TimeLineCircleWrapper>
          );
        })}
        <AiFillCaretRight className="icon" onClick={handleRight} />
      </TimeLineCirclesDiv>
    </TimeLineWrapper>
  );
};

export default TimelineDetailed;
