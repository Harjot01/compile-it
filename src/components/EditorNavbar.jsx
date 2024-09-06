// EditorNavbar.jsx
import React, { useContext, useState } from "react";
import { LANGUAGE_VERSIONS } from "../constants";
import { executeCode } from "../api";
import { OutputContext } from "../context/OutputContext";

const EditorNavbar = ({
  language,
  onSelectLanguage,
  editorRef,
  inputValue,
}) => {
  const { setOutput } = useContext(OutputContext);
  const [isLoading, setIsLoading] = useState(false);
  const languages = Object.entries(LANGUAGE_VERSIONS);
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
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex bg-[#2d2f34] w-[60vw] border border-gray-600 h-12 items-center justify-between">
      <div className="px-4 py-2 bg-[#1c2130] ">
        <select
          className="text-white bg-transparent"
          name="languages"
          id="languages"
          value={language}
          onChange={(e) => onSelectLanguage(e.target.value)}
        >
          {languages.map(([language, version]) => (
            <option key={language} className="bg-[#2d2f34]" value={language}>
              {language} ({version})
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-3 pr-4">
        {/* <div className='text-white bg-[#21262d] px-4 py-2'>Change Theme</div> */}
        <button
          className="text-white bg-[#0556f3] px-4 py-2 rounded hover:bg-[#064acb] transition duration-300"
          onClick={runCode}
        >
          {isLoading ? "Executing..." : "Run Code"}
        </button>
      </div>
    </div>
  );
};

export default EditorNavbar;
