import { PipelineToolbar } from './toolbar';
import { PipelineUI } from './ui';
import { SubmitButton } from './submit';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>VectorShift Builder</h1>
        <SubmitButton />
      </header>
      <div className="main-content">
        <aside className="sidebar">
          <PipelineToolbar />
        </aside>
        <main className="canvas-area">
          <PipelineUI />
        </main>
      </div>
    </div>
  );
}

export default App;
