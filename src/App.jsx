
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Perfil from './pages/Perfil';

function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarAoCarrinho(prato) {
    setCarrinho((atual) => [...atual, prato]);
  }

  function removerDoCarrinho(index) {
    setCarrinho((atual) => atual.filter((_, i) => i !== index));
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/perfil/:id"
          element={
            <Perfil
              carrinho={carrinho}
              adicionarAoCarrinho={adicionarAoCarrinho}
              removerDoCarrinho={removerDoCarrinho}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
