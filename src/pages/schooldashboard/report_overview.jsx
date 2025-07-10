import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Card, CardBody } from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import {  Button } from "@material-tailwind/react";
import { Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
function Report_overview() {
  const { state } = useLocation();
  const { trip } = state || {};
  const navigate = useNavigate();
const [open,setOpen] = useState(false)
const [htmlSrc, setHtmlSrc] = useState("");
  // Sample student assignment data with coordinates for map view

    const handleOpen = (src) => {
    setHtmlSrc(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setHtmlSrc("");
  };

  const studentAssignments = [
    { 
      id: 1, 
      name: "Ahmed Mohammed", 
      grade: "5", 
      pickup: "Al Barsha Mall", 
      dropoff: "Main Gate", 
      assignedSeat: "A12",
      pickupCoords: { lat: 25.1193, lng: 55.2012 },
      dropoffCoords: { lat: 25.1185, lng: 55.2020 }
    },
    { 
      id: 2, 
      name: "Fatima Ali", 
      grade: "4", 
      pickup: "Al Barsha Park", 
      dropoff: "North Gate", 
      assignedSeat: "B05",
      pickupCoords: { lat: 25.1205, lng: 55.1998 },
      dropoffCoords: { lat: 25.1190, lng: 55.2030 }
    },
    { 
      id: 3, 
      name: "Youssef Ibrahim", 
      grade: "6", 
      pickup: "Al Barsha South", 
      dropoff: "Main Gate", 
      assignedSeat: "A08",
      pickupCoords: { lat: 25.1178, lng: 55.2005 },
      dropoffCoords: { lat: 25.1185, lng: 55.2020 }
    },
    { 
      id: 4, 
      name: "Layla Hassan", 
      grade: "5", 
      pickup: "Al Barsha 1", 
      dropoff: "South Gate", 
      assignedSeat: "C12",
      pickupCoords: { lat: 25.1210, lng: 55.1985 },
      dropoffCoords: { lat: 25.1175, lng: 55.2015 }
    },
    { 
      id: 5, 
      name: "Omar Abdullah", 
      grade: "3", 
      pickup: "Al Barsha Heights", 
      dropoff: "Main Gate", 
      assignedSeat: "B02",
      pickupCoords: { lat: 25.1220, lng: 55.1975 },
      dropoffCoords: { lat: 25.1185, lng: 55.2020 }
    }
  ];

  // Generate CSV content
  const generateCSV = () => {
    const headers = ['id', 'name', 'grade', 'pickup', 'dropoff', 'assignedSeat'].join(',');
    const rows = studentAssignments.map(student => 
      [student.id, student.name, student.grade, student.pickup, student.dropoff, student.assignedSeat].join(',')
    ).join('\n');
    return `${headers}\n${rows}`;
  };

  return (
    <div className="p-1">
        <p onClick={() => navigate(-1)} className="cursor-pointer text-blue-500 hover:underline ml-2">
        Back
        </p>
        <div className='p-2'>
      {trip ? (
        <>
          <div className="mb-8">
            <Typography variant="h3" className="mb-2">Trip Overview</Typography>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <Card className="shadow-sm">
                <CardBody>
                  <Typography variant="h6" color="blue-gray">Trip ID</Typography>
                  <Typography variant="paragraph">{trip.tripId}</Typography>
                </CardBody>
              </Card>
              <Card className="shadow-sm">
                <CardBody>
                  <Typography variant="h6" color="blue-gray">Date</Typography>
                  <Typography variant="paragraph">{trip.date}</Typography>
                </CardBody>
              </Card>
              <Card className="shadow-sm">
                <CardBody>
                  <Typography variant="h6" color="blue-gray">Total Students</Typography>
                  <Typography variant="paragraph">{trip.capacity}</Typography>
                </CardBody>
              </Card>
            <Card className="shadow-sm">
                <CardBody>
                  <Typography variant="h6" color="blue-gray">Distance</Typography>
                  <Typography variant="paragraph">{trip.distance}</Typography>
                </CardBody>
              </Card>
              <Card className="shadow-sm">
                <CardBody>
                  <Typography variant="h6" color="blue-gray">Total Bus</Typography>
                  <Typography variant="paragraph">20</Typography>
                </CardBody>
              </Card>
                <Card className="shadow-sm">
                <CardBody>
                  <Typography variant="h6" color="blue-gray">Total Time</Typography>
                  <Typography variant="paragraph">{trip.duration}</Typography>
                </CardBody>
              </Card>
             
            </div>
          </div>

          <Typography variant="h4" className="mb-4">Student Assignments</Typography>
          
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<Card className="h-full shadow-sm border border-gray-200">
  <CardBody>
    {/* CSV Format Heading */}
    <div className="flex justify-between items-center mb-6">
      <Typography variant="h5" className="text-xl font-semibold text-gray-800">
        CSV Format
      </Typography>
    </div>

    {/* Map Buttons */}
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => handleOpen("/all_bus_routes.html")}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow"
      >
        🚌 All Bus Routes
      </Button>

      <Button
        onClick={() => handleOpen("/student_clusters_map.html")}
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded shadow"
      >
        🗺️ Student Clusters Map
      </Button>

      <Button
        onClick={() => handleOpen("/student_locations.html")}
        className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded shadow"
      >
        📍 Student Locations
      </Button>
    </div>

    {/* Trip Summary */}
    <div className="mt-6">
      <Typography variant="h5" className="text-xl font-semibold text-gray-800 mb-2">
        Trip Summary
      </Typography>

      <div className="text-gray-700 text-sm space-y-1">
        <p><span className="font-medium">Trip ID:</span> {trip?.tripId}</p>
        <p><span className="font-medium">Vehicle:</span> {trip?.vehicleNo}</p>
        <p><span className="font-medium">Date:</span> {trip?.date}</p>
        <p><span className="font-medium">Distance:</span> {trip?.distance}</p>
        <p><span className="font-medium">Duration:</span> {trip?.duration}</p>
        <p><span className="font-medium">Route:</span> {trip?.startLocation} ➝ {trip?.endLocation}</p>
      </div>

      <p
        onClick={() => navigate('/school-dashboard/totalbus')}
        className="cursor-pointer text-blue-600 hover:underline mt-4 inline-block"
      >
        View All Trips
      </p>
    </div>
  </CardBody>
</Card>


    <Dialog size="xl" open={open} handler={handleClose}>
        <DialogHeader>HTML Preview</DialogHeader>
        <DialogBody className="h-[80vh]">
          <iframe src={htmlSrc} className="w-full h-full" title="HTML Preview" />
        </DialogBody>
        <DialogFooter>
          <Button variant="gradient" color="red" onClick={handleClose}>
            Close
          </Button>
        </DialogFooter>
      </Dialog>


            {/* Map View */}
            <Card className="h-full shadow-sm">
              <CardBody>
                <Typography variant="h5" className="mb-4">Route Map View</Typography>
                <div className="relative h-96 rounded-lg overflow-hidden border border-gray-200">
                  {/* This would be replaced with your actual map component */}
                  <iframe
                    src="/all_bus_routes.html"
                    width="100%"
                    height="100%"
                    title="Student Road Map"
                    className="border border-gray-300 rounded"
                />
                  
                </div>
              </CardBody>
            </Card>
          </div>

          {/* Trip Metrics (same as before) */}
       <div className="mt-8">
  <Typography variant="h4" className="mb-4">Trip Metrics</Typography>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 text-sm">
    <div className="p-4 border rounded shadow-sm">
      <strong>Bus Capacities:</strong> 21, 32, 45
    </div>
    <div className="p-4 border rounded shadow-sm">
      <strong>Min Fill Ratio:</strong> 0.8
    </div>
    <div className="p-4 border rounded shadow-sm">
      <strong>Max Distance:</strong> 2 km
    </div>
    <div className="p-4 border rounded shadow-sm">
      <strong>Avg Speed:</strong> 60 km/h
    </div>
    <div className="p-4 border rounded shadow-sm">
      <strong>Stop Time:</strong> 60 sec
    </div>
    <div className="p-4 border rounded shadow-sm">
      <strong>Start Time:</strong> 07:00
    </div>
  </div>
</div>

        </>
      ) : (
        <Typography variant="h4" color="red">No trip data available. Please select a trip from the reports page.</Typography>
      )}
      </div>
    </div>
  );
}

export default Report_overview;