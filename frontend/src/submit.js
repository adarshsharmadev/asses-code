import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
    // We can use a direct selector without shallow if we are just calling it on click, 
    // or just get state in the onClick handler to avoid unnecessary re-renders.
    const nodes = useStore(state => state.nodes);
    const edges = useStore(state => state.edges);

    const handleSubmit = async () => {
        try {
            const formData = new FormData();
            formData.append('pipeline', JSON.stringify({ nodes, edges }));
            
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                body: formData
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            alert(`Pipeline parsed successfully!\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag}`);
        } catch (error) {
            console.error('Submission failed:', error);
            alert('Submission failed! Ensure the FastAPI backend is running on port 8000.');
        }
    };

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '20px 0'}}>
            <button 
                type="button" 
                onClick={handleSubmit}
                style={{
                  padding: '12px 24px',
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                }}
            >
                Submit Pipeline
            </button>
        </div>
    );
}
