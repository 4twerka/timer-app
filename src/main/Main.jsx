import React, { useEffect, useState } from 'react'

function Main() {
  const [seconds, setSeconds] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0); 
  const [sec, setSec] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [remainingTime, setRemainingTime] = useState(0);

  const calculateTotalSeconds = () => {
    return parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(sec);
  };

  useEffect(() => {
    let timer = null;
    if (isActive && remainingTime > 0) {
      timer = setInterval(() => {
        setRemainingTime((prev) => prev - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setIsActive(false); 
    }
  
    return () => clearInterval(timer);
  }, [isActive, remainingTime]);
  
  const handleStartTimer = () => {
    const totalSeconds = calculateTotalSeconds();
    setRemainingTime(totalSeconds);
    setIsActive(true);
  };
  
  const handleResetTimer = () => {
    setIsActive(false);
    setRemainingTime(0);
    setHours(0);
    setMinutes(0);
    setSec(0);
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };
  

  // Timer
  const inputValueHour = (e) => {
    setHours(e.target.value);
  }
  const inputValueMinutes = (e) => {
    setMinutes(e.target.value);
  }

  const inputValueSec = (e) => {
    setSec(e.target.value);
  }
  // 

  const startStopWatch = () => {
    setIsClicked(!isClicked);
  }

  const stopStopWatch = () => {
    setIsClicked(false);
  }

  const resetStopWatch = () => {
    setIsClicked(false);
    setSeconds(0);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => , 1000);
  // });

  useEffect(() => {
    let stopWatch = 0;

    if (isClicked) {
      stopWatch = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
   } else if (!isClicked && seconds !== 0) {
      clearInterval(stopWatch);
    }

    return () => clearInterval(stopWatch);
  }, [isClicked]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
            <h1 className="text-3xl font-bold text-gray-700 text-center mb-8">Timer & Stopwatch</h1>
    
            {/* Timer Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-600 text-center mb-4">Timer</h2>
              <div className="flex justify-center items-center space-x-4 mb-6">
                <input
                  min="0"
                  max="59"
                  type="number"
                  placeholder="HH"
                  value={hours}
                  onChange={inputValueHour}
                  className="w-20 p-2 border border-gray-300 rounded text-center text-lg"
                />
                <span className="text-xl font-semibold text-gray-600">:</span>
                <input
                  min="0"
                  max="59"
                  type="number"
                  placeholder="MM"
                  value={minutes}
                  onChange={inputValueMinutes}
                  className="w-20 p-2 border border-gray-300 rounded text-center text-lg"
                />
                <span className="text-xl font-semibold text-gray-600">:</span>
                <input
                  min="0"
                  max="59"
                  type="number"
                  placeholder="SS"
                  value={sec}
                  onChange={inputValueSec}
                  className="w-20 p-2 border border-gray-300 rounded text-center text-lg"
                />
              </div>
              <div className='flex justify-center items-center'>
              {formatTime(remainingTime)}
              </div>
              <div className="flex justify-center space-x-4">
                <button onClick={handleStartTimer} className="bg-green-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-green-600 transition">
                  Start
                </button>
                <button onClick={handleResetTimer} className="bg-red-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-red-600 transition">
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
                {seconds}
              </div>
              <div className="flex justify-center space-x-4">
                <button onClick={startStopWatch} className="bg-blue-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-blue-600 transition">
                  Start
                </button>
                <button onClick={stopStopWatch} className="bg-yellow-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-yellow-600 transition">
                  Stop
                </button>
                <button onClick={resetStopWatch} className="bg-red-500 text-white font-semibold py-2 px-6 rounded shadow hover:bg-red-600 transition">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Main;