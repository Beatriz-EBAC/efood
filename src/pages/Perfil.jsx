
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = styled.header`
  background: #fff0e5;
  min-height: 70px;
  padding: 15px 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e66767;
  font-size: 13px;
`;

const HeaderLink = styled(Link)`
  color: #e66767;
  font-weight: bold;
`;

const Logo = styled.h1`
  border: 2px solid #e66767;
  padding: 3px 7px;
  font-size: 20px;
`;

const CartButton = styled.button`
  border: none;
  background: transparent;
  color: #e66767;
  cursor: pointer;
`;

const Banner = styled.section`
  height: 120px;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
    url('https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=1200');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 15px 12%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Category = styled.span`
  font-size: 16px;
`;

const RestaurantName = styled.h2`
  font-size: 20px;
`;

const Main = styled.main`
  background: #fff8f2;
  padding: 35px 20px 50px;
`;

const Grid = styled.div`
  max-width: 900px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px 24px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const DishCard = styled.article`
  background: #e66767;
  padding: 5px;
  color: white;
`;

const DishImage = styled.img`
  width: 100%;
  height: 115px;
  object-fit: cover;
  display: block;
`;

const DishInfo = styled.div`
  padding: 7px 3px 2px;
`;

const DishName = styled.h3`
  font-size: 13px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  font-size: 10px;
  line-height: 1.4;
  min-height: 45px;
`;

const AddButton = styled.button`
  width: 100%;
  border: none;
  background: #fff0e5;
  color: #e66767;
  padding: 6px;
  font-size: 11px;
  cursor: pointer;
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

const FooterLogo = styled(Logo)`
  font-size: 20px;
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialIcon = styled.span`
  background: #e66767;
  color: white;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
`;

const FooterText = styled.p`
  font-size: 8px;
  text-align: center;
  max-width: 350px;
  padding: 0 10px;
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
  padding: 10px;
  color: white;
`;

const PanelTitle = styled.h3`
  font-size: 13px;
  margin-bottom: 12px;
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
    font-size: 12px;
  }

  p {
    font-size: 10px;
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
  font-size: 12px;
  margin: 20px 0 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 11px;
`;

const Input = styled.input`
  width: 100%;
  height: 25px;
  border: none;
  background: #fff0e5;
  padding: 5px;
  color: #333;
  outline: none;
`;

const FieldRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
`;

const PanelButton = styled.button`
  width: 100%;
  border: none;
  background: #fff0e5;
  color: #e66767;
  padding: 7px;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 11px;
`;

const ConfirmationText = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin: 12px 0;
`;

const pratos = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  nome: 'Pizza Margherita',
  preco: 60.90,
  imagem: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600',
}));

function Perfil({ carrinho, adicionarAoCarrinho, removerDoCarrinho }) {
  const [etapa, setEtapa] = useState('carrinho');

  const [dadosEntrega, setDadosEntrega] = useState({
    nome: 'João Paulo de Souza',
    endereco: '',
    cidade: '',
    cep: '',
    numero: '',
    complemento: '',
  });

  const [dadosPagamento, setDadosPagamento] = useState({
    nomeCartao: 'João Paulo de Souza',
    numeroCartao: '',
    cvv: '',
    mes: '',
    ano: '',
  });

  const [pedidoId] = useState(() => Math.floor(10000 + Math.random() * 90000));

  const total = carrinho.reduce((soma, prato) => soma + prato.preco, 0);

  const formatarPreco = (valor) =>
    valor.toLocaleString('pt-BR', {
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

  function finalizarPagamento(evento) {
    evento.preventDefault();
    setEtapa('confirmacao');
  }

  return (
    <>
      <Header>
        <HeaderLink to="/">Restaurantes</HeaderLink>
        <Logo>efood 🍴</Logo>
        <CartButton onClick={() => setEtapa('carrinho')}>
          {carrinho.length} produto(s) no carrinho
        </CartButton>
      </Header>

      <Banner>
        <Category>Italiana</Category>
        <RestaurantName>La Dolce Vita Trattoria</RestaurantName>
      </Banner>

      <Main>
        <Grid>
          {pratos.map((prato) => (
            <DishCard key={prato.id}>
              <DishImage src={prato.imagem} alt={prato.nome} />
              <DishInfo>
                <DishName>{prato.nome}</DishName>
                <Description>
                  A clássica Margherita: molho de tomate suculento,
                  mussarela derretida, manjericão fresco e um toque de azeite.
                  Sabor e simplicidade!
                </Description>
                <AddButton onClick={() => {
                  adicionarAoCarrinho(prato);
                  setEtapa('carrinho');
                }}>
                  Adicionar ao carrinho
                </AddButton>
              </DishInfo>
            </DishCard>
          ))}
        </Grid>
      </Main>

      <Footer>
        <FooterLogo>efood 🍴</FooterLogo>
        <Socials>
          <SocialIcon>◎</SocialIcon>
          <SocialIcon>f</SocialIcon>
          <SocialIcon>●</SocialIcon>
        </Socials>
        <FooterText>
          A efood é uma plataforma para divulgação de estabelecimentos,
          de responsabilidade dos seus parceiros.
        </FooterText>
      </Footer>

      {etapa !== 'fechado' && (
        <Overlay onClick={() => setEtapa('fechado')}>
          <Panel onClick={(evento) => evento.stopPropagation()}>

            {etapa === 'carrinho' && (
              <>
                {carrinho.map((prato, index) => (
                  <CartItem key={`${prato.id}-${index}`}>
                    <CartImage src={prato.imagem} alt={prato.nome} />
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
                  onClick={() => setEtapa('entrega')}
                  disabled={carrinho.length === 0}
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
                  <Field>
                    Quem irá receber
                    <Input name="nome" value={dadosEntrega.nome} onChange={atualizarEntrega} required />
                  </Field>

                  <Field>
                    Endereço
                    <Input name="endereco" value={dadosEntrega.endereco} onChange={atualizarEntrega} required />
                  </Field>

                  <Field>
                    Cidade
                    <Input name="cidade" value={dadosEntrega.cidade} onChange={atualizarEntrega} required />
                  </Field>

                  <FieldRow>
                    <Field>
                      CEP
                      <Input name="cep" value={dadosEntrega.cep} onChange={atualizarEntrega} required />
                    </Field>

                    <Field>
                      Número
                      <Input name="numero" value={dadosEntrega.numero} onChange={atualizarEntrega} required />
                    </Field>
                  </FieldRow>

                  <Field>
                    Complemento (opcional)
                    <Input name="complemento" value={dadosEntrega.complemento} onChange={atualizarEntrega} />
                  </Field>

                  <PanelButton type="submit">
                    Continuar com o pagamento
                  </PanelButton>
                </Form>

                <PanelButton onClick={() => setEtapa('carrinho')}>
                  Voltar para o carrinho
                </PanelButton>
              </>
            )}

            {etapa === 'pagamento' && (
              <>
                <PanelTitle>
                  Pagamento - Valor a pagar {formatarPreco(total)}
                </PanelTitle>

                <Form onSubmit={finalizarPagamento}>
                  <Field>
                    Nome no cartão
                    <Input
                      name="nomeCartao"
                      value={dadosPagamento.nomeCartao}
                      onChange={atualizarPagamento}
                      required
                    />
                  </Field>

                  <FieldRow>
                    <Field>
                      Número do cartão
                      <Input
                        name="numeroCartao"
                        value={dadosPagamento.numeroCartao}
                        onChange={atualizarPagamento}
                        inputMode="numeric"
                        maxLength={19}
                        required
                      />
                    </Field>

                    <Field>
                      CVV
                      <Input
                        name="cvv"
                        value={dadosPagamento.cvv}
                        onChange={atualizarPagamento}
                        inputMode="numeric"
                        maxLength={4}
                        required
                      />
                    </Field>
                  </FieldRow>

                  <FieldRow>
                    <Field>
                      Mês de vencimento
                      <Input
                        name="mes"
                        value={dadosPagamento.mes}
                        onChange={atualizarPagamento}
                        placeholder="MM"
                        maxLength={2}
                        required
                      />
                    </Field>

                    <Field>
                      Ano de vencimento
                      <Input
                        name="ano"
                        value={dadosPagamento.ano}
                        onChange={atualizarPagamento}
                        placeholder="AAAA"
                        maxLength={4}
                        required
                      />
                    </Field>
                  </FieldRow>

                  <PanelButton type="submit">
                    Finalizar pagamento
                  </PanelButton>
                </Form>

                <PanelButton onClick={() => setEtapa('entrega')}>
                  Voltar para a edição de endereço
                </PanelButton>
              </>
            )}

            {etapa === 'confirmacao' && (
              <>
                <PanelTitle>
                  Pedido realizado - #{pedidoId}
                </PanelTitle>

                <ConfirmationText>
                  Estamos felizes em informar que seu pedido já está em
                  processo de preparação e, em breve, será entregue no
                  endereço fornecido.
                </ConfirmationText>

                <ConfirmationText>
                  Gostaríamos de ressaltar que nossos entregadores estão
                  habituados a realizar entregas rápidas.
                </ConfirmationText>

                <ConfirmationText>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
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
