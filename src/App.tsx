import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './pages/CalculatorPage.tsx';
import Result from './pages/ResultPage.tsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={'/'}
          element={<Calculator />}
        />

        <Route
          path={'/resultado'}
          element={<Result />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;