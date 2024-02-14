import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";
import Header from "./components/Header";

const AnimateMount = loadable(() => import("./components/AnimateMount"));
const AnimateInfinity = loadable(() => import("./components/AnimateInfinity"));
const AnimateScroll = loadable(() => import("./components/AnimateScroll"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AnimateMount />} loader={AnimateMount.load} />
        <Route
          path="/infinity"
          element={<AnimateInfinity />}
          loader={AnimateInfinity.load}
        />
        <Route
          path="/scroll"
          element={<AnimateScroll />}
          loader={AnimateScroll.load}
        />
      </Routes>
    </>
  );
}

export default App;
