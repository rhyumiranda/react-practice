/* eslint-disable no-unused-vars */
import React, {useState} from 'react';

function MyComponent3 (){

  const [cars, setCars] = useState([]);
  const [carYear, setCarYears] = useState(new Date().getFullYear());
  const [carMake, setCarMaker] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar(){
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel
    };

    setCars(c => [...c, newCar]);

    setCarYears(new Date().getFullYear());
    setCarMaker("");
    setCarModel("");
  }

  function handleRemoveCar(index){
    setCars(c => c.filter((_, i) => i !== index));
  }

  function handleYearChange(e){
    setCarYears(e.target.value);
  }

  function handleCarMaker(e){
    setCarMaker(e.target.value);
  }

  function handleCarModel(e){
    setCarModel(e.target.value);
  }

  return(
    <>
      <div>
        <h2>List of Cars</h2>
        <ul>
          {cars.map((car, index) => 
            <li key={index} onClick={() => handleRemoveCar(index)}>
              {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <div>
          <input id="car-year" value={carYear} type="number" placeholder='Enter Year' onChange={handleYearChange}/>
        </div>
        <div>
          <input id="car-make" value={carMake} type="text" placeholder='Enter Car Maker' onChange={handleCarMaker}/>
        </div>
        <div>
          <input id="car-model" value={carModel} type="text" placeholder='Enter Car Model' onChange={handleCarModel}/>
        </div>
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default MyComponent3