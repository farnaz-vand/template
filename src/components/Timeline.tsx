import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="timeline-card"
            date="2022 - present"
            iconClassName="timeline-icon"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Technology Consultant
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Dallas, TX</h4>
            <p>
              Full-stack Web Development, GenAI/LLM, Project Management,
              Business Development
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-card"
            date="2020 - 2022"
            iconClassName="timeline-icon"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tehran</h4>
            <p>
              Frontend Development, Backend Development, User Experience, Team
              Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-card"
            date="2021 - 2021"
            iconClassName="timeline-icon"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Staff Engineer Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Tehran</h4>
            <p>Full-stack Development, API Development, User Experience</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="timeline-card"
            date="2020 - 2020"
            iconClassName="timeline-icon"
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Data Analyst Intern
            </h3>
            <h4 className="vertical-timeline-element-subtitle">iran, Tehran</h4>
            <p>Automation, Data Governance, Statistical Analysis</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
