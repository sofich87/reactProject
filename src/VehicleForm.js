import React, { useState } from 'react';

function VehicleForm({ onNext }) {
  const [vehicleData, setVehicleData] = useState({
    brand: '',
    model: '',
    licensePlate: '',
    fuelLevel: '',
    exteriorCondition: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los datos del formulario antes de pasar al siguiente paso
    onNext(vehicleData);
  };

  return (
    <div>
      <h2>Datos del Vehículo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Marca:</label>
          <input type="text" name="brand" value={vehicleData.brand} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Modelo:</label>
          <input type="text" name="model" value={vehicleData.model} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Placa:</label>
          <input type="text" name="licensePlate" value={vehicleData.licensePlate} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Nivel del Tanque de Gasolina:</label>
          <input type="text" name="fuelLevel" value={vehicleData.fuelLevel} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Estado Exterior del Vehículo:</label>
          <textarea name="exteriorCondition" value={vehicleData.exteriorCondition} onChange={handleInputChange} required />
        </div>
        <button type="submit">Siguiente</button>
        
      </form>
    </div>
  );
}

export default VehicleForm;
