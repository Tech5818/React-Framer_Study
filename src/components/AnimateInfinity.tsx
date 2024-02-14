import { motion } from "framer-motion";
import styled from "styled-components";

const AnimateInfinity = () => {
  return (
    <>
      <Container>
        <Box
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0, 2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        ></Box>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: calc(100vh - 90px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #af52de;
`;

export default AnimateInfinity;
