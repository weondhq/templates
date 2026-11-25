import { useState } from 'react';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="page">
      <div className="card">
        <p className="kicker">[ deployed on weond ]</p>
        <h1>Vite + React Starter</h1>
        <p className="lead">
          Edit <code>src/App.tsx</code> and push to GitHub to trigger an automatic deployment.
        </p>
        <div className="actions">
          <button type="button" onClick={() => setCount((c) => c + 1)}>
            Counter: {count}
          </button>
          <a href="https://weond.com/docs" target="_blank" rel="noreferrer">
            Read Docs ↗
          </a>
        </div>
      </div>
    </main>
  );
}
