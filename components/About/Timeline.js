import { useState } from "react";

import { SectionTitle, MiddleText } from "../../globalcomponents";
import { AiFillCaretRight } from "react-icons/ai";

import TimelineDetailed from "./TimelineDetailed";

const Timeline = () => {
  const [timeline, setTimeline] = useState(false);

  return (
    <>
      <SectionTitle sub timeline notmain other>
        Timeline
      </SectionTitle>

      <MiddleText timeline onClick={() => setTimeline(!timeline)}>
        <span>{timeline ? "Hide " : "View "}</span> timeline
      </MiddleText>
      <AiFillCaretRight className="icon" />

      {timeline ? <TimelineDetailed /> : ""}
    </>
  );
};

export default Timeline;
