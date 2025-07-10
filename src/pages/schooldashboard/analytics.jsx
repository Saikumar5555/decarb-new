import React, { useState } from "react";
import { Typography } from "@material-tailwind/react";
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from "chart.js";
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";
import schoolBus1 from "./img/Dubai-School-buse1.jpg";
import schoolBus2 from "./img/Dubai-School-buse3.webp"
import schoolBus3 from "./img/Dubai-School-buse2.jpg"
import schoolBus4 from "./img/Dubai-School-buse4.jpg"

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale);

// Dummy data for trips
const trips = [
  {
    tripId: "TRP-2024-001",
    tripNumber: 1,
    vehicleNo: "DUB-GEMS-001",
    image: schoolBus1,
    date: "2024-07-01",
    capacity: 42,
    emissions: "145 g/km",
    mileage: "6.5 km/l",
    startLocation: "Al Barsha South",
    endLocation: "GEMS Founders School",
    distance: "12.5 km",
    duration: "35 mins"
  },
  {
    tripId: "TRP-2024-002",
    tripNumber: 2,
    vehicleNo: "DUB-GEMS-002",
    image: schoolBus2,
    date: "2024-07-01",
    capacity: 38,
    emissions: "155 g/km",
    mileage: "6.2 km/l",
    startLocation: "Al Barsha 1",
    endLocation: "GEMS World Academy",
    distance: "10.8 km",
    duration: "30 mins"
  },
  {
    tripId: "TRP-2024-003",
    tripNumber: 3,
    vehicleNo: "DUB-GEMS-003",
    image: schoolBus3,
    date: "2024-07-02",
    capacity: 35,
    emissions: "140 g/km",
    mileage: "6.8 km/l",
    startLocation: "Al Barsha Heights",
    endLocation: "GEMS Wellington Academy",
    distance: "14.2 km",
    duration: "40 mins"
  },
  {
    tripId: "TRP-2024-004",
    tripNumber: 4,
    vehicleNo: "DUB-GEMS-004",
    image: schoolBus4,
    date: "2024-07-02",
    capacity: 45,
    emissions: "150 g/km",
    mileage: "6.3 km/l",
    startLocation: "Al Barsha 3",
    endLocation: "GEMS International School",
    distance: "11.7 km",
    duration: "32 mins"
  },
  {
    tripId: "TRP-2024-005",
    tripNumber: 5,
    vehicleNo: "DUB-GEMS-001",
    image: schoolBus1,
    date: "2024-07-03",
    capacity: 20,
    emissions: "142 g/km",
    mileage: "6.6 km/l",
    startLocation: "Al Barsha South",
    endLocation: "GEMS Founders School",
    distance: "12.5 km",
    duration: "36 mins"
  },
  {
    tripId: "TRP-2024-006",
    tripNumber: 6,
    vehicleNo: "DUB-GEMS-002",
    image: schoolBus2,
    date: "2024-07-03",
    capacity: 26,
    emissions: "158 g/km",
    mileage: "6.1 km/l",
    startLocation: "Al Barsha 1",
    endLocation: "GEMS World Academy",
    distance: "10.8 km",
    duration: "31 mins"
  }
];

function Analytics() {
  const navigate = useNavigate();
  const navigatetoheader = (trip) => {
    navigate("/school-dashboard/report_overview", {state: {trip}});
  };
  
  return (
    <div className="p-4">
      <Typography variant="h4" className="mb-6">
        Trip Reports
      </Typography>
      <div className="rounded-xl bg-white p-3">
        <table className="min-w-full bg-white rounded-xl">
          <thead className="text-left font-semibold text-gray-800 text-sm">
            <tr className="border-y">
              <th className="px-6 py-3">Trip</th>
              <th className="px-6 py-4">Trip ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Students</th>
              <th className="px-6 py-3">Distance</th>
              <th className="px-6 py-3">Time</th>
         
              
            </tr>
          </thead>
          <tbody className="text-xs">
            {trips.map((trip, index) => (
              <tr className="text-sm text-gray-800 border-b hover:bg-gray-50 cursor-pointer" 
                  key={index} onClick={() => navigatetoheader(trip)}>
                    <td className="px-6 py-3">{trip.tripNumber}</td>
                <td className="px-6 py-3">{trip.tripId}</td>
                <td className="px-6 py-3">{trip.date}</td>
                <td className="px-6 py-3">{trip.capacity}</td>
                <td className="px-6 py-3">{trip.distance}</td>
                <td className="px-6 py-3">{trip.duration}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Analytics;