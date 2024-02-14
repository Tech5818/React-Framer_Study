import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { TabMenu } from "./TabMenu";

export const Tab = () => {
  const location = useLocation();
  const [path, setPath] = useState(0);

  useEffect(() => {
    const changeStatePath = () => {
      // eslint-disable-next-line no-empty
      switch (location.pathname) {
        case "/":
          setPath(0);
          break;
        case "/infinity":
          setPath(1);
          break;
        case "/scroll":
          setPath(2);
          break;
      }
    };
    changeStatePath();
  }, [location, path]);
  return (
    <>
      <Navigation>
        <TabMenus>
          <TabMenu path="/">마운트</TabMenu>
          <TabMenu path="/infinity">무한</TabMenu>
          <TabMenu path="/scroll">스크롤</TabMenu>
          <Bar $path={path} />
        </TabMenus>
      </Navigation>
    </>
  );
};

const Navigation = styled.nav`
  display: flex;
`;
const TabMenus = styled(motion.div)`
  display: flex;
  border-bottom: 0.3px solid #d1d1d6;
  background: #f2f2f7;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  position: relative;
`;
const Bar = styled(motion.div)<{ $path: number }>`
  width: 150px;
  height: 0.3px;
  background: #007aff;
  position: absolute;
  top: 100%;
  left: ${({ $path }) => $path * 150}px;
  transition: 0.25s left;
`;
