import React from 'react'

function Main() {


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
            <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">Timer & Stopwatch</h1>
    
            {/* Timer Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 text-center mb-4">Timer</h2>
              <div className="flex justify-center items-center space-x-4 mb-6">
                <input
                  type="number"
                  placeholder="HH"
                  className="w-20 p-2 border border-gray-300 rounded text-center text-lg"
                />
                <span className="text-xl font-semibold text-gray-600">:</span>
                <input
                  type="number"
                  placeholder="MM"
                  className="w-20 p-2 border border-gray-300 rounded text-center text-lg"
                />
                <span className="text-xl font-semibold text-gray-600">:</span>
                <input
                  type="number"
                  placeholder="SS"
                  className="w-20 p-2 border border-gray-300 rounded text-center text-lg"
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button className="bg-green-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-green-600 transition">
                  Start
                </button>
                <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-red-600 transition">
                  Reset
                </button>
              </div>
            </div>
    
            {/* Separator */}
            <hr className="my-8" />
    
            {/* Stopwatch Section */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-600 text-center mb-4">Stopwatch</h2>
              <div className="text-center text-4xl font-bold text-gray-700 mb-6">
                00:00:00
              </div>
              <div className="flex justify-center space-x-4">
                <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-blue-600 transition">
                  Start
                </button>
                <button className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-yellow-600 transition">
                  Stop
                </button>
                <button className="bg-red-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-red-600 transition">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Main;