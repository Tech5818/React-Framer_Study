import { moiton, motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const AnimateScroll = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);

  const styleBar = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
      <Container>
        <Bar style={{ scaleX: scrollYProgress }} />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 200vh;
  position: relative;
`;
const Bar = styled(motion.div)`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  transform-origin: 0%;
  background: #ff3b30;
`;

export default AnimateScroll;
