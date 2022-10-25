import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="p-heading">
        Some <span>projects</span> I've completed:
      </h2>
      <div className="p-cardSection">
        <div className="card card1">
          Project 1<div className="p-link">Explore</div>
        </div>
        <div className="card card2">Project 2</div>
        <div className="card card3">Project 3</div>
        <div className="card card4">Project 4</div>
        <div className="card card5">Project 5</div>
        <div className="card card6">Project 6</div>
      </div>
    </div>
  );
};

export default Projects;
