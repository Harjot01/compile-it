// InputWindow.jsx
import React from "react";

const InputWindow = ({ inputValue, setInputValue }) => {
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="bg-[#2d2f34] flex-1 w-full max-h-[50vh] border border-gray-600 ">
      <div className="text-white px-4 py-2 bg-[#1c2130] w-24 h-12 flex items-center">
        inputf.in
      </div>
      <textarea
        id="code-input"
        className="bg-[#1c2130] text-white w-full h-full p-3 resize-none outline-none border-t border-gray-600 overflow-auto"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your input here"
      />
    </div>
  );
};

export default InputWindow;
