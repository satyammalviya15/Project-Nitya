import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

export default function Readme() {
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    fetch(`https://raw.githubusercontent.com/satyammalviya15/ForeverShop/main/README.md?ts=${Date.now()}`)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error('Failed to fetch README:', err));
  }, []);

  return (
    <div className="markdown-body">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]} 
        rehypePlugins={[rehypeRaw]} // <-- This allows raw HTML tags
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
