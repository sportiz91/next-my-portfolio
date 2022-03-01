/*
  This component is shown by default, or when you click view timeline button.
*/

import { useState, useEffect, useRef } from "react";

import {
  TimeLineWrapper,
  TimeLineDiv,
  TimelineDetailedWrapperDiv,
  TimeLineDetailedWrappingNode,
  TimeLineDetailedDiv,
  TimeLinedDetailedYear,
  TimeLineDetailedDescription,
  TimeLineCirclesDiv,
  TimeLineCircleWrapper,
  TimeLineCircle,
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

    // console.log(`scroll: ${scroll}`);

    wrapper.scrollTo({ left: scroll, behavior: "smooth" });
  };

  const finishScrolling = () => {
    setTargetSlide(activeSlide);
    setDisabled(false);
  };

  const touchScroll = useIdle({
    timeout: 200,
    onIdle: finishScrolling,
  });

  const handleScroll = () => {
    const { scrollLeft } = wrapperRef.current;

    // console.log(`scrollLeft: ${scrollLeft}`);

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

  //Structure:
  //TimeLineWrapper -> TimeLineDiv + Circle Buttons Div.
  //TimeLineDiv -> Margin Top and Bottom (separation of circles buttons)
  //TimelineDetailedWrapperDiv -> ref + handleScroll
  //TimeDetailedWrappingNode -> Margin right. Only the first node has the ref, in order to calculate the margin
  //This is useful when scrolling, to calculate the activeSlide.
  //TimeLineDetailedDiv -> node without margin right. Height and width determined. The last one must be 100%, in order
  //For scrolling x bar to be the same width as the first part.
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
