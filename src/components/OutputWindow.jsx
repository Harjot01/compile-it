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
        autoClose: 3000, // Duration for the toast to stay visible
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }, [isError]);

  return (
    <div className="bg-[#2d2f34] flex-1 w-full max-h-[50vh] border border-gray-600 text-sm">
      <div
        className="text-white px-2 py-2 w-24 h-10 flex items-center"
        style={{ backgroundColor: themeColors }}
      >
        outputf.in
      </div>
      <div
        className={`h-full w-full ${
          isError ? "text-red-500" : "text-white"
        } p-3 border-t border-gray-600 overflow-auto`}
        style={{ backgroundColor: themeColors }}
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
