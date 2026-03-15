import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const [interval, setIntervalVal] = useState(data?.interval || 1000);

  return (
    <BaseNode
      id={id}
      label="Timer Trigger"
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-tick` }
      ]}
    >
      <label>
        Interval (ms):
        <input 
          type="number" 
          value={interval} 
          onChange={(e) => setIntervalVal(e.target.value)} 
          min="100"
          step="100"
        />
      </label>
      <span style={{ fontSize: '11px', color: '#888' }}>Triggers every {interval}ms</span>
    </BaseNode>
  );
};
