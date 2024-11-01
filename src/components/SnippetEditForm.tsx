"use client";

import { useState } from "react";
import { Editor } from "@monaco-editor/react";
import { Snippet } from "@prisma/client";

interface SnippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleCodeChange = (value: string = "") => {
    setCode(value);
  };
  return (
    <div>
      <h1>Editing Snippet {snippet.title}</h1>
      <Editor
        height={"40vh"}
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleCodeChange}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
}
