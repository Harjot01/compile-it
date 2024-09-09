import { loader } from "@monaco-editor/react";

const defineTheme = async (theme) => {
  try {
    const monaco = await loader.init();

    const themes = import.meta.glob(
      "/node_modules/monaco-themes/themes/*.json"
    );

    const themePath = `/node_modules/monaco-themes/themes/${theme.name}.json`;

    if (themes[themePath]) {
      const themeData = await themes[themePath]();
      monaco.editor.defineTheme(theme.id, themeData);
      monaco.editor.setTheme(theme.id);
    } else {
      console.error("Theme not found:", theme.id);
    }
  } catch (error) {
    console.error("An error occurred during Monaco initialization:", error);
  }
};

export default defineTheme;
