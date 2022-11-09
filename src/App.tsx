import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import { StoreProvider } from './lib/store'
import { HomePage } from './pages/HomePage';
import { DetailPage } from './pages/DetailPage';

function App() {

  return (
    <div className="App">
      <StoreProvider>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/:player_id" element={<DetailPage/>}/>
          </Routes>
        </HashRouter>
      </StoreProvider>
    </div>
  )
}

export default App
