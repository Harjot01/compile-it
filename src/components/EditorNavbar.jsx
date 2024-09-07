// EditorNavbar.jsx
import React, { useContext, useState } from "react";
import { executeCode } from "../api";
import { OutputContext } from "../context/OutputContext";

import LanguageSelector from "./LanguageSelector";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLanguage } from "../context/LanguageContext";

const EditorNavbar = ({
  editorRef,
  inputValue,

}) => {
  const { setOutput, setIsError } = useContext(OutputContext);
  const {language, onSelectLanguage} = useLanguage()
  const [isLoading, setIsLoading] = useState(false);

  //  Object.entries(monacoThemes).map(([themeId, themeName])=>(
  //   console.log(themeName, themeId)
  //  ))

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
    <div className="flex  bg-[#2d2f34] w-[60vw] border border-gray-600 h-10 items-center justify-between">
      {/* <div className="h-full ml-1 flex  items-center w-48 bg-[#1c2130] "> */}
      <LanguageSelector
      />
      {/* </div> */}

      <div className="flex items-center gap-12 pr-4 h-full">
        {/* Theme Switcher */}
        <ThemeSwitcher  />

        <button
          className="text-white bg-[#0556f3] h-8 px-6  rounded hover:bg-[#064acb] text-sm"
          onClick={runCode}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="spinner-border animate-spin inline-block w-4 h-4 border-2 border-t-2 border-t-transparent border-white rounded-full mr-2"></div>
          ) : (
            "Run"
          )}
        </button>
      </div>
    </div>
  );
};

export default EditorNavbar;
