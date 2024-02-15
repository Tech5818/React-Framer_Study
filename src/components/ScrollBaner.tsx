import { motion } from "framer-motion";
import styled from "styled-components";

const boxVariants = {
  close: {
    opacity: 0,
    y: "-50%",
    transition: {
      duration: 0.3,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
    },
  },
};

const longBoxVariants = {
  close: {
    opacity: 0,
    y: "50%",
    transition: {
      duration: 0.3,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
    },
  },
};

export const ScrollBaner = () => {
  return (
    <>
      <Container>
        <Box variants={boxVariants} initial="close" animate="open" />
        <LongBox variants={longBoxVariants} initial="close" animate="open" />
      </Container>
    </>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: calc(100vh - 90px);
  background: #f2f2f7;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-flow: column;
`;
const LongBox = styled(motion.div)`
  width: 500px;
  height: 100px;
  background: #ff3b30;
`;
const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #ff3b30;
`;
