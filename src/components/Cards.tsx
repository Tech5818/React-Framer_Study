import { motion } from "framer-motion";
import styled from "styled-components";
import { Card } from "./Card";

export const Cards = () => {
  return (
    <>
      <Container>
        <Content>
          <CardContianer>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </CardContianer>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.div`
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

const CardContianer = styled.div`
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  margin: 0 auto;
`;
