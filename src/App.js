import "./App.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { AppProvider } from "./context/context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import Topbar from "./Components/Topbar";
import PendingQueries from "./Components/DashboardPages/PendingQueries";
import Complaints from "./Components/DashboardPages/Complaints";
import Rejected from "./Components/DashboardPages/Rejected";
import Primary from "./Components/DashboardPages/Primary";
import Weekly from "./Components/Reports/Weekly";
import DemographicReport from "./Components/Reports/DemographicReport";
import DailyReport from "./Components/Reports/DailyReport";
import Advancesettings from "./Components/Maintainance/Advancesettings";
import Login from "./Home/Login";



function App() {

  return (
    <>
      <AppProvider>
        <BrowserRouter>


          <Routes>
            {/* Dashboard menu */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/pending" element={<PendingQueries />} />
            <Route path="/dashboard/complaints" element={<Complaints />} />
            <Route path="/dashboard/rejected" element={<Rejected />} />
           

            {/* Login Route */}
            <Route path="/" element={<Login />} />
            
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </>
  );
}


export default App;