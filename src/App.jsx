import './App.css';
import Mainlayout from './layouts/MainLayout';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route index element={<HomePage />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
