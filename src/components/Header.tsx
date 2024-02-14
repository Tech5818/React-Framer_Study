import styled from "styled-components";
import { Selection } from "./Selection";
import { Tab } from "./Tab";

const Header = () => {
  return (
    <>
      <Contianer>
        <Selection />
        <Tab />
      </Contianer>
    </>
  );
};

const Contianer = styled.div`
  width: 100%;
  height: 90px;
  box-shadow: 0 2px 5px -2px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: flex;
  padding: 0 30px;
  align-items: center;
  gap: 50px;
`;

export default Header;
