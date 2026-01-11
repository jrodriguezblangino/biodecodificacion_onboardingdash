import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Onboarding from './pages/onboarding';

/**
 * Componente principal de la aplicación.
 *
 * @returns Componente raíz de la aplicación
 */
function App(): React.JSX.Element {
  return (
    <Routes>
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/" element={<Onboarding />} />
    </Routes>
  );
}

export default App;
