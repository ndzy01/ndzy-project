import React from 'react';
import { observer } from 'mobx-react-lite';
import './App.css';
import { useStores } from './store/useStores';

export const App: React.FC<Record<string, unknown>> = observer(() => {
  const {
    loading,
    b: {
      state: { b },
      fb1Async,
    },
  } = useStores();

  return (
    <>
      <div style={{ color: loading.b ? 'red' : '' }} onClick={() => fb1Async()}>
        Seconds passed: {b}
      </div>
    </>
  );
});
