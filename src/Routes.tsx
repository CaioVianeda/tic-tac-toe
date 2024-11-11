import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<>Opa</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
