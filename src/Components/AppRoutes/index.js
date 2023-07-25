import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../../Pages/Dashbaord";

import Accountpage from "../../Pages/chatbotn/Accountpage";
import Accountmanagement from "../../Pages/chatbotn/Accountmanagement";
import Accountbalance from "../../Pages/chatbotn/Accountbalance";
import Accountlogin from "../../Pages/chatbotn/Accountlogin";
import Accountloging from "../../Pages/chatbotn/Accountloging";
import Accountministatement from "../../Pages/chatbotn/Accountministatement";
import Accountcheque from "../../Pages/chatbotn/Accountcheque";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/account" element={<Dashboard />}></Route>
      <Route path="/page" element={<Accountpage />} />
      <Route path="/accountpage" element={<Accountmanagement />} />
      <Route path="/accountbalance" element={<Accountbalance />} />
      <Route path="/accountlogin" element={<Accountlogin />} />
      <Route path="/accountloging" element={<Accountloging />} />
      <Route path="/accountminists" element={<Accountministatement />} />
      <Route path="/accountcheque" element={<Accountcheque />} />
    </Routes>
  );
}
export default AppRoutes;
