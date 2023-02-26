import { useState } from 'preact/hooks';
import preactLogo from './assets/preact.svg';
import './app.css';

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="text-white p-2 bg-blue-400 rounded-full uppercase hover:(text-red bg-purple-300)">
        <h5 class="text-2xl">Hello</h5>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
