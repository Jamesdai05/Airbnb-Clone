import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Header />} />
      </Routes>
      <div>
        <main>Here is Body</main>
      </div>
    </>
  );
}

export default App;
