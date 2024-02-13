import styled from "styled-components";
import { AnimateMount } from "./components/AnimatedMount";

function App() {
  return (
    <>
      <Container>
        <AnimateMount />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  padding: 20px;
  flex-wrap: wrap;
`;

export default App;
