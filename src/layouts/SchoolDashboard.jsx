// import React from "react";
// import { Outlet } from "react-router-dom";
// import { Sidenav, DashboardNavbar, Configurator, Footer } from "@/widgets/layout";
// import { schoolRoutes } from "@/routes";
// import { useMaterialTailwindController } from "@/context";

// export function SchoolDashboard() {
//   const [controller] = useMaterialTailwindController();
//   const { sidenavType } = controller;

//   return (
//     <div className="min-h-screen bg-blue-gray-50/50">
//       <Sidenav
//         routes={schoolRoutes}
//         brandName="School Dashboard"
//         brandImg="/img/logo-ct.png"
//       />
//       <div className="p-4 xl:ml-80">
//         <DashboardNavbar />
//         <Configurator />
//         <Outlet />
//         <div className="text-blue-gray-600">
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SchoolDashboard;

// import { Routes, Route, Navigate } from "react-router-dom";
// import {
//   Sidenav,
//   DashboardNavbar,
//   Configurator,
//   Footer,
//   Vehicle_Analysis,
// } from "@/widgets/layout";
// import routes from "@/routes";
// import { useMaterialTailwindController, setOpenConfigurator } from "@/context";

// import { Cost, Emission, Fleet, FuelHistory, OverView, ServiceHistory, WorkOrders, Documents} from "@/pages/schooldashboard";

// export function Dashboard() {
//   const [controller, dispatch] = useMaterialTailwindController();
//   const { sidenavType } = controller;

//   return (
//     <div className="min-h-screen" style={{ backgroundColor: "rgba(187, 231, 254, 0.2)" }}>
//       <Sidenav
//         routes={routes}
//         brandImg={
//           sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
//         }
//       />
//       <div className="p-2 xl:ml-80">
//         <DashboardNavbar />
//         <Configurator />

//         <Routes>
//         {routes
//     .find((r) => r.layout === "school-dashboard")
//     ?.pages.map(({ path, element, children }) => (
//       <Route key={path} path={path} element={element}>
//         {children?.map(({ path: subPath, element: subElement }) => (
//           <Route key={subPath} path={subPath} element={subElement} />
//         ))}
//       </Route>
//             ))
//           }
//           <Route path="Vehicle_analysis/*" element={<Vehicle_Analysis />}>
//             <Route index element={<Navigate to="overview" />} />
//             <Route path="overview" element={<OverView />} />
//             <Route path="serviceHistory" element={<ServiceHistory />} />
//             <Route path="fuelHistory" element={<FuelHistory />} />
//             <Route path="workOrders" element={<WorkOrders />} />
//             <Route path="Emission" element={<Emission/>} />
//             <Route path="cost" element={<Cost/>} />
//             <Route path="documents" element={<Documents/>} />
//           </Route>
//           <Route path="/fleet" element={<Fleet/>} />
//         </Routes>
//       </div>
//     </div>
//   );
// }

// Dashboard.displayName = "/src/layout/dashboard.jsx";

// export default Dashboard;


import { Routes, Route, Navigate } from "react-router-dom";
import {
  Sidenav,
  DashboardNavbar,
 
  Vehicle_Analysis,
} from "@/widgets/layout";
import { Configurator } from "@/widgets/layout";

import routes from "@/routes";
import { useMaterialTailwindController } from "@/context";

import {
  Cost, Emission, Fleet, FuelHistory,
  OverView, ServiceHistory, WorkOrders, Documents, Report_overview, Fleet_overview, TotalBus
} from "@/pages/schooldashboard";

export function SchoolDashboard() {
  const [controller] = useMaterialTailwindController();
  const { sidenavType } = controller;

  // 🔐 Filter routes for school only
  const schoolRoutes = routes.find(r => r.layout === "school-dashboard")?.pages || [];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "rgba(187, 231, 254, 0.2)" }}>
      <Sidenav
        routes={[{ layout: "school-dashboard", pages: schoolRoutes }]}
        brandImg={sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"}
      />
      <div className="p-2 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <Routes>
          {schoolRoutes.map(({ path, element, children }) => (
            <Route key={path} path={path} element={element}>
              {children?.map(({ path: subPath, element: subElement }) => (
                <Route key={subPath} path={subPath} element={subElement} />
              ))}
            </Route>
          ))}

          {/* Vehicle Analysis nested route */}
          <Route path="Vehicle_analysis/*" element={<Vehicle_Analysis />}>
            <Route index element={<Navigate to="overview" />} />
            <Route path="overview" element={<OverView />} />
            <Route path="serviceHistory" element={<ServiceHistory />} />
            <Route path="fuelHistory" element={<FuelHistory />} />
            <Route path="workOrders" element={<WorkOrders />} />
            <Route path="Emission" element={<Emission />} />
            <Route path="cost" element={<Cost />} />
            <Route path="documents" element={<Documents />} />
          </Route>
          <Route path="/report_overview" element= {<Report_overview/>} />
          <Route path="/fleet_overview" element= {<Fleet_overview/>} />
           <Route path="/totalbus" element= {<TotalBus/>} />
        </Routes>
      </div>
    </div>
  );
}
