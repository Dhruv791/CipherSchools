import { SandpackCodeEditor } from "@codesandbox/sandpack-react";

export default function CodeEditor() {
  return (
    <SandpackCodeEditor
      showTabs={false}
      showLineNumbers
      showInlineErrors
      wrapContent
      style={{
        height: "100%",
        background: "#1e1e1e",
        color: "white",
        fontSize: "14px",
      }}
    />
  );
}
