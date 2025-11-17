
import React from 'react';

interface CodeBlockProps {
  code: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  return (
    <div className="bg-gray-800 rounded-lg my-4 overflow-hidden">
      <pre className="text-sm p-4 overflow-x-auto text-white">
        <code>{code.trim()}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
