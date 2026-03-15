import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MarkdownNode = ({ id, data }) => {
  const [content, setContent] = useState(data?.content || '# Hello World');

  return (
    <BaseNode
      id={id}
      label="Markdown"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-md` },
        { type: 'source', position: Position.Right, id: `${id}-html` }
      ]}
      style={{ minWidth: '250px' }}
    >
      <label>
        Markdown Source:
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
          rows={3}
          style={{ width: '100%', resize: 'vertical' }}
        />
      </label>
      <div 
        style={{ 
          marginTop: '10px', 
          padding: '8px', 
          background: '#f1f5f9', 
          borderRadius: '4px',
          fontSize: '12px' 
        }}
      >
        <strong>Preview:</strong>
        <p style={{ margin: '5px 0 0 0', whiteSpace: 'pre-wrap' }}>{content}</p>
      </div>
    </BaseNode>
  );
};
