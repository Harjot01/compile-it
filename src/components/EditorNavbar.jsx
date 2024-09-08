// EditorNavbar.jsx
import React, { useContext, useState } from "react";
import { executeCode } from "../api/api";
import { OutputContext } from "../context/OutputContext";

import LanguageSelector from "./LanguageSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLanguage } from "../context/LanguageContext";

const EditorNavbar = ({ editorRef, inputValue }) => {
  const { setOutput, setIsError } = useContext(OutputContext);
  const { language } = useLanguage();
  const [isLoading, setIsLoading] = useState(false);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    if (!sourceCode) return;

    try {
      setIsLoading(true);
      const { run: result } = await executeCode(
        language,
        sourceCode,
        inputValue
      );
      setOutput(result.output.split("\n"));
      result.stderr ? setIsError(true) : setIsError(false);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex  bg-[#2d2f34]  w-full  h-7  border border-gray-600 items-center justify-between">
      <LanguageSelector />

      <div className="flex items-center gap-12 pr-4 h-full">
        {/* Theme Switcher */}
        <ThemeSwitcher />

        <button
          className="text-white bg-[#0556f3] h-5 px-6  rounded hover:bg-[#064acb] text-sm"
          onClick={runCode}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="spinner-border animate-spin inline-block mt-1 border-2 border-t-2 border-t-transparent border-white rounded-full mr-2"></div>
          ) : (
            "Run"
          )}
        </button>
      </div>
    </div>
  );
};

export default EditorNavbar;
