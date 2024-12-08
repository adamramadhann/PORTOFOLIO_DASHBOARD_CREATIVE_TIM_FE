  import React, { useState } from "react";
  import { FaUserPlus } from "react-icons/fa";
  import { MdEmail, MdOutlineFace } from "react-icons/md";
import ImageUpluod from "./ImageUpluod";

  const FormAboutWizard = ({ formData, handleFormData, onSubmit }) => {
    const [clickImage, setClickImage] = useState(false)
    return (
      <div className="flex items-center justify-center flex-col gap-10">
        <h1 className="text-xl text-gray-500">
          Let's start with the basic information (with validation)
        </h1>
        <div className="w-full mt-5 flex-col">
          <div className="flex  justify-center">
            <div className="flex  justify-end w-[450px] pr-10">
              <span onClick={() => setClickImage(true)} className={`w-32 h-32 flex items-center ${clickImage ? ' border-red-400' : ''} justify-center border-4 rounded-full`}>
                <ImageUpluod/>
              </span>
            </div>
            <div className="flex flex-1 w-full">
              <form onSubmit={onSubmit} className="flex w-full flex-col items-center justify-center gap-10">
                {/* First Name */}
                <label className="border-b flex justify-between relative w-full">
                  <div>
                    <input
                    placeholder="Masukan First Name"
                    required
                      type="text"
                      value={formData.firstName} 
                      onChange={(e) =>
                        handleFormData("firstName", e.target.value) 
                      }
                      className="peer pb-3 outline-none pl-3 text-gray-500 w-full"
                    />
                    <span className="w-0 h-[2px]  bg-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0 peer-focus:w-full peer-focus:bg-violet-700 transition-all duration-300"></span>
                  </div>
                  <MdOutlineFace className="text-gray-500" size={25} />
                </label>

                {/* Last Name */}
                <label className="border-b flex justify-between items-center relative w-full">
                  <div>
                    <input
                    placeholder="Masukan Last Name"
                    required
                      type="text"
                      value={formData.lastName} 
                      onChange={(e) =>
                        handleFormData("lastName", e.target.value) 
                      }
                      className="outline-none peer pl-3 pb-3 text-gray-500 w-full"
                    />
                    <span className="w-0 h-[2px] bg-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0 peer-focus:w-full peer-focus:bg-violet-700 transition-all duration-300"></span>
                  </div>
                  <FaUserPlus className="text-gray-500" size={25} />
                </label>
              </form>
            </div>
          </div>

          {/* Email */}
          <div className="w-full flex justify-between items-center relative border-b mt-10">
            <div className="w-full">
              <input
                placeholder="Masukan Email"
                required
                type="email"
                value={formData.email} 
                onChange={(e) => handleFormData("email", e.target.value)} 
                className="outline-none pb-3 pl-2 peer text-gray-500 w-full border-b"
              />
              <span className="w-0 h-[2px] pointer-events-none bg-gray-400 absolute left-1/2 -translate-x-1/2 bottom-0 peer-focus:w-full peer-focus:bg-violet-700 transition-all duration-300"></span>
            </div>
            <MdEmail className="text-gray-500" size={25} />
          </div>
        </div>
      </div>
    );
  };

  export default FormAboutWizard;
