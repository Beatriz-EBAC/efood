import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Home from './pages/Home';
import Perfil from './pages/Perfil';

import { adicionar, remover } from './store/cartSlice';

function App() {
  const carrinho = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  function adicionarAoCarrinho(prato) {
    dispatch(adicionar(prato));
  }

  function removerDoCarrinho(index) {
    dispatch(remover(index));
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