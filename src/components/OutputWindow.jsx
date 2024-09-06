// OutputWindow.jsx
import React, { useContext } from "react";
import { OutputContext } from "../context/OutputContext";

const OutputWindow = () => {
  const { output } = useContext(OutputContext);
  return (
    <div className="bg-[#2d2f34] flex-1 w-full max-h-[50vh] border border-gray-600 ">
      <div className="text-white px-4 py-2 bg-[#1c2130] w-24 h-12 flex items-center">
        outputf.in
      </div>
      <div className="h-full w-full text-white bg-[#1c2130] p-3 border-t border-gray-600 overflow-auto">
        {output?.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default OutputWindow;
