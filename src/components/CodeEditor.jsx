// CodeEditor.jsx
import React, { useRef, useState } from "react";
import EditorNavbar from "./EditorNavbar";
import { Editor } from "@monaco-editor/react";
import InputWindow from "./InputWindow";
import OutputWindow from "./OutputWindow";
import { CODE_SNIPPETS } from "../constants";
import { OutputProvider } from "../context/OutputContext";

const CodeEditor = () => {
  const editorRef = useRef();
  const [language, setLanguage] = useState("cpp");
  const [sourceCode, setSourceCode] = useState(String(CODE_SNIPPETS[language]));
  const [inputValue, setInputValue] = useState("");

  const onSelectLanguage = (language) => {
    setLanguage(language);
    setSourceCode(CODE_SNIPPETS[language]);
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <OutputProvider>
      <div className="flex flex-row h-screen overflow-hidden">
        {/* Left Side - Editor */}
        <div className="flex flex-col w-[60vw] h-full">
          <EditorNavbar
            language={language}
            onSelectLanguage={onSelectLanguage}
            editorRef={editorRef}
            inputValue={inputValue}
          />
          <div className="border border-gray-600 flex-grow overflow-hidden">
            <Editor
              theme="vs-dark"
              language={language}
              className="h-full"
              onMount={onMount}
              value={sourceCode}
              onChange={(sourceCode) => setSourceCode(sourceCode)}
            />
          </div>
        </div>

        {/* Right Side - Input/Output */}
        <div className="flex flex-col w-[40vw] h-full">
          <InputWindow inputValue={inputValue} setInputValue={setInputValue} />
          <OutputWindow />
        </div>
      </div>
    </OutputProvider>
  );
};

export default CodeEditor;
