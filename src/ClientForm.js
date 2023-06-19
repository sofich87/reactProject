import React, { useState } from 'react';

function ClientForm({ onNext }) {
  const [clientData, setClientData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    fiscalId: '',
    identificationType: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar los datos del formulario antes de pasar al siguiente paso
    onNext(clientData);
  };

  return (
    <div>
      <h2>Datos del Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Cliente:</label>
          <input type="text" name="name" value={clientData.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={clientData.email} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Número de Contacto:</label>
          <input type="tel" name="contactNumber" value={clientData.contactNumber} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Identificación Fiscal:</label>
          <input type="text" name="fiscalId" value={clientData.fiscalId} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Tipo de Identificación:</label>
          <select name="identificationType" value={clientData.identificationType} onChange={handleInputChange} required>
            <option value="">Seleccionar</option>
            <option value="cedula">Cédula</option>
            <option value="ruc">RUC</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </div>
        <button type="submit">Siguiente</button>
      </form>
    </div>
  );
}

export default ClientForm;
