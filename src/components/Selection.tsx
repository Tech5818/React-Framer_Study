import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, scale: 0.5, transition: { duration: 0.2 } },
};

export const Selection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navigation initial={false} animate={isOpen ? "open" : "closed"}>
        <Button whileTap={{ scale: 0.95 }} onClick={() => setIsOpen(!isOpen)}>
          메뉴
          <Down
            variants={{
              open: {
                rotate: 180,
              },
              closed: {
                rotate: 0,
              },
            }}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </Down>
        </Button>
        <List
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 5px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 5px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          onClick={() => setIsOpen(false)}
        >
          <Item variants={itemVariants}>
            <StyledLink to="/">마운트</StyledLink>
          </Item>
          <Item variants={itemVariants}>
            <StyledLink to="/infinity">무한</StyledLink>
          </Item>
          <Item variants={itemVariants}>
            <StyledLink to="/scroll">스크롤</StyledLink>
          </Item>
        </List>
      </Navigation>
    </>
  );
};

const Navigation = styled(motion.nav)`
  display: flex;
  flex-flow: column;
  gap: 10px;
  position: relative;
`;
const Button = styled(motion.button)`
  width: 250px;
  background: #f2f2f7;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  padding: 10px;
  align-items: center;
  font-weight: bold;
  font-size: 22px;
  justify-content: space-between;
`;
const Down = styled(motion.div)``;
const List = styled(motion.ul)`
  width: 100%;
  background: #f2f2f7;
  display: flex;
  flex-flow: column;
  position: absolute;
  top: 115%;
  border-radius: 5px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
const Item = styled(motion.li)`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  &:not(:last-child) {
    border-bottom: 0.5px solid #d1d1d6;
  }
`;
const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
`;
