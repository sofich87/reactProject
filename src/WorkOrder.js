import React from 'react';
import { generateRandomDate, generateRandomDateTime } from './utils'; 

function WorkOrder({ clientData, vehicleData, selectedServices, onApprove }) {
    // Límite inferior: fecha y hora actual
    const startDate = new Date();

    
    const endDate = new Date();
    endDate.setDate(startDate.getDate() + 7); // Límite superior: 7 días después de la fecha actual
    endDate.setHours(17, 29, 59); // Establece la hora límite del día

    // Generar fecha y hora aleatoria dentro del rango especificado
    const estimatedDelivery = generateRandomDateTime(startDate, endDate);
    

    const handleApprove = () => {
    // Realizar acciones necesarias al aprobar la orden de trabajo
    
    onApprove();
  };


  return (
    <div>
      <h2>Orden de Trabajo</h2>
      <h3>Información del Cliente:</h3>
      <p>Nombre: {clientData.name}</p>
      <p>Email: {clientData.email}</p>
      <p>Número de Contacto: {clientData.contactNumber}</p>
      <p>Identificación Fiscal: {clientData.taxIdentification}</p>
      <p>Tipo de Identificación: {clientData.identificationType}</p>

      <h3>Información del Vehículo:</h3>
      <p>Marca: {vehicleData.brand}</p>
      <p>Modelo: {vehicleData.model}</p>
      <p>Placa: {vehicleData.licensePlate}</p>
      <p>Nivel del Tanque de Gasolina: {vehicleData.fuelLevel}</p>
      <p>Estado Exterior del Vehículo: {vehicleData.exteriorCondition}</p>

      <h3>Servicios Seleccionados:</h3>
      <ul>
        {selectedServices.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>

      <h3>Fecha y Hora Estimada de Entrega:</h3>
      <p>{estimatedDelivery.toString()}</p>

      <button onClick={handleApprove}>Aprobar</button>
    </div>
  );
}

export default WorkOrder;
