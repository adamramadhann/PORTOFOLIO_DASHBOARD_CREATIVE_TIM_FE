import React from 'react'

const FormReguler = () => {
  return (
    <div className="w-full min-h-screen  flex items-center justify-center py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Register Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Register</h1>
            <form className="flex flex-col gap-6">
              <label className="w-full">
                <span className="block text-gray-700 font-medium">Email</span>
                <input
                  className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-blue-500 transition"
                  type="email"
                  placeholder="Masukkan email"
                  required
                />
              </label>
              <label className="w-full">
                <span className="block text-gray-700 font-medium">Password</span>
                <input
                  className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-blue-500 transition"
                  type="password"
                  placeholder="Masukkan password"
                  required
                />
              </label>
              <label className="w-full">
                <span className="block text-gray-700 font-medium">Konfirmasi Password</span>
                <input
                  className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-blue-500 transition"
                  type="password"
                  placeholder="Konfirmasi password"
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-600 transition">
                Register
              </button>
            </form>
          </div>

          {/* Login Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8 text-center text-green-600">Login</h1>
            <form className="flex flex-col gap-6">
              <label className="w-full">
                <span className="block text-gray-700 font-medium">Email</span>
                <input
                  className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-green-500 transition"
                  type="email"
                  placeholder="Masukkan email"
                  required
                />
              </label>
              <label className="w-full">
                <span className="block text-gray-700 font-medium">Password</span>
                <input
                  className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-green-500 transition"
                  type="password"
                  placeholder="Masukkan password"
                  required
                />
              </label>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-green-600 transition">
                Login
              </button>
            </form>
          </div>
        </div>

        {/* Multi-Type Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 mt-12">
          <h1 className="text-3xl font-bold mb-8 text-gray-700 text-center">Multi-Type Form</h1>
          <form className="flex flex-col gap-6">
            <label className="w-full">
              <span className="block text-gray-700 font-medium">Text</span>
              <input
                className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-indigo-500 transition"
                type="text"
                placeholder="Masukkan teks"
                required
              />
            </label>

            <label className="w-full">
              <span className="block text-gray-700 font-medium">Email</span>
              <input
                className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-indigo-500 transition"
                type="email"
                placeholder="Masukkan email"
                required
              />
            </label>

            <label className="w-full">
              <span className="block text-gray-700 font-medium">Password</span>
              <input
                className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-indigo-500 transition"
                type="password"
                placeholder="Masukkan password"
                required
              />
            </label>

            <label className="w-full">
              <span className="block text-gray-700 font-medium">Number</span>
              <input
                className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-indigo-500 transition"
                type="number"
                placeholder="Masukkan angka"
                required
              />
            </label>

            <label className="w-full">
              <span className="block text-gray-700 font-medium">Date</span>
              <input
                className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-indigo-500 transition"
                type="date"
                required
              />
            </label>

            <label className="w-full">
              <span className="block text-gray-700 font-medium">Time</span>
              <input
                className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-indigo-500 transition"
                type="time"
                required
              />
            </label>

            <label className="w-full">
              <span className="block text-gray-700 font-medium">File</span>
              <input
                className="w-full border-b-2 border-gray-300 p-2 mt-1 focus:outline-none focus:border-indigo-500 transition"
                type="file"
              />
            </label>

            <label className="w-full flex items-center gap-3">
              <input
                className="border-gray-300 rounded text-indigo-500 focus:ring-2 focus:ring-indigo-500"
                type="checkbox"
              />
              <span className="text-gray-700 font-medium">Accept Terms & Conditions</span>
            </label>

            <div>
              <span className="block text-gray-700 font-medium mb-2">Gender</span>
              <div className="flex gap-5">
                <label className="flex items-center gap-3">
                  <input
                    className="border-gray-300 rounded text-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    type="radio"
                    name="gender"
                    value="male"
                  />
                  <span className="text-gray-700">Male</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    className="border-gray-300 rounded text-indigo-500 focus:ring-2 focus:ring-indigo-500"
                    type="radio"
                    name="gender"
                    value="female"
                  />
                  <span className="text-gray-700">Female</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormReguler
