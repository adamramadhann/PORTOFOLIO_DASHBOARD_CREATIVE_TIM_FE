import React from "react";

const FormWizardAddres = ({ formData, handleFormData }) => {
  return (
    <div className="flex items-center flex-col gap-14 justify-center w-full">
      <h1 className="text-lg text-gray-500">Are you living in a nice area?</h1>
      <div className="flex w-full mt-5 justify-between">
        {/* Street Name Input */}
        <div className="border-b relative w-[60%]">
          <input
          required
            type="text"
            className="pb-5 peer outline-none w-full"
            placeholder="Street Name"
            value={formData.street || ""}
            onChange={(e) => handleFormData("street", e.target.value)}
          />
          <span className="w-0 h-[2px] bg-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0 peer-focus:w-full  peer-focus:bg-violet-700 transition-all duration-300"></span>
        </div>
        {/* Street Number Input */}
        <div className="border-b relative w-[30%]">
          <input
          required
            type="text"
            className="pb-5 peer w-full outline-none"
            placeholder="Street Number"
            value={formData.streetNumber || ""}
            onChange={(e) => handleFormData("streetNumber", e.target.value)}
          />
          <span className="w-0 h-[2px] bg-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0 peer-focus:w-full  peer-focus:bg-violet-700 transition-all duration-300"></span>
        </div>
      </div>
      <div className="w-full mt-15 gap-10 flex">
        {/* Additional Address */}
        <div className="border-b relative w-full">
          <input
          required
            type="text"
            className="pb-5 peer w-full outline-none"
            placeholder="Additional Address"
            value={formData.additionalAddress || ""}
            onChange={(e) => handleFormData("additionalAddress", e.target.value)}
          />
          <span className="w-0 h-[2px] bg-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0 peer-focus:w-full  peer-focus:bg-violet-700 transition-all duration-300"></span>
        </div>
        {/* City Selector */}
        <div className="flex border-b w-full">
          <select
          required
            className="py-3 pr-24 bg-transparent w-full border-b-2 focus:border-violet-700 flex pl-1"
            value={formData.city || ""}
            onChange={(e) => handleFormData("city", e.target.value)}
          >
            <option value="" disabled>
              Choose City
            </option>
            <option value="Paris">Paris</option>
            <option value="Bucharest">Bucharest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormWizardAddres;
