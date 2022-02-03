import React from "react";
import { motion } from 'framer-motion'

const NavLinks = (props) => {
  const animateFrom = {opacity: 0, y:-40}
  const animateTo = { opacity: 1, y: 0 }
  
  return (
    <div>
      <ul className="nav-ul">
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.05}}
          className="nav-li"
          onClick={() => props.isMobile ? props.closeMobileMenu() : null}
        >
          <a className="nav-link" href="/">Home</a>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.10}}
          className="nav-li"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a className="nav-link" href="/#about">
            About
          </a>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.20}}
          className="nav-li"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a className="nav-link" href="/#skills">Skills</a>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.30}}
          className="nav-li"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a className="nav-link" href="/#portfolio">Portfolio</a>
        </motion.li>

        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{delay: 0.40}}
          className="nav-li"
          onClick={() => props.isMobile && props.closeMobileMenu()}
        >
          <a className="nav-link" href="/#contact">Contact</a>
        </motion.li>
      </ul>
    </div>
  );
};

export default NavLinks;
