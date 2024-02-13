import { motion } from "framer-motion";
import styled from "styled-components";

const listVariant = {
  close: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariant = {
  close: {
    opacity: 0,
    y: "200%",
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const AnimateMount = () => {
  return (
    <>
      <Box
        initial={{ opacity: 0, scale: 0.8, y: "100%" }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
        }}
      ></Box>
      <Flex variants={listVariant} initial="close" animate="open">
        <SmallBox variants={itemVariant}></SmallBox>
        <SmallBox variants={itemVariant}></SmallBox>
        <SmallBox variants={itemVariant}></SmallBox>
        <SmallBox variants={itemVariant}></SmallBox>
        <SmallBox variants={itemVariant}></SmallBox>
      </Flex>
    </>
  );
};

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #007aff;
`;

const SmallBox = styled(motion.div)`
  width: 50px;
  height: 50px;
  background: #5ac8fa;
`;

const Flex = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
