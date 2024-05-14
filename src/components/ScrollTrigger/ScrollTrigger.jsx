import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const ScrollTrigger = ({ onEnter, onLeave, children }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Adjust this value as needed
    triggerOnce: false, // Set to true if you want the callback only once
  });

  useEffect(() => {
    if (inView) {
      if (onEnter) onEnter();
    } else {
      if (onLeave) onLeave();
    }
  }, [inView, onEnter, onLeave]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollTrigger;
