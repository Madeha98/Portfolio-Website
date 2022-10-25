import React from "react";
import "./Intro.css";
import { motion } from "framer-motion";

import RightArrow from "@iconscout/react-unicons/icons/uil-arrow-circle-right";

const Intro = () => {
  const transition = { duration: 1, type: "spring" };

  return (
    <div className="intro">
      <div className="i-title">
        <motion.h1
          className="pink"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={transition}
          // animate={{ x: 100 }}
        >
          Hello.
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        >
          I'm Madeha,
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
        >
          a <span className="pink">software developer.</span>
        </motion.h1>
        <motion.h6
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1.2,
          }}
        >
          With experience in frontend and backend development.
        </motion.h6>
      </div>

      <motion.div
        className="i-arrow"
        animate={{ y: 20 }}
        transition={{
          // delay: 4,
          // //duration: 0.5,
          // type: "spring",
          // damping: 1,
          // repeat: Infinity,
          // // repeatType: "reverse",
          // repeatDelay: 5,

          type: "spring",
          delay: 4,
          duration: 3,
          bounce: 0.8,
          repeat: Infinity,
          repeatDelay: 1.5,
        }}
      >
        &#8595;
      </motion.div>

      <div className="i-right">
        <motion.div
          className="i-box1 i-textbox"
          // initial={{ x: 500 }}
          // whileInView={{ x: 0 }}
          // transition={{
          //   duration: 2,
          //   type: "spring",
          // }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          <p>
            Currently a <span>Tech Specialist</span> at QA Ltd,
            <br />
            working with full-stack technologies.
          </p>

          <div className="i-line"></div>

          <motion.div
            className="i-link"
            whileHover={{
              scale: 0.8,
            }}

            // transition={{
            //   background: {
            //     duration: 2,
            //     repeat: Infinity,
            //     ease: "linear",
            //   },
            // }}
          >
            <a href="#">
              <p>
                Read more
                <span className="i-linkBtn">
                  <RightArrow size="2rem" />
                </span>
              </p>
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="i-box2 i-textbox"
          // initial={{ x: 500 }}
          // whileInView={{ x: 0 }}
          // transition={{
          //   duration: 2,
          // }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          <p>
            Based in <span>London</span>, UK.
          </p>

          <div className="i-line"></div>
        </motion.div>
        <motion.div
          className="i-box3 i-textbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          <p>
            Read how I created this website
            <br />
            from <span>scratch</span>.
          </p>

          <div className="i-line"></div>

          <motion.div
            className="i-link"
            whileHover={{
              scale: 0.8,
            }}
          >
            <a href="#">
              <p>
                Explore
                <span className="i-linkBtn">
                  <RightArrow size="2rem" />
                </span>
              </p>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
