
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
  padding: 40px 20px 55px;
`;

const Grid = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.article`
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

const restaurantes = [
  {
    id: 1,
    nome: 'Hiki Sushi',
    categoria: 'Japonesa',
    nota: '4.9',
    imagem: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800',
    descricao: 'Experimente a culinária japonesa com pratos frescos e deliciosos.',
  },
  {
    id: 2,
    nome: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    nota: '4.6',
    imagem: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
    descricao: 'Cozinha italiana autêntica, com massas e sabores inesquecíveis.',
  },
  {
    id: 3,
    nome: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    nota: '4.6',
    imagem: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
    descricao: 'Desfrute de pratos deliciosos preparados com ingredientes selecionados.',
  },
  {
    id: 4,
    nome: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    nota: '4.6',
    imagem: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
    descricao: 'Uma experiência gastronômica especial no conforto da sua casa.',
  },
  {
    id: 5,
    nome: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    nota: '4.6',
    imagem: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
    descricao: 'Sabores italianos preparados com ingredientes selecionados.',
  },
  {
    id: 6,
    nome: 'La Dolce Vita Trattoria',
    categoria: 'Italiana',
    nota: '4.6',
    imagem: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800',
    descricao: 'Uma experiência gastronômica para toda a família.',
  },
];

function Home() {
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
        <Grid>
          {restaurantes.map((restaurante) => (
            <Card key={restaurante.id}>
              <Image $image={restaurante.imagem}>
                <Tag>{restaurante.categoria}</Tag>
              </Image>

              <Info>
                <Title>
                  {restaurante.nome}
                  <Rating>{restaurante.nota} ⭐</Rating>
                </Title>

                <Description>{restaurante.descricao}</Description>

                <DetailsLink to="/perfil">
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
