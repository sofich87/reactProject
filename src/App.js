import React, { useState } from 'react';
import ClientForm from './ClientForm';
import VehicleForm from './VehicleForm';
import ServiceSelection from './ServiceSelection';
import WorkOrder from './WorkOrder';
import './styles.css';


function App() {

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const [step, setStep] = useState(1);
  const [clientData, setClientData] = useState({});
  const [vehicleData, setVehicleData] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [estimatedDelivery, setEstimatedDelivery] = useState('');
  const [orderApproved, setOrderApproved] = useState(false);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleClientData = (data) => {
    setClientData(data);
    handleNextStep();
  };

  const handleVehicleData = (data) => {
    setVehicleData(data);
    handleNextStep();
  };

  const handleServiceSelection = (services) => {
    setSelectedServices(services);
    handleNextStep();
  };

  const handleWorkOrderSubmit = (estimatedDelivery) => {
    setEstimatedDelivery(estimatedDelivery);
    handleNextStep();
  };

  const handleWorkOrderApprove = () => {
    setOrderApproved(true);
  };

  return (
    <div className={`App ${isDarkTheme ? 'dark': ''}`}>
      <br></br>
      <button onClick={toggleTheme}>Cambiar claro/oscuro</button>
      {step === 1 && <ClientForm onNext={handleClientData} />}
      {step === 2 && <VehicleForm onNext={handleVehicleData} />}
      {step === 3 && <ServiceSelection onNext={handleServiceSelection} />}
      {step === 4 && (
        <WorkOrder
          clientData={clientData}
          vehicleData={vehicleData}
          selectedServices={selectedServices}
          estimatedDelivery={estimatedDelivery}
          onApprove={handleWorkOrderApprove}
        />
      )}
      {step === 4 && orderApproved && <p>Orden Aprobada</p>}
      
    </div>
  );
}

export default App;
