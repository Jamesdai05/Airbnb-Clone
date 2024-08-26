import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Login from "./pages/Login";
import Layout from "./Components/Layout";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
