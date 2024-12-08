import React, { useState } from 'react'

import FormAboutWizard from '../../component/FormAboutWizard';
import FormWizardBuild from '../../component/FormWizardBuild';
import FormWizardAddres from '../../component/FormWizardAddres';

const ExtendedForms = () => {

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    job: "",
    city: "",
    street: "",
    streetNumber: "",
    additionalAddress: "",
  });


  const totalStep = 3;

  const handleFormData = (field, value)=> {
    setFormData((prev) => ({
      ...prev,
      [field] : value
    }))
  }

  const validateField = (fields) => {
    return fields.every((val) => formData[val]?.trim() !== '')
  }


  const isfalid = () => {
    if (currentStep === 1) {
      return validateField(["name", "email"]); 
    } else if (currentStep === 2) {
      return validateField(["address", "city"]); 
    } else {
      return true; 
    }
  };


  const nextStep = () => {

    if(!formData.firstName || !formData.lastName) {
      alert("biodata tidak boleh kosong")
      return
    }
    
    if(!formData.email.endsWith('@gmail.com')) {
      alert("email harus diisi dengan benar")
      return
    }
    
    if(currentStep < totalStep && isfalid()) {
      setCurrentStep(currentStep + 1)
    } 
  }

  const backStep = () => {
    if(currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
}

const handleSubmit = (val) => {
  if(handleFormData('email') !== val) {
    alert('email infalid')
  }
}

const renderStep = () => {
  switch (currentStep) {
    case 1:
      return (
        <FormAboutWizard
          formData={formData}
          onNextStep={nextStep}
          handleFormData={handleFormData}
          onSubmit={handleSubmit}
        />
      );
    case 2:
      return (
        <FormWizardBuild
          formData={formData}
          handleFormData={handleFormData}
        />
      );
    case 3:
      return (
        <FormWizardAddres
          formData={formData}
          handleFormData={handleFormData}
        />
      );
    default:
      return null;
  }
};



  
  return (
    <div className='flex items-center  justify-center'>
      <div className='w-[950px] h-[620px] pt-5 relative mt-10 mb-5  px-5 bg-white shadow-md '>
        <span className='flex mb-14 justify-center text-lg text-gray-500 items-center gap-5 w-full flex-col' >
            <h1 className='text-2xl' >Build Your Profile</h1>
            <p>This information will let us know more about you.</p>
        </span>
        <div className='w-full flex items-center' >
            <button onClick={() => setCurrentStep(1)} className={`flex-1 mb-10 py-3 ${currentStep === 1 ? 'bg-red-500   text-white' : ''}`} >
                ABOUT
            </button>
            <button onClick={() => setCurrentStep(2)} disabled={currentStep === 1 && formData.email === ''} className={`flex-1 mb-10 py-3 ${currentStep === 2 ? 'bg-red-500   text-white' : ''}`} >
                ACCOUNT
            </button>
            <button onClick={() => setCurrentStep(3)} disabled={currentStep === 1 || !isfalid()} className={`flex-1 mb-10 py-3 ${currentStep === 3 ? 'bg-red-500   text-white' : ''}`} >
                ADDRESS
            </button>
        </div>
        <div>
        {renderStep()}  
        </div>
      <div className='flex w-[900px] mt-14 absolute bottom-5  justify-between'  >
          <button onClick={backStep} className={`px-10 py-3 text-white rounded-sm bg-red-500 ${currentStep === 1 ? 'opacity-0' : 'opacity-100'}`} >PREVIOUS</button>
          <button onClick={nextStep} className='px-10 py-3 text-white rounded-sm bg-red-500' >{currentStep === 3 ? "SUBMIT" : "NEXT"}</button>
      </div>
      </div>
    </div>
  
  )
}

export default ExtendedForms