// src/data/carsData.js
import HC1 from "../assets/HC1.png";
import HC2 from "../assets/HC2.png";
import HC3 from "../assets/HC3.png";
import HC4 from "../assets/HC4.png";
import HC5 from "../assets/HC5.png";
import HC6 from "../assets/HC6.png";

const homeVehicle = [
  {
    id: 1,
    name: "BMW 4 Series Coupe",
    type: "Sport Coupe",
    price: 3000,
    image: HC1,
    description: "Sporty luxury coupe with dynamic handling and turbocharged performance.",
    seats: 4,
    fuel: "Petrol",
    mileage: "16–21 km/l",
    transmission: "Automatic"
  },
  {
    id: 2,
    name: "Ford Mustang",
    type: "Muscle Coupe",
    price: 2500,
    image: HC2,
    description: "Iconic rear-wheel-drive coupe with powerful V8 engine and classic style.",
    seats: 4,
    fuel: "Petrol",
    mileage: "6–10 km/l",
    transmission: "Manual/Automatic"
  },
  {
    id: 3,
    name: "Subaru BRZ",
    type: "2-Door Sport Coupe",
    price: 5000,
    image: HC3,
    description: "Agile, rear-wheel-drive coupe built for driving enthusiasts.",
    seats: 4,
    fuel: "Petrol",
    mileage: "12.5–14.7 km/l",
    transmission: "Automatic"
  },
  {
    id: 4,
    name: "Subaru BRZ",
    type: "2-Door Sport Coupe",
    price: 2000,
    image: HC4,
    description: "Agile, rear-wheel-drive coupe built for driving enthusiasts.",
    seats: 4,
    fuel: "petrol",
    mileage: "12.5–14.7 km/l",
    transmission: "Automatic"
  },
  {
    id: 5,
    name: "Audi TT",
    type: "Sport Coupe",
    price: 7000,
    image: HC5,
    description: "Stylish, all-wheel-drive coupe with turbocharged performance and refined handling.",
    seats: 4,
    fuel: "Petrol",
    mileage: "13–15 km/l",
    transmission: "Automatic"
  },
  {
    id: 6,
    name: "Audi RS3 Sportback",
    type: "Performance Hatchback",
    price: 10000,
    image: HC6,
    description: "High-performance 5-cylinder turbocharged hatchback with Quattro AWD and sports styling.",
    seats: 5,
    fuel: "Petrol",
    mileage: "9.3–9.6 l/100km",
    transmission: "7-speed automatic"
  }
];

export default homeVehicle;