import "./App.css";
import FileExplorer from "./components/FileExplorer";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import { SandpackProvider } from "@codesandbox/sandpack-react";
import { useState } from "react";

export default function App() {
  const defaultFiles = {
    "/App.js": {
      code: `import { useState } from "react";
export default function App(){
  const [count, setCount] = useState(0);
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "sans-serif" }}>
      <h1>🚀 Hello CipherStudio!</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>Reset</button>
    </div>
  );
}`
    },
    "/index.js": {
      code: `import { createRoot } from "react-dom/client";
import App from "./App";
createRoot(document.getElementById("root")).render(<App />);`
    },
    "/package.json": {
      code: JSON.stringify(
        {
          name: "cipherstudio",
          dependencies: {
            react: "18.2.0",
            "react-dom": "18.2.0"
          }
        },
        null,
        2
      )
    }
  };

  const [files, setFiles] = useState(defaultFiles);
  const [activeFile, setActiveFile] = useState("/App.js");

  const handleCodeChange = (newCode) => {
    setFiles({ ...files, [activeFile]: { code: newCode } });
  };

  return (
    <div className="app">
      <div className="sidebar">
        <h3>📁 Files</h3>
        <FileExplorer
          files={files}
          activeFile={activeFile}
          setActiveFile={setActiveFile}
        />
      </div>

      {/* Wrap both Editor and Preview inside SandpackProvider */}
      <SandpackProvider
        template="react"
        files={files}
        customSetup={{
          entry: "/index.js",
          dependencies: {
            react: "18.2.0",
            "react-dom": "18.2.0",
          },
        }}
      >
        <div className="editor">
          <CodeEditor
            code={files[activeFile].code}
            onChange={handleCodeChange}
          />
        </div>

        <div className="preview">
          <Preview />
        </div>
      </SandpackProvider>
    </div>
  );
}
