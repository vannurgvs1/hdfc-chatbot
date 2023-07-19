import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord";


function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/account" element={<Dashboard />}></Route>
    </Routes>
  );
}
export default AppRoutes;
