import { Handle, Position } from 'reactflow';
import './BaseNode.css';

export const BaseNode = ({ id, label, children, handles = [], style = {}, headerEnd }) => {
  return (
    <div className="base-node" style={style}>
      <div className="node-header">
        <span>{label}</span>
        {headerEnd && <div className="header-end">{headerEnd}</div>}
      </div>
      <div className="node-content">
        {children}
      </div>
      {handles.map((h, idx) => (
        <Handle
          key={`${id}-handle-${idx}`}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
        />
      ))}
    </div>
  );
};
