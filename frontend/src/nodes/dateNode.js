import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date || new Date().toISOString().split('T')[0]);

  return (
    <BaseNode
      id={id}
      label="Date Picker"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-date` }
      ]}
    >
      <label>
        Selected Date:
        <input 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)} 
        />
      </label>
    </BaseNode>
  );
};
