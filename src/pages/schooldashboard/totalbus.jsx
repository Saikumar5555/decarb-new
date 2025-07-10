import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Assuming schoolBus1 and schoolBus2 are imported at the top
import schoolBus1 from "./img/Dubai-School-buse1.jpg";
import schoolBus2 from "./img/Dubai-School-buse3.webp";


const VehicleData = [
  {
    vehicleNo: "DUB-EDU-001",
    chassisNo: "DUBSCHBUS001",
    typeName: "Ashok Leyland Sunshine",
    TruckName: "Ashok Leyland Sunshine",
    manufacturer: "Ashok Leyland",
    year: "2018",
    capacity: "45 students",
    fuel: "Petrol",
    status: "Active",
    lastMaintenanceDate: "2024-06-30",
    RUL: "8000 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus1
  },
  {
    vehicleNo: "DUB-EDU-004",
    chassisNo: "DUBSCHBUS004",
    typeName: "Ashok Leyland Sunshine",
    TruckName: "Ashok Leyland Sunshine",
    manufacturer: "Ashok Leyland",
    year: "2018",
    capacity: "45 students",
    fuel: "Petrol",
    status: "Maintenance",
    lastMaintenanceDate: "2024-06-20",
    RUL: "7800 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus1
  },
  {
    vehicleNo: "DUB-EDU-007",
    chassisNo: "DUBSCHBUS007",
    typeName: "Ashok Leyland Sunshine",
    TruckName: "Ashok Leyland Sunshine",
    manufacturer: "Ashok Leyland",
    year: "2018",
    capacity: "45 students",
    fuel: "Petrol",
    status: "Active",
    lastMaintenanceDate: "2024-06-18",
    RUL: "8300 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus1
  },
  {
    vehicleNo: "DUB-EDU-002",
    chassisNo: "DUBSCHBUS002",
    typeName: "Tata Starbus",
    TruckName: "Tata Starbus",
    manufacturer: "Tata Motors",
    year: "2017",
    capacity: "32 students",
    fuel: "Diesel",
    status: "Maintenance",
    lastMaintenanceDate: "2024-06-10",
    RUL: "5000 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus2
  },
   {
    vehicleNo: "DUB-EDU-003",
    chassisNo: "DUBSCHBUS003",
    typeName: "Tata Starbus",
    TruckName: "Tata Starbus",
    manufacturer: "Tata Motors",
    year: "2017",
    capacity: "32 students",
    fuel: "Diesel",
    status: "Maintenance",
    lastMaintenanceDate: "2024-06-10",
    RUL: "5000 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus2
  },
   {
    vehicleNo: "DUB-EDU-005",
    chassisNo: "DUBSCHBUS005",
    typeName: "Tata Starbus",
    TruckName: "Tata Starbus",
    manufacturer: "Tata Motors",
    year: "2017",
    capacity: "21 students",
    fuel: "Diesel",
    status: "Available",
    lastMaintenanceDate: "2024-06-10",
    RUL: "5000 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus2
  },
   {
    vehicleNo: "DUB-EDU-009",
    chassisNo: "DUBSCHBUS009",
    typeName: "Tata Starbus",
    TruckName: "Tata Starbus",
    manufacturer: "Tata Motors",
    year: "2017",
    capacity: "21 students",
    fuel: "Diesel",
    status: "Active",
    lastMaintenanceDate: "2024-06-10",
    RUL: "5000 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus2
  },
   {
    vehicleNo: "DUB-EDU-008",
    chassisNo: "DUBSCHBUS008",
    typeName: "Tata Starbus",
    TruckName: "Tata Starbus",
    manufacturer: "Tata Motors",
    year: "2017",
    capacity: "21 students",
    fuel: "Diesel",
    status: "Available",
    lastMaintenanceDate: "2024-06-10",
    RUL: "5000 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus2
  }
  ,
   {
    vehicleNo: "DUB-EDU-008",
    chassisNo: "DUBSCHBUS008",
    typeName: "Tata Starbus",
    TruckName: "Tata Starbus",
    manufacturer: "Tata Motors",
    year: "2017",
    capacity: "32 students",
    fuel: "Diesel",
    status: "Active",
    lastMaintenanceDate: "2024-06-10",
    RUL: "5000 km",
    location: "Dubai - Al Barsha",
    school: "GEMS Education",
    image: schoolBus2
  }
];


function TotalBus() {
  const { state: vehicle } = useLocation();
  const navigate = useNavigate();

  const navigatetoheader = (vehicle) => {
    navigate("/school-dashboard/Vehicle_analysis", { state: { vehicle } });
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2 mt-5">
        <p
         onClick={() => navigate( -1 )}
          className="text-sm text-blue-600 hover:underline cursor-pointer"
        >
          ← Back
        </p>
        <h1 className="text-2xl font-bold text-gray-800">Total Buses</h1>
      <div/>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full text-left bg-white border rounded-xl">
          <thead className="bg-gray-100 text-sm text-gray-700">
            <tr>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Vehicle No</th>
              <th className="px-4 py-2">Chassis No</th>
              <th className="px-4 py-2">Manufacturer</th>
              <th className="px-4 py-2">Capacity</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Fuel</th>
              <th className="px-4 py-2">Last Maintenance</th>
              <th className="px-4 py-2">RUL</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {VehicleData.map((v, i) => (
              <tr
                key={i}
                onClick={() => navigatetoheader(v)}
                className="border-b hover:bg-gray-50 cursor-pointer"
              >
                <td className="px-4 py-2">
                  <img
                    src={v.image}
                    alt={v.vehicleNo}
                    className="h-12 w-20 rounded object-cover"
                  />
                </td>
                <td className="px-4 py-2">{v.vehicleNo}</td>
                <td className="px-4 py-2">{v.chassisNo}</td>
                <td className="px-4 py-2">{v.manufacturer}</td>
                <td className="px-4 py-2">{v.capacity}</td>
                <td className="px-4 py-2">{v.status}</td>
                <td className="px-4 py-2">{v.fuel}</td>
                <td className="px-4 py-2">{v.lastMaintenanceDate}</td>
                <td className="px-4 py-2">{v.RUL}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TotalBus;
