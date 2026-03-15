import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ImageNode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://via.placeholder.com/150');

  return (
    <BaseNode
      id={id}
      label="Image"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-url` },
        { type: 'source', position: Position.Right, id: `${id}-image` }
      ]}
    >
      <label>
        Image URL:
        <input 
          type="text" 
          value={url} 
          onChange={(e) => setUrl(e.target.value)} 
        />
      </label>
      <div style={{ marginTop: '10px', textAlign: 'center' }}>
        <img 
          src={url} 
          alt="Preview" 
          style={{ width: '100%', maxWidth: '150px', borderRadius: '8px' }}
          onError={(e) => { e.target.style.display = 'none'; }}
          onLoad={(e) => { e.target.style.display = 'block'; }}
        />
      </div>
    </BaseNode>
  );
};
