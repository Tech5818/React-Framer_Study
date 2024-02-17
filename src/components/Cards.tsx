import { Variants, motion } from "framer-motion";
import styled from "styled-components";
import { Card } from "./Card";

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    y: "50%",
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const Cards = () => {
  return (
    <>
      <Container initial="closed" animate="open">
        <Content>
          <CardContianer
            variants={{
              open: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
              closed: {},
            }}
            whileInView={{
              transition: {},
            }}
          >
            <Card variants={itemVariants} />
            <Card variants={itemVariants} />
            <Card variants={itemVariants} />
            <Card variants={itemVariants} />
            <Card variants={itemVariants} />
            <Card variants={itemVariants} />
            <Card variants={itemVariants} />
          </CardContianer>
        </Content>
      </Container>
    </>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  background: #f9f9f9;
`;

const Content = styled.div`
  width: 1300px;
  height: 100%;
  display: flex;
  padding: 50px 35px;
  display: flex;
  flex-flow: column;
`;

const CardContianer = styled(motion.div)`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  margin: 0 auto;
`;
