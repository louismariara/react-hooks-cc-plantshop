import React from "react";
import PlantCard from "./PlantCard";
import { useState,useEffect } from "react";
function PlantList() {
  const [plants, setPlants] = useState([]);
   useEffect(() => {
      fetch("http://localhost:6001/plants")
        .then((response) => response.json())
        .then((data) => setPlants(data));
    }, []);
  
    const removePlant = (id) => {
    setPlants(plants.filter((plant) => plant.id !== id));
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        fetch("http://localhost:6001/plants")
          .then((response) => response.json())
          .then((data) => setPlants(data));
      });
  };
  
  return (
    <div>
    <ul className="cards">{plants.map((plant) => (
            <PlantCard key={plant.id} 
            image={plant.image} 
            name={plant.name} 
            price={plant.price} 
            removePlant={removePlant}
             id={plant.id}
             />
          ))}
          </ul>
          </div>
  );
}

export default PlantList;
