import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./Scroll.js";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () =>
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false);

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
 
  },[]);

  return isVisible ? (
    <div className="scroll-top">
      <a href="#top">
        <ArrowUpwardIcon style={{ color: 'magenta', fontSize: '50px', float: "right", borderRadius: "50%", border: "1px solid white", marginRight: "18px", marginBottom: "20px"}} />
      </a>
    </div>
  ) : null;
};
