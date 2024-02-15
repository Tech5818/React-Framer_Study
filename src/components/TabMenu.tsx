import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface TabMenuProps {
  children: React.ReactNode;
  path: string;
}

export const TabMenu = ({ children, path }: TabMenuProps) => {
  const [isTab, setIsTab] = useState(false);

  useEffect(() => {
    console.log(isTab);
  }, [isTab]);

  return (
    <>
      <StyledTabMenu
        initial={false}
        animate={isTab ? "open" : "closed"}
        whileTap={{
          scale: 0.95,
        }}
        onMouseDown={() => setIsTab(true)}
        onMouseUp={() => setIsTab(false)}
        onMouseLeave={() => setIsTab(false)}
      >
        <Box
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 30px)",
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.2,
              },
            },
            closed: {
              clipPath: "inset(50% 50% 50% 50% round 30px)",
              opacity: 0,
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.2,
              },
            },
          }}
        />
        <StyledLink to={path}>{children}</StyledLink>
      </StyledTabMenu>
    </>
  );
};

const StyledTabMenu = styled(motion.div)`
  font-size: 20px;
  width: 150px;
  cursor: pointer;
  position: relative;
  z-index: 1;
`;
const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  user-select: none;
  padding: 8px;
`;
const Box = styled(motion.div)`
  background: #e5e5ea;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;
