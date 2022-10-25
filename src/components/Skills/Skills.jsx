import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

import GitIcon from "../../img/git.png";
import JavaIcon from "../../img/java.png";
import JavaScriptIcon from "../../img/javascript.svg";
import MongoIcon from "../../img/mongo.png";
import ReactIcon from "../../img/react.png";

const Skills = () => {
  return (
    <div className="skills">
      <div className="s-heading">
        <h2>
          My <span>skills</span> include...
        </h2>
      </div>
      <div className="s-spin">
        <motion.div
          className="s-primaryCircle"
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          // viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <div className="s-secCircle">
            <img src={JavaScriptIcon} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={JavaIcon} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={GitIcon} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={MongoIcon} alt="" />
          </div>
          <div className="s-secCircle">
            <img src={ReactIcon} alt="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
