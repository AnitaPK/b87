import React from "react";


import DashboardLayout from "./components/layout/DashboardLayout";
import Dashboard from "./features/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
        <BrowserRouter>
     <Routes>

            <Route element={<DashboardLayout />}>

                <Route path="/" element={<Dashboard />} />

                {/* <Route path="/countries" element={<Countries />} /> */}

                {/* <Route path="/cities" element={<Cities />} /> */}

                {/* <Route path="/languages" element={<Languages />} /> */}

                {/* <Route path="/reports" element={<Reports />} /> */}

            </Route>

        </Routes>
        </BrowserRouter>
  )
}

export default App