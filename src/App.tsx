import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { StoreProvider } from './lib/store'
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';

function App() {

  return (
    <div className="App">
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:player_id" element={<DetailPage/>}/>
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  )
}

export default App
