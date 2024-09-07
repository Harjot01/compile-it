// InputWindow.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const InputWindow = ({ inputValue, setInputValue }) => {
  const { themeColors } = useTheme();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="bg-[#2d2f34] flex-1 w-full max-h-[50vh] border border-gray-600 text-sm">
      <div className="text-white px-4 py-2 w-24 h-10 flex items-center" style={{backgroundColor: themeColors}}>
        inputf.in
      </div>
      <textarea
        id="code-input"
        className="bg-[#1c2130] text-white w-full h-full p-3 resize-none outline-none border-t border-gray-600 overflow-auto"
        style={{backgroundColor: themeColors}}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your input here"
      />
    </div>
  );
};

export default InputWindow;
