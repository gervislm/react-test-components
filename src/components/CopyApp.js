import React, { useState, useRef } from "react";

const CopyApp = () => {
  const [text, setText] = useState("");
  const [isCopied, setIsCopied] = useState(false);

  const inputRef = useRef();

  const handleCopy = () => {
    const input = inputRef.current;
    input.select();
    document.execCommand("copy");

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleCopy}>{isCopied ? "Copied!" : "Copy"}</button>

      {/* {isCopied && <h1>Text Copied</h1>} */}
    </div>
  );
};

export default CopyApp;
