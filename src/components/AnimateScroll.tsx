import { motion, useScroll } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { ScrollBaner } from "./ScrollBaner";
import { Cards } from "./Cards";

const AnimateScroll = () => {
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log(scrollYProgress);
  }, [scrollYProgress]);
  return (
    <>
      <Container>
        <BarContianer>
          <Bar style={{ scaleX: scrollYProgress }} />
        </BarContianer>
        <ScrollBaner />
        <Cards />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 200vh;
  position: relative;
`;
const BarContianer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #f2f2f7;
`;
const Bar = styled(motion.div)`
  transform-origin: 0%;
  background: #ff3b30;
  height: 100%;
`;

export default AnimateScroll;
