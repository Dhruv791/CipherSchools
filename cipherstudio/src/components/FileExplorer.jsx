export default function FileExplorer({ files, activeFile, setActiveFile }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {Object.keys(files).map((file) => (
        <li
          key={file}
          style={{
            background: activeFile === file ? "#007acc" : "transparent",
            padding: "6px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={() => setActiveFile(file)}
        >
          {file}
        </li>
      ))}
    </ul>
  );
}
