import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./Pages/HomePage";
import ViewReports from "./Pages/ViewReports";
import ViewCase from "./Pages/ViewCase";
import Map from "./Pages/Map";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/reports" element={<ViewReports />} />
          <Route path="/case/:id" element={<ViewCase />} />
          <Route path="/map" element={<Map />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
