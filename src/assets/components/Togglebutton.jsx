import React, { useState } from "react";

function Togglebutton() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggleSwitch}
      className={`w-8 h-4 flex items-center rounded-full p-[1px] transition-colors duration-300 ease-in-out ${
        isOn ? "bg-green-500" : "bg-blue-500"
      }`}
    >
      <div
        className={`w-3 h-3 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-4" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default Togglebutton;
