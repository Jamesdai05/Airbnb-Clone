import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Login from "./pages/Login";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <div>
        <main>Here is Body</main>
      </div>
    </>
  );
}

export default App;
