import React from "react";
import { BiCodeAlt } from "react-icons/bi";
import { LuMonitorSmartphone } from "react-icons/lu";
import { TiPencil } from "react-icons/ti";

const FormWizardBuild = ({ formData, handleFormData }) => {
  // Handle checkbox selection
  const handleSelection = (field) => {
    const currentSelections = formData.activities || []; // Default kosong
    const updatedSelections = currentSelections.includes(field)
      ? currentSelections.filter((item) => item !== field) // Hapus jika sudah dipilih
      : [...currentSelections, field]; // Tambahkan jika belum dipilih

    handleFormData("activities", updatedSelections); // Update state global
  };

  return (
    <div className="flex items-center flex-col gap-10 justify-center w-full">
      <h1 className="text-lg text-gray-500">What are you doing? (checkboxes)</h1>
      <div className="flex relative justify-around gap-40">
        {/* Checkbox Buttons */}
        <button
          onClick={() => handleSelection("writing")}
          className={`rounded-full border-4 p-7 ${
            formData.activities?.includes("writing")
              ? "border-red-500 text-red-500"
              : "border-gray-400 text-gray-400"
          }`}
        >
          <TiPencil size={60} />
        </button>
        <button
          onClick={() => handleSelection("coding")}
          className={`rounded-full border-4 p-7 ${
            formData.activities?.includes("coding")
              ? "border-red-500 text-red-500"
              : "border-gray-400 text-gray-400"
          }`}
        >
          <BiCodeAlt size={60} />
        </button>
        <button
          onClick={() => handleSelection("designing")}
          className={`rounded-full border-4 p-7 ${
            formData.activities?.includes("designing")
              ? "border-red-500 text-red-500"
              : "border-gray-400 text-gray-400"
          }`}
        >
          <LuMonitorSmartphone size={60} />
        </button>
      </div>

      {/* City Selector */}
      <div className="flex justify-end w-[700px]">
        <select
        required
          className="py-3 pr-24 bg-transparent border-b-2 focus:border-violet-700 flex pl-1"
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
  );
};

export default FormWizardBuild;
