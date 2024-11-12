import React from "react";
import { useState } from "react";

function NewPlantForm({updatePlants}) {
   const [name, setName ] = useState ("");
    const [image, setImage ] = useState ("");
    const [price, setPrice ] = useState ("");
   const handleSubmit = (e)=> {
      e.preventDefault(); 
    
     const plantObject = {
        name,
        image,
        price
      };
        fetch('http://localhost:6001/plants',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(plantObject)
        })
        .then(res => res.json())
        .then((data) => updatePlants(data));
         
               setImage('')
               setName('')
               setPrice('')
           
    };
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit} >
        <input
        value={name} 
        onChange={(e)=> setName(e.target.value)}
        type="text"
         name="name" 
         placeholder="Plant name"
          />
        <input 
        value={image}
        onChange={(e)=> setImage(e.target.value)}
        type="text" 
        name="image"
         placeholder="Image URL"
          />
        <input 
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        type="number" 
        name="price" 
        step="0.01" 
        placeholder="Price" 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
