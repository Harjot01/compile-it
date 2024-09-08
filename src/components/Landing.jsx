// CodeEditor.jsx
import React, { useEffect, useRef, useState } from "react";
import EditorNavbar from "./EditorNavbar";
import { Editor } from "@monaco-editor/react";
import InputWindow from "./InputWindow";
import OutputWindow from "./OutputWindow";
import { CODE_SNIPPETS } from "../constants/constants";
import defineTheme from "../lib/defineTheme";
import { useTheme } from "../context/ThemeContext";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { useLanguage } from "../context/LanguageContext";

const Landing = () => {
  const editorRef = useRef();
  const [sourceCode, setSourceCode] = useState("");
  const [inputValue, setInputValue] = useState("");
  const { language } = useLanguage();
  const { theme, themeColors } = useTheme();

  useEffect(() => {
    setSourceCode(CODE_SNIPPETS[language.value] || "");
    defineTheme(theme);
  }, [language]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div className="flex flex-row h-screen overflow-hidden">
      {/* Left Side - Code Editor */}
      <PanelGroup direction="horizontal">
        <Panel defaultSize={60} minSize={30}>
          <div className="flex flex-col h-full">
            <EditorNavbar editorRef={editorRef} inputValue={inputValue} />

            <div className="border border-gray-600 flex-grow overflow-hidden">
              <Editor
                theme={theme}
                language={language.value}
                className="h-full"
                onMount={onMount}
                value={sourceCode}
                onChange={(sourceCode) => setSourceCode(sourceCode)}
              />
            </div>
          </div>
        </Panel>

        <PanelResizeHandle
          className="w-1 cursor-col-resize"
          style={{ backgroundColor: themeColors.textColor }}
        />

        {/* Right Side - Input/Output */}
        <Panel defaultSize={40} minSize={20}>
          <div className="flex flex-col h-full">
            <PanelGroup direction="vertical">
              <Panel default={50}>
                <InputWindow
                  inputValue={inputValue}
                  setInputValue={setInputValue}
                />
              </Panel>
              <PanelResizeHandle
                className="h-1  cursor-row-resize"
                style={{ backgroundColor: themeColors.textColor }}
              />
              <Panel default={50}>
                <OutputWindow />
              </Panel>
            </PanelGroup>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Landing;
