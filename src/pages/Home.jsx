
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background-color: #fff0e5;
  min-height: 167px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  color: #e66767;
  font-size: 28px;
`;

const Slogan = styled.h2`
  color: #e66767;
  font-size: 20px;
  text-align: center;
`;

const Container = styled.main`
  background-color: #fff8f2;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 40px 20px 55px;
  flex: 1;
`;

const Grid = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
  min-width: 0;
  border: 1px solid #e66767;
  color: #e66767;
  background-color: #fff;
`;

const Image = styled.div`
  height: 150px;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Tag = styled.span`
  position: absolute;
  top: 8px;
  right: 8px;
  background: #e66767;
  color: white;
  padding: 5px 8px;
  font-size: 12px;
`;

const Info = styled.div`
  padding: 8px;
`;

const Title = styled.h3`
  font-size: 16px;
  margin-bottom: 8px;
`;

const Rating = styled.span`
  float: right;
`;

const Description = styled.p`
  font-size: 12px;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const DetailsLink = styled(Link)`
  display: inline-block;
  background: #e66767;
  color: white;
  padding: 6px 10px;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    background: #c65353;
  }
`;

const Footer = styled.footer`
  background-color: #ffebd9;
  min-height: 105px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const FooterLogo = styled.h2`
  color: #e66767;
  font-size: 24px;
`;

const Socials = styled.div`
  display: flex;
  gap: 8px;
`;

const SocialIcon = styled.span`
  background-color: #e66767;
  color: white;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const API = 'https://api-ebac.vercel.app/api/efood/restaurantes';

function Home() {
  const [restaurantes, setRestaurantes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState('');

  useEffect(() => {
    fetch(API)
      .then((resposta) => {
        if (!resposta.ok) {
          throw new Error('Erro ao carregar restaurantes');
        }
        return resposta.json();
      })
      .then((dados) => {
        setRestaurantes(dados);
      })
      .catch(() => {
        setErro('Não foi possível carregar os restaurantes.');
      })
      .finally(() => {
        setCarregando(false);
      });
  }, []);

  return (
    <>
      <Header>
        <Logo>efood 🍴</Logo>
        <Slogan>
          Viva experiências gastronômicas
          <br />
          no conforto da sua casa
        </Slogan>
      </Header>

      <Container>
        {carregando && <p>Carregando restaurantes...</p>}
        {erro && <p>{erro}</p>}

        <Grid>
          {restaurantes.map((restaurante) => (
            <Card key={restaurante.id}>
              <Image $image={restaurante.capa}>
                <Tag>{restaurante.tipo}</Tag>
              </Image>

              <Info>
                <Title>
                  {restaurante.titulo}
                  <Rating>{restaurante.avaliacao} ⭐</Rating>
                </Title>

                <Description>{restaurante.descricao}</Description>

                <DetailsLink to={`/perfil/${restaurante.id}`}>
                  Saiba mais
                </DetailsLink>
              </Info>
            </Card>
          ))}
        </Grid>
      </Container>

      <Footer>
        <FooterLogo>efood 🍴</FooterLogo>
        <Socials>
          <SocialIcon>◎</SocialIcon>
          <SocialIcon>f</SocialIcon>
          <SocialIcon>●</SocialIcon>
        </Socials>
      </Footer>
    </>
  );
}

export default Home;
