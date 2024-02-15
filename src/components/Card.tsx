import { motion } from "framer-motion";
import styled from "styled-components";

export const Card = () => {
  return (
    <>
      <StyledCard></StyledCard>
    </>
  );
};
const StyledCard = styled(motion.div)`
  width: 270px;
  height: 300px;
  box-shadow: 0 0 20px -10px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
`;
