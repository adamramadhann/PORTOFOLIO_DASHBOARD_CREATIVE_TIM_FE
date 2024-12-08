import React, { useState } from "react";

const StepOne = () => {
  return (
    <div className="step">
      <h2>Step 1: Personal Information</h2>
      <label>
        Name:
        <input type="text" placeholder="Enter your name" />
      </label>
      <label>
        Email:
        <input type="email" placeholder="Enter your email" />
      </label>
    </div>
  );
};


const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${percentage}%`, transition: "width 0.3s ease" }}
      ></div>
    </div>
  );
};

const StepperForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <h1>step 1</h1>
      case 2:
        return <h1>step 2</h1>
      case 3:
        return <h1>step 3</h1>
      default:
        return null;
    }
  };

  return (
    <div className="stepper-form">
      <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <div className="form-steps">{renderStep()}</div>
      <div className="navigation-buttons">
        <button onClick={prevStep} disabled={currentStep === 1}>
          Back
        </button>
        <button onClick={nextStep} disabled={currentStep === totalSteps}>
          {currentStep === totalSteps ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default StepperForm;
