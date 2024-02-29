/*
    this page displays all the cars at the rental service
     - uses Navbar component with an array of links that include my bookings
        - get cars data from the /api/packages endpoint
        - use the Cars interface to define the shape of the data
        - displays a list of cars with their details
        - each car should have a button to reserve the car
        - each car should have a thumbnail image
        - each car should have a status indicator
        - each car should have a price per hour
*/

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Cars } from "./api/packages";
import Image from "next/image";
import "../app/globals.css";

const CarsPage: React.FC = () => {
  const [cars, setCars] = useState<Cars[]>([]);

  useEffect(() => {
    // Fetch cars data from /api/packages endpoint
    fetch("/api/packages")
      .then((response) => response.json())
      .then((data: { data: { cars: Array<Cars> } }) => {
        console.log("data", data);
        // Filter cars with status of AVAILABLE
        const availableCars = data.data.cars.filter(
          (car: Cars) => car.status === "AVAILABLE"
        );
        setCars(availableCars);
      });
  }, []);

  return (
    <div className="h-screen">
      <Navbar links={[{ label: "MY BOOKINGS", href: "/bookings" }]} />
      <div className="flex flex-wrap">
        {cars.map((car) => (
          <div key={car.id} className="flex flex-col w-64 h-64 m-2 shadow-md bg-white">
            <Image
              src={car.thumbnail}
              alt={car.registrationNumber}
              width="300"
              height="300"
            />
            <div className="flex flex-col h-full justify-between text-left p-2">
              <div>
                <h4>{car.brand + " " + car.model}</h4>
                <p>Rs: {car.pricePerHour}</p>
              </div>

              <div className="flex">
                <button className="uppercase text-primary">Reserve</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsPage;
