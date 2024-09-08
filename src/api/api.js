import axios from "axios";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export const executeCode = async (language, sourceCode, inputValue) => {
  const response = await API.post("/execute", {
    language: language.name,
    version: language.version,
    files: [
      {
        content: sourceCode,
      },
    ],
    stdin: inputValue,
  });
  return response.data;
};
