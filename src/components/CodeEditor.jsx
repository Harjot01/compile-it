// CodeEditor.jsx
import React, { useEffect, useRef, useState } from "react";
import EditorNavbar from "./EditorNavbar";
import { Editor, loader } from "@monaco-editor/react";
import InputWindow from "./InputWindow";
import OutputWindow from "./OutputWindow";
import { CODE_SNIPPETS } from "../constants";
import { OutputProvider } from "../context/OutputContext";
import { LanguageProvider, useLanguage } from "../context/LanguageContext";
import defineTheme from "../defineTheme";
import { ThemeProvider, useTheme } from "../context/ThemeContext";

const CodeEditorContent = () => {
  const editorRef = useRef();
  const [sourceCode, setSourceCode] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { language } = useLanguage();
  // const [theme, setTheme] = useState("idlefingers");
  const { theme } = useTheme();

  useEffect(() => {
    setSourceCode(CODE_SNIPPETS[language] || "");
    defineTheme(theme);
  }, [language]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  // const handleThemeChange = (theme) => {
  //   defineTheme(theme);
  //   setTheme(theme);
  // };

  // useEffect(() => {
  //   loader
  //     .init()
  //     .then((monaco) => {
  //       import("monaco-themes/themes/krTheme.json").then((data) => {
  //         monaco.editor.defineTheme("Night-Owl", data);
  //         setTheme("Night-Owl");
  //       });
  //     })
  //     .catch((error) =>
  //       console.error(
  //         "An error occurred during initialization of Monaco: ",
  //         error
  //       )
  //     );
  // }, []);
  return (
    <div className="flex flex-row h-screen overflow-hidden">
      {/* Left Side - Editor */}
      <div className="flex flex-col w-[60vw] h-full">
        <EditorNavbar editorRef={editorRef} inputValue={inputValue} />

        <div className="border border-gray-600 flex-grow overflow-hidden">
          <Editor
            theme={theme}
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
  );
};

const CodeEditor = () => {
  return (
    <OutputProvider>
      <LanguageProvider>
        <ThemeProvider>
          <CodeEditorContent />
        </ThemeProvider>
      </LanguageProvider>
    </OutputProvider>
  );
};

export default CodeEditor;
