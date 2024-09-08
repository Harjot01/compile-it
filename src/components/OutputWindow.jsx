// OutputWindow.jsx
import React, { useContext, useEffect } from "react";
import { OutputContext } from "../context/OutputContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../context/ThemeContext";

const OutputWindow = () => {
  const { output, isError } = useContext(OutputContext);
  const { themeColors } = useTheme();

  useEffect(() => {
    if (isError) {
      toast.error("An error occurred while executing the code!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [isError]);

  return (
    <div className="bg-[#2d2f34] flex-1 w-full h-full border border-gray-600 text-sm">
      <div
        className="px-2 py-2 w-24 h-7 flex items-center border-r border-b border-gray-600"
        style={{
          backgroundColor: themeColors.bgColor,
          color: themeColors.textColor,
        }}
      >
        outputf.in
      </div>
      <div
        className={`h-full w-full p-3  overflow-auto`}
        style={{
          backgroundColor: themeColors.bgColor,
          color: `${isError ? "red" : themeColors.textColor}`,
        }}
      >
        {output?.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <ToastContainer />
    </div>
  );
};

export default OutputWindow;
