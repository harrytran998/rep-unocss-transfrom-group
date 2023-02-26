import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import './app.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p class="text-red">Hello</p>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  )
}
