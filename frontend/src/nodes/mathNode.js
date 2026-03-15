import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'Add');

  return (
    <BaseNode
      id={id}
      label="Math Operation"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-op1`, style: { top: '30%' } },
        { type: 'target', position: Position.Left, id: `${id}-op2`, style: { top: '70%' } },
        { type: 'source', position: Position.Right, id: `${id}-result` }
      ]}
    >
      <label>
        Operation:
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="Add">Add (+)</option>
          <option value="Subtract">Subtract (-)</option>
          <option value="Multiply">Multiply (*)</option>
          <option value="Divide">Divide (/)</option>
        </select>
      </label>
    </BaseNode>
  );
};
