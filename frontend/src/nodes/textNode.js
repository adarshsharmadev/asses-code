import { useState, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    // Extract valid variables
    const matches = Array.from(currText.matchAll(VARIABLE_REGEX));
    const uniqueVars = [...new Set(matches.map(m => m[1]))];
    setVariables(uniqueVars);

    // Auto-resize textarea
    const el = textareaRef.current;
    if (el) {
      // Reset height/width to auto to shrink if text is deleted
      el.style.height = 'auto';
      el.style.width = 'auto';
      
      el.style.height = `${el.scrollHeight}px`;
      
      // Calculate width (rough estimate)
      // Limit max width so it doesn't grow infinitely large on a single line
      const newWidth = Math.max(200, Math.min(el.scrollWidth + 10, 500));
      el.style.width = `${newWidth}px`;
    }
  }, [currText]);

  // Dynamically create handles for variables + default output handle
  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-output` }
  ];

  // Distribute target handles evenly
  variables.forEach((v, index) => {
    handles.push({
      type: 'target',
      position: Position.Left,
      id: `${id}-var-${v}`,
      style: { top: `${((index + 1) * 100) / (variables.length + 1)}%` },
    });
  });

  return (
    <BaseNode id={id} label="Text" handles={handles}>
      <label>
        Text:
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={(e) => setCurrText(e.target.value)}
          style={{
            overflow: 'hidden',
            minHeight: '40px',
            minWidth: '200px',
            resize: 'none',
            boxSizing: 'border-box'
          }}
        />
      </label>
    </BaseNode>
  );
};
