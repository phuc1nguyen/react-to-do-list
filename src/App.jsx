import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button type='button' className='button is-success' onClick={() => setCount(count => count + 1)}>Count</button>
      <h1>{count} to do lists</h1>
    </>
  );
}