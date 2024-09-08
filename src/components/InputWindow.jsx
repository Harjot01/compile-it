// InputWindow.jsx
import React from "react";
import { useTheme } from "../context/ThemeContext";

const InputWindow = ({ inputValue, setInputValue }) => {
  const { themeColors } = useTheme();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="bg-[#2d2f34] flex-1 w-full h-full border border-gray-600 text-sm flex flex-col">
      <div
        className="text-white px-4 py-2 w-24 h-7 flex items-center relative border-r border-b border-gray-600"
        style={{
          backgroundColor: themeColors.bgColor,
          color: themeColors.textColor,
        }}
      >
        inputf.in
      </div>
      <div className="flex-1">
        <textarea
          id="code-input"
          className="bg-[#1c2130] w-full h-full p-3 resize-none outline-none "
          style={{
            backgroundColor: themeColors.bgColor,
            color: themeColors.textColor,
          }}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter your input here"
        />
      </div>
    </div>
  );
};

export default InputWindow;
