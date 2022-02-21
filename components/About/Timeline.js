import { useState } from "react";

import {
  SectionTitle,
  MiddleText,
  AnchorNavMenuOrShow,
} from "../../globalcomponents";
import { AiFillCaretRight } from "react-icons/ai";

import TimelineDetailed from "./TimelineDetailed";

const Timeline = () => {
  const [timeline, setTimeline] = useState(true);

  return (
    <>
      <SectionTitle links>Timeline</SectionTitle>

      <AnchorNavMenuOrShow show>
        <MiddleText view onClick={() => setTimeline(!timeline)}>
          <span>{timeline ? "Hide " : "View "}</span> timeline
        </MiddleText>
        <AiFillCaretRight className="icon" />
      </AnchorNavMenuOrShow>

      {timeline ? <TimelineDetailed /> : ""}
    </>
  );
};

export default Timeline;
