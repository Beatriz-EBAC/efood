
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const API = 'https://api-ebac.vercel.app/api/efood/restaurantes';
const API_CHECKOUT = 'https://api-ebac.vercel.app/api/efood/checkout';

const Header = styled.header`
  background: #fff0e5;
  min-height: 70px;
  padding: 15px 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e66767;
`;

const HeaderLink = styled(Link)`
  color: #e66767;
  font-weight: bold;
  text-decoration: none;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const CartButton = styled.button`
  border: none;
  background: transparent;
  color: #e66767;
  cursor: pointer;
  font-weight: bold;
`;

const Banner = styled.section`
  min-height: 280px;
  background-image:
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
    url(${props => props.$image});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 25px 12%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Category = styled.span`
  font-size: 32px;
`;

const RestaurantName = styled.h2`
  font-size: 32px;
`;

const Main = styled.main`
  background: #fff8f2;
  padding: 50px 20px;
`;

const Grid = styled.div`
  max-width: 1100px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const DishCard = styled.article`
  background: #e66767;
  padding: 8px;
  color: white;
`;

const DishImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  display: block;
`;

const DishInfo = styled.div`
  padding: 10px 3px;
`;

const DishName = styled.h3`
  font-size: 17px;
  margin-bottom: 8px;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 1.5;
  min-height: 55px;
`;

const AddButton = styled.button`
  width: 100%;
  border: none;
  background: #fff0e5;
  color: #e66767;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: white;
  }
`;

const Footer = styled.footer`
  background: #ffebd9;
  min-height: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #e66767;
`;

const FooterText = styled.p`
  font-size: 11px;
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
  display: flex;
  justify-content: flex-end;
`;

const Panel = styled.aside`
  width: 360px;
  max-width: 90%;
  height: 100%;
  overflow-y: auto;
  background: #e66767;
  padding: 20px;
  color: white;
`;

const PanelTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: #fff0e5;
  color: #e66767;
  padding: 8px;
  margin-bottom: 8px;
`;

const CartImage = styled.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
`;

const CartDetails = styled.div`
  flex: 1;

  h4 {
    font-size: 13px;
  }

  p {
    font-size: 12px;
    margin-top: 5px;
  }
`;

const RemoveButton = styled.button`
  border: none;
  background: transparent;
  color: #e66767;
  cursor: pointer;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin: 20px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 12px;
`;

const Input = styled.input`
  width: 100%;
  height: 35px;
  border: none;
  background: #fff0e5;
  padding: 8px;
  color: #333;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const PanelButton = styled.button`
  width: 100%;
  border: none;
  background: #fff0e5;
  color: #e66767;
  padding: 12px;
  margin-top: 8px;
  cursor: pointer;
  font-weight: bold;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
`;

const ConfirmationText = styled.p`
  font-size: 13px;
  line-height: 1.6;
  margin: 15px 0;
`;

const ErrorText = styled.p`
  color: #fff;
  background: rgba(0, 0, 0, .2);
  padding: 10px;
  font-size: 13px;
  line-height: 1.5;
  margin: 12px 0;
`;

const ProductOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  background: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ProductModal = styled.div`
  background: #e66767;
  color: white;
  width: 100%;
  max-width: 700px;
  padding: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  position: relative;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-height: 90vh;
    overflow-y: auto;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

const ModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: #fff0e5;
  color: #e66767;
  padding: 6px 10px;
  cursor: pointer;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

function Perfil({ carrinho, adicionarAoCarrinho, removerDoCarrinho }) {
  const { id } = useParams();

  const [restaurante, setRestaurante] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);
  const [etapa, setEtapa] = useState('fechado');

  const [dadosEntrega, setDadosEntrega] = useState({
    nome: '',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: '',
  });

  const [dadosPagamento, setDadosPagamento] = useState({
    nomeCartao: '',
    numeroCartao: '',
    cvv: '',
    mes: '',
    ano: '',
  });

  const [pedido, setPedido] = useState(null);
  const [enviandoPedido, setEnviandoPedido] = useState(false);
  const [erroPedido, setErroPedido] = useState('');

  useEffect(() => {
    fetch(API)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Erro ao carregar restaurante');
        }
        return resposta.json();
      })
      .then((dados) => {
        const encontrado = dados.find(
          (item) => String(item.id) === String(id)
        );

        if (!encontrado) {
          throw new Error('Restaurante não encontrado');
        }

        setRestaurante(encontrado);
      })
      .catch(() => {
        setErro('Não foi possível carregar o restaurante.');
      })
      .finally(() => {
        setCarregando(false);
      });
  }, [id]);

  const total = carrinho.reduce(
    (soma, prato) => soma + Number(prato.preco), 0
  );

  const formatarPreco = (valor) =>
    Number(valor).toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });

  function atualizarEntrega(evento) {
    const { name, value } = evento.target;
    setDadosEntrega((atual) => ({ ...atual, [name]: value }));
  }

  function atualizarPagamento(evento) {
    const { name, value } = evento.target;
    setDadosPagamento((atual) => ({ ...atual, [name]: value }));
  }

  async function finalizarPagamento(evento) {
    evento.preventDefault();

    setEnviandoPedido(true);
    setErroPedido('');

    const dadosPedido = {
      products: carrinho.map((prato) => ({
        id: prato.id,
        price: Number(prato.preco),
      })),
      delivery: {
        receiver: dadosEntrega.nome,
        address: {
          description: dadosEntrega.endereco,
          city: dadosEntrega.cidade,
          zipCode: dadosEntrega.cep,
          number: Number(dadosEntrega.numero),
          complement: dadosEntrega.complemento,
        },
      },
      payment: {
        card: {
          name: dadosPagamento.nomeCartao,
          number: dadosPagamento.numeroCartao.replace(/\D/g, ''),
          code: Number(dadosPagamento.cvv),
          expires: {
            month: Number(dadosPagamento.mes),
            year: Number(dadosPagamento.ano),
          },
        },
      },
    };

    try {
      const resposta = await fetch(API_CHECKOUT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosPedido),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(
          dados.message || 'Não foi possível concluir o pedido.'
        );
      }

      setPedido(dados);
      setEtapa('confirmacao');
    } catch (erro) {
      setErroPedido(
        erro.message || 'Ocorreu um erro ao enviar o pedido.'
      );
    } finally {
      setEnviandoPedido(false);
    }
  }

  function comprarProduto() {
    adicionarAoCarrinho({
      ...produtoSelecionado,
      imagem: produtoSelecionado.foto,
    });
    setProdutoSelecionado(null);
  }

  if (carregando) return <p>Carregando restaurante...</p>;
  if (erro) return <p>{erro}</p>;
  if (!restaurante) return null;

  return (
    <>
      <Header>
        <HeaderLink to="/">Restaurantes</HeaderLink>
        <Logo>efood 🍴</Logo>
        <CartButton onClick={() => setEtapa('carrinho')}>
          {carrinho.length} produto(s) no carrinho
        </CartButton>
      </Header>

      <Banner $image={restaurante.capa}>
        <Category>{restaurante.tipo}</Category>
        <RestaurantName>{restaurante.titulo}</RestaurantName>
      </Banner>

      <Main>
        <Grid>
          {restaurante.cardapio.map((prato) => (
            <DishCard key={prato.id}>
              <DishImage src={prato.foto} alt={prato.nome} />
              <DishInfo>
                <DishName>{prato.nome}</DishName>
                <Description>{prato.descricao}</Description>
                <AddButton onClick={() => setProdutoSelecionado(prato)}>
                  Comprar produto
                </AddButton>
              </DishInfo>
            </DishCard>
          ))}
        </Grid>
      </Main>

      <Footer>
        <Logo>efood 🍴</Logo>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos,
          de responsabilidade dos seus parceiros.
        </FooterText>
      </Footer>

      {produtoSelecionado && (
        <ProductOverlay onClick={() => setProdutoSelecionado(null)}>
          <ProductModal onClick={(evento) => evento.stopPropagation()}>
            <CloseButton onClick={() => setProdutoSelecionado(null)}>
              X
            </CloseButton>

            <ModalImage
              src={produtoSelecionado.foto}
              alt={produtoSelecionado.nome}
            />

            <ModalInfo>
              <div>
                <h2>{produtoSelecionado.nome}</h2>
                <p>{produtoSelecionado.descricao}</p>
                <p>Porção: {produtoSelecionado.porcao}</p>
              </div>

              <Price>{formatarPreco(produtoSelecionado.preco)}</Price>

              <PanelButton onClick={comprarProduto}>
                Adicionar ao carrinho
              </PanelButton>
            </ModalInfo>
          </ProductModal>
        </ProductOverlay>
      )}

      {etapa !== 'fechado' && (
        <Overlay onClick={() => setEtapa('fechado')}>
          <Panel onClick={(evento) => evento.stopPropagation()}>

            {etapa === 'carrinho' && (
              <>
                <PanelTitle>Seu carrinho</PanelTitle>

                {carrinho.length === 0 && <p>Seu carrinho está vazio.</p>}

                {carrinho.map((prato, index) => (
                  <CartItem key={`${prato.id}-${index}`}>
                    <CartImage
                      src={prato.imagem || prato.foto}
                      alt={prato.nome}
                    />
                    <CartDetails>
                      <h4>{prato.nome}</h4>
                      <p>{formatarPreco(prato.preco)}</p>
                    </CartDetails>
                    <RemoveButton onClick={() => removerDoCarrinho(index)}>
                      🗑
                    </RemoveButton>
                  </CartItem>
                ))}

                <Total>
                  <span>Valor total</span>
                  <span>{formatarPreco(total)}</span>
                </Total>

                <PanelButton
                  disabled={carrinho.length === 0}
                  onClick={() => setEtapa('entrega')}
                >
                  Continuar com a entrega
                </PanelButton>
              </>
            )}

            {etapa === 'entrega' && (
              <>
                <PanelTitle>Entrega</PanelTitle>

                <Form onSubmit={(evento) => {
                  evento.preventDefault();
                  setEtapa('pagamento');
                }}>
                  <Field>Quem irá receber
                    <Input
                      name="nome"
                      value={dadosEntrega.nome}
                      onChange={atualizarEntrega}
                      required
                    />
                  </Field>

                  <Field>Endereço
                    <Input
                      name="endereco"
                      value={dadosEntrega.endereco}
                      onChange={atualizarEntrega}
                      required
                    />
                  </Field>

                  <Field>Cidade
                    <Input
                      name="cidade"
                      value={dadosEntrega.cidade}
                      onChange={atualizarEntrega}
                      required
                    />
                  </Field>

                  <FieldRow>
                    <Field>CEP
                      <Input
                        name="cep"
                        value={dadosEntrega.cep}
                        onChange={atualizarEntrega}
                        required
                      />
                    </Field>

                    <Field>Número
                      <Input
                        name="numero"
                        value={dadosEntrega.numero}
                        onChange={atualizarEntrega}
                        required
                      />
                    </Field>
                  </FieldRow>

                  <Field>Complemento
                    <Input
                      name="complemento"
                      value={dadosEntrega.complemento}
                      onChange={atualizarEntrega}
                    />
                  </Field>

                  <PanelButton type="submit">
                    Continuar com o pagamento
                  </PanelButton>
                </Form>

                <PanelButton onClick={() => setEtapa('carrinho')}>
                  Voltar
                </PanelButton>
              </>
            )}

            {etapa === 'pagamento' && (
              <>
                <PanelTitle>
                  Pagamento - {formatarPreco(total)}
                </PanelTitle>

                <Form onSubmit={finalizarPagamento}>
                  <Field>Nome no cartão
                    <Input
                      name="nomeCartao"
                      value={dadosPagamento.nomeCartao}
                      onChange={atualizarPagamento}
                      required
                    />
                  </Field>

                  <Field>Número do cartão
                    <Input
                      name="numeroCartao"
                      value={dadosPagamento.numeroCartao}
                      onChange={atualizarPagamento}
                      inputMode="numeric"
                      maxLength={19}
                      required
                    />
                  </Field>

                  <FieldRow>
                    <Field>CVV
                      <Input
                        name="cvv"
                        value={dadosPagamento.cvv}
                        onChange={atualizarPagamento}
                        inputMode="numeric"
                        maxLength={4}
                        required
                      />
                    </Field>

                    <Field>Mês
                      <Input
                        name="mes"
                        value={dadosPagamento.mes}
                        onChange={atualizarPagamento}
                        placeholder="MM"
                        maxLength={2}
                        required
                      />
                    </Field>
                  </FieldRow>

                  <Field>Ano de vencimento
                    <Input
                      name="ano"
                      value={dadosPagamento.ano}
                      onChange={atualizarPagamento}
                      placeholder="AAAA"
                      maxLength={4}
                      required
                    />
                  </Field>

                  {erroPedido && (
                    <ErrorText>{erroPedido}</ErrorText>
                  )}

                  <PanelButton
                    type="submit"
                    disabled={enviandoPedido}
                  >
                    {enviandoPedido
                      ? 'Enviando pedido...'
                      : 'Finalizar pagamento'}
                  </PanelButton>
                </Form>

                <PanelButton
                  onClick={() => setEtapa('entrega')}
                  disabled={enviandoPedido}
                >
                  Voltar
                </PanelButton>
              </>
            )}

            {etapa === 'confirmacao' && (
              <>
                <PanelTitle>
                  Pedido realizado
                </PanelTitle>

                <ConfirmationText>
                  Seu pedido foi enviado com sucesso!
                  {pedido?.orderId && (
                    <> Número do pedido: #{pedido.orderId}.</>
                  )}
                  {' '}Seu pedido já está em processo de preparação e,
                  em breve, será entregue no endereço fornecido.
                  Bom apetite!
                </ConfirmationText>

                <PanelButton onClick={() => {
                  setEtapa('fechado');
                }}>
                  Concluir
                </PanelButton>
              </>
            )}

          </Panel>
        </Overlay>
      )}
    </>
  );
}

export default Perfil;
