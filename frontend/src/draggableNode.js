// draggableNode.js

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    return (
      <div
        className={`draggable-node ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ 
          cursor: 'grab', 
          width: 'calc(50% - 15px)',
          height: '60px',
          display: 'flex', 
          alignItems: 'center', 
          borderRadius: '8px',
          justifyContent: 'center', 
          flexDirection: 'column',
          fontSize: '13px',
          fontWeight: '500'
        }} 
        draggable
      >
          <span>{label}</span>
      </div>
    );
};