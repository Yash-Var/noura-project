// import React, { useState, useEffect } from 'react';
// import './Focus.css';
// import reset from './reset.png';

// const Focus = () => {
//   const [time, setTime] = useState(25 * 60); // Initial time in seconds
//   const [isActive, setIsActive] = useState(false);
//   const [isBreak, setIsBreak] = useState(false);
//   const [autoTransition, setAutoTransition] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedDuration, setSelectedDuration] = useState(25);

//   useEffect(() => {
//     let interval = null;

//     if (isActive && time > 0) {
//       interval = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     } else if (!isActive && time === 0) {
//       clearInterval(interval);
//       if (autoTransition) {
//         if (isBreak) {
//           setIsBreak(false); // Transition from short break to Pomodoro
//           setTime(25 * 60);
//         } else {
//           setIsBreak(true); // Transition from Pomodoro to short break
//           setTime(isLongBreak() ? 15 * 60 : 5 * 60);
//         }
//       }
//     }

//     return () => {
//       clearInterval(interval);
//     };
//   }, [isActive, time, autoTransition, isBreak]);

//   const startTimer = () => {
//     setIsActive(true);
//     setIsBreak(false);
//   };

//   const pauseTimer = () => {
//     setIsActive(false);
//   };

//   const resetTimer = () => {
//     setTime(25 * 60);
//     setIsActive(false);
//     setIsBreak(false);
//   };

//   const formatTime = (time) => {
//     const minutes = Math.floor(time / 60).toString().padStart(2, '0');
//     const seconds = (time % 60).toString().padStart(2, '0');
//     return `${minutes}:${seconds}`;
//   };

  

//   const getTimerDuration = () => {
//     return isBreak ? (isLongBreak() ? 15 : 5) : 25;
//   };

//   const isLongBreak = () => {
//     return time === 0 && !isBreak && (getCompletedPomodoros() % 4 === 0);
//   };

//   const getCompletedPomodoros = () => {
//     return Math.floor((25 * 60 - time) / (25 * 60));
//   };

//   const handleAutoTransitionChange = (event) => {
//     setAutoTransition(event.target.checked);
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const handleDurationSelect = (duration) => {
//     setSelectedDuration(duration);
//     setTime(duration * 60);
//     setIsDropdownOpen(false);
//   };

//   const handleTabClick = (duration) => {
//     setSelectedDuration(duration);
//     setTime(duration * 60);
//     setIsBreak(duration !== 25);
//     setIsActive(false);
//   };

//   return (
//     <div className={`container ${isDropdownOpen ? 'expanded-container' : ''}`}>
//       <div className="timer-container">
//         <div className="timer">
//           <div>{formatTime(time)}</div>
//         </div>
//         <div className="timer-controls">
//           {!isActive && (
//             <button className="start-pause-btn" onClick={startTimer}>Start</button>
//           )}
//           {isActive && (
//             <button className="start-pause-btn" onClick={pauseTimer}>Pause</button>
//           )}
//           <button className="reset-btn" onClick={resetTimer}><img className="reset-img" src={reset} alt="reset"></img></button>
//         </div>
//         {isLongBreak() && (
//           <div>Take a long break!</div>
//         )}
//       </div>
  
//       <div className="tabs-container">
//         <div className="tabs">
//           <button className={`tab ${!isBreak ? 'active' : ''}`} onClick={() => handleTabClick(25)}>Pomodoro</button>
//           <button className={`tab ${isBreak && !isLongBreak() ? 'active' : ''}`} onClick={() => handleTabClick(5)}>Short Break</button>
//           <button className={`tab ${isBreak && isLongBreak() ? 'active' : ''}`} onClick={() => handleTabClick(15)}>Long Break</button>
//         </div>
//       </div>
  
//       <div className="dropdown-container">
//         <button className="dropdown-toggle" onClick={handleDropdownToggle}>
//           <span>&#9662;</span>
//         </button>
//         {isDropdownOpen && (
//           <div className="dropdown-menu">
//             <label className="auto-transition-label">
//               <input
//                 className="checkbox"
//                 type="checkbox"
//                 checked={autoTransition}
//                 onChange={handleAutoTransitionChange}
//               />
//               Auto-transition timer
//             </label>
//             <div className="dropdown-item">
//               <table className="duration-table">
//                 <thead>
//                   <tr>
//                     <th>Pomodoro</th>
//                     <th>Short Break</th>
//                     <th>Long Break</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <td><button className="duration-button" onClick={() => handleDurationSelect(25)}>25</button></td>
//                     <td><button className="duration-button" onClick={() => handleDurationSelect(5)}>5</button></td>
//                     <td><button className="duration-button" onClick={() => handleDurationSelect(15)}>15</button></td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         )}
//       </div>
  
//       <hr />
//     </div>
//   );
  
// };

// export default Focus;
import React, { useState, useEffect } from 'react';
import './Focus.css';
import reset from './reset.png';

const Focus = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerType, setTimerType] = useState('Work');
  const [workDuration, setWorkDuration] = useState(25);
  const [shortBreakDuration, setShortBreakDuration] = useState(5);
  const [longBreakDuration, setLongBreakDuration] = useState(15);
  const [currentBreakCount, setCurrentBreakCount] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [autoTransitionEnabled, setAutoTransitionEnabled] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else if (minutes > 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          clearInterval(intervalId);
          setIsRunning(false);
          handleTimerCompletion();
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning, minutes, seconds]);

  const handleTimerCompletion = () => {
    if (timerType === 'Work') {
      if (currentBreakCount < 3) {
        setTimerType('Short Break');
        setMinutes(shortBreakDuration);
        setCurrentBreakCount((prevCount) => prevCount + 1);
      } else {
        setTimerType('Long Break');
        setMinutes(longBreakDuration);
        setCurrentBreakCount(0);
      }
    } else if (timerType === 'Short Break') {
      setTimerType('Work');
      setMinutes(workDuration);
    } else {
      // Timer type is 'Long Break'
      if (autoTransitionEnabled) {
        // Do not transition to any other state after Long Break
        setTimerType('Work');
        setMinutes(workDuration);
      } else {
        // Stay on Long Break after completion
        setMinutes(longBreakDuration);
      }
    }
  };
  

  const startTimer = () => {
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimerType('Work');
    setMinutes(workDuration);
    setSeconds(0);
    setCurrentBreakCount(0);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleTimerChange = (duration) => {
    if (!isRunning) {
      setMinutes(duration);
      setSeconds(0);
      setAutoTransitionEnabled(false); // Reset the auto-transition state
    }
  };
  

  return (
    <div
      style={{
        background: '#243340',
        width: isDropdownOpen ? '280px' : '280px',
        height: isDropdownOpen ? '286px' : '162px',
        top: '96px',
        left: '1136px',
        // position: 'absolute',
      }}
    >
      <div className='t-cont'>
        <div className='timer'>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
        <div>
          {!isRunning ? (
            <button className='start-btn' onClick={startTimer}>Start</button>
          ) : (
            <button className='start-btn' onClick={pauseTimer}>Pause</button>
          )}
          <button className='reset' onClick={resetTimer}><img src={reset}></img></button>
        </div>
      </div>

      <div style={{ textAlign: 'center' }}>
        <button className='timer-btn' onClick={() => handleTimerChange(25)}>Pomodoro</button>
        <button className='timer-btn' onClick={() => handleTimerChange(5)}>Short Break</button>
        <button className='timer-btn' onClick={() => handleTimerChange(15)}>Long Break</button>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          &#9662;
        </button>
        <hr style={{ marginTop: '7.5px', marginBottom: '0' }} />
        {isDropdownOpen && (
          <div className="dropdown-content">
            <label>
              <input type="checkbox" />
              Auto-transition timer
            </label>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Pomodoro</th>
                    <th>Short Break</th>
                    <th>Long Break</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                      <button  onClick={() => handleTimerChange(25)}>25</button>
                    </td>
                    <td>
                      <button onClick={() => handleTimerChange(5)}>5</button>
                    </td>
                    <td>
                      <button  onClick={() => handleTimerChange(15)}>15</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      
    </div>
  );
};

export default Focus;

