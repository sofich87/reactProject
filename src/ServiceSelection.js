import React, { useState } from 'react';

const initialServices = [
  { id: 1, name: 'Cambio de aceite' },
  { id: 2, name: 'Cambio de frenos' },
  { id: 3, name: 'Alineación y balanceo' },
  { id: 4, name: 'Diagnóstico general' },
  { id: 5, name: 'Revisión sistema eléctrica' },
  { id: 6, name: 'Revisión de la suspensión' },
];

function ServiceSelection({ onNext }) {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleServiceToggle = (serviceId) => {
    setSelectedServices((prevSelectedServices) => {
      if (prevSelectedServices.includes(serviceId)) {
        return prevSelectedServices.filter((id) => id !== serviceId);
      } else {
        return [...prevSelectedServices, serviceId];
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los datos del formulario antes de pasar al siguiente paso
    onNext(selectedServices);
  };

  return (
    <div>
      <h2>Selección de Servicios</h2>
      <form onSubmit={handleSubmit}>
        {initialServices.map((service) => (
          <div key={service.id}>
            <label>
              <input
                type="checkbox"
                checked={selectedServices.includes(service.id)}
                onChange={() => handleServiceToggle(service.id)}
              />
              {service.name}
            </label>
          </div>
        ))}
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default ServiceSelection;
