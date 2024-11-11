import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./pages/Game";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Game/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
