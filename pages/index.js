import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Row, Col } from "../components/Layout";
import Head from "next/head";

const theme = {
  red: "#bd1922",
  darkBlue: "#002e9f",
  darkGray: "#383838",
  yellow: "#ffe87e",
  darkYellow: "#f6c447"
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Gotham Book';
  }
  * {
    box-sizing: border-box;
  }
`;

const padded = `
  padding-left: 10%;
  padding-right: 10%;
`;

const Section = styled.div`
  ${padded}
  padding-top: 72px;
  padding-bottom: 72px;
`;

const Nav = styled.nav`
  position: fixed;
  background: #fff;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  ${padded}

  @media(max-width: 900px) {
    flex-direction: column;

    .menu {
      display: none !important;
    }
  }

  .logo {
    img {
      height: 40px;
    }
  }

  .menu {
    list-style-type: none;
    display: flex;

    li {
      a {
        text-decoration: none;
        color: #000;
        font-size: 18px;
        margin: 0 10px;
      }
      a.featured {
        font-family: "Gotham";
        font-weight: 500;
        color: ${theme.red};
      }
    }
  }
`;

const Banner = styled.div`
  padding-top: 60px;
  background-image: url("/yellow-bg.jpg");
  background-size: cover;

  .hero {
    max-width: 550px;
    width: 100%;
  }

  .cta {
    flex-direction: column;
    text-align: center;

    h1 {
      color: ${theme.darkBlue};
      text-transform: uppercase;
      font-family: "Gotham";
      font-weight: 700;
      text-shadow: 2px 2px 0px #caa23b;
    }

    h2 {
      color: ${theme.darkGray};
      text-shadow: 1px 1px 0px #caa23b;
    }
  }

  .packs {
    margin-top: 20px;
    img.pack {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  padding: 12px 36px;
  border: none;
  font-size: 28px;
  font-family: "Gotham";
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 30px;
  background-color: ${theme.red};
  color: white;
  outline: none;
`;

const H1 = styled.h1`
  text-align: center;
  font-family: "Gotham";
  font-weight: 500;
  font-size: 36px;
  color: ${props => props.color || "#000"};
  margin-top: 0;
`;

const Number = styled.div`
  color: ${theme.yellow};
  background-color: ${theme.darkBlue};
  border-radius: 100%;
  font-family: "Gotham";
  font-weight: 700;
  width: 48px;
  height: 48px;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px 0 0 0;
`;

const HowToSection = styled(Section)`
  padding-top: 0;
  p {
    font-size: 20px;
    text-align: center;

    mark {
      background: transparent;
      color: ${theme.red};
      font-family: "Gotham";
      font-weight: 700;
    }
  }
`;

const FAQSection = styled(Section)`
  h1 {
    color: white;
  }
  h3 {
    width: 100%;
    text-align: left;
    font-family: "Gotham";
    font-weight: 700;
    margin: 48px 0 0 0;
  }
  background: ${theme.darkBlue};
  color: white;

  button {
    margin-top: 32px;
    background-color: #fff;
    color: ${theme.darkBlue};
  }
`;

const WinnersSection = styled(Section)`
  padding-left: 20%;
  padding-right: 20%;

  @media (max-width: 1200px) {
    padding-left: 10%;
    padding-right: 10%;
  }

  h1 {
    margin-bottom: 0;
    color: ${theme.darkBlue};
  }
  h2 {
    margin: 0;
    margin-bottom: 48px;
    color: ${theme.darkGray};
  }

  img {
    width: 200px;
    border-radius: 100%;
  }

  b {
    color: ${theme.darkBlue};
    font-family: "Gotham";
    font-weight: 500;
    margin-top: 24px;
    font-size: 20px;
  }

  p {
    margin-top: 0;
    color: ${theme.darkGray};
    font-size: 20px;
  }
`;

const RulesSection = styled(Section)`
  background: ${theme.darkYellow};
  color: ${theme.darkBlue};

  p {
    font-size: 20px;
  }

  button {
    background: transparent;
    border: 1px solid ${theme.darkBlue};
    color: ${theme.darkBlue};
    font-size: 24px;
    margin-top: 20px;
  }
`;

const Footer = styled.footer`
  background: ${theme.darkBlue};
  color: white;
  padding: 32px 10px;
  p {
    width: 100%;
    text-align: center;
    margin: 0;
  }
`;

const Index = () => {
  return (
    <div>
      <Head>
        <link href="/fonts/gotham/stylesheet.css" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <Nav>
        <div className="logo">
          <img src="/fgm-logo.png" alt="Logo FGM" />
        </div>
        <ul className="menu">
          <li>
            <a href="">Home</a>
          </li>
          <span>|</span>
          <li>
            <a className="featured" href="">
              Participar
            </a>
          </li>
          <span>|</span>
          <li>
            <a href="">Login</a>
          </li>
          <span>|</span>
          <li>
            <a href="">Regulamento</a>
          </li>
        </ul>
      </Nav>

      <Banner>
        <Section>
          <Row>
            <Col>
              <img
                className="hero"
                src="/fgm-da-sorte.png"
                alt="FGM dá Sorte"
              />
            </Col>
            <Col className="cta">
              <h1>Quer visitar a IDS 2021 na Alemanha? Com tudo pago!</h1>
              <h2>
                E concorrer a mais de 70 prêmios entre vale-presentes e cestas
                de produtos FGM todo mês.
              </h2>
              <Button>Participar</Button>
            </Col>
          </Row>
          <Row className="packs">
            <Col>
              <img className="pack" src="/pack-esq.png" alt="" />
            </Col>
            <Col>
              <img className="pack" src="/pack-dir.png" alt="" />
            </Col>
          </Row>
        </Section>
      </Banner>

      <HowToSection>
        <H1 color={theme.darkBlue}>Como Participar</H1>
        <Row>
          <Col>
            <Number>1</Number>
            <p>
              Compre R$120 em produtos de estética ou R$200 em produtos de
              implantes
            </p>
          </Col>

          <Col>
            <Number>2</Number>
            <p>
              Clique em <mark>Participar</mark> e cadastre sua nota fiscal
              através deste site
            </p>
          </Col>

          <Col>
            <Number>3</Number>
            <p>Pronto! Você já está concorrendo a prêmios todos os meses</p>
          </Col>
        </Row>
        <Row padded>
          <Col>
            <H1 color={theme.red}>Comece a concorrer agora mesmo</H1>
            <Button>Participar</Button>
          </Col>
        </Row>
      </HowToSection>

      <FAQSection>
        <H1>Perguntas Frequentes</H1>
        <Row>
          <Col>
            <h3>Como faço para participar?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis lobortis semper. Aliquam libero est, pharetra id risus
              quis, vehicula pellentesque eros. Donec vitae odio id nunc
              tristique convallis ut et turpis.
            </p>
            <h3>Qual período de validade da promoção?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis lobortis semper. Aliquam libero est, pharetra id risus
              quis, vehicula pellentesque eros. Donec vitae odio id nunc
              tristique convallis ut et turpis.
            </p>
          </Col>

          <Col>
            <h3>Qual valor em produtos preciso comprar?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis lobortis semper. Aliquam libero est, pharetra id risus
              quis, vehicula pellentesque eros. Donec vitae odio id nunc
              tristique convallis ut et turpis.
            </p>
            <h3>Como faço para recuperar meu cadastro?</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              mattis lobortis semper. Aliquam libero est, pharetra id risus
              quis, vehicula pellentesque eros. Donec vitae odio id nunc
              tristique convallis ut et turpis.
            </p>
          </Col>
        </Row>
        <Row padded>
          <Col>
            <Button>Participar</Button>
          </Col>
        </Row>
      </FAQSection>

      <WinnersSection>
        <Row>
          <Col>
            <H1>Ganhadores</H1>
            <h2>Confira quem já ganhou nosso sorteio</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src="/ganhador-1.png" alt="Ganhador 1" />
            <b>João Freitas</b>
            <p>1 kit Nanosynt</p>
          </Col>
          <Col>
            <img src="/ganhador-2.png" alt="Ganhador 2" />
            <b>Nicole Almeida</b>
            <p>1 kit Vitra</p>
          </Col>
          <Col>
            <img src="/ganhador-3.png" alt="Ganhador 3" />
            <b>Jaqueline Soares</b>
            <p>1 kit Opus</p>
          </Col>
        </Row>
      </WinnersSection>

      <RulesSection>
        <Row>
          <Col>
            <H1>Regulamento</H1>
            <p>
              Clique no botão abaixo para fazer o download do regulamento da
              promoção
            </p>
            <Button>BAIXAR REGULAMENTO</Button>
          </Col>
        </Row>
      </RulesSection>

      <Footer>
        <p>
          Política de Privacidade ©2020 FGM. Todos os direitos reservados.{" "}
          <br />
          CERTIFICADO DE AUTORIZAÇÃO SECAP/MF N. ° 06.007002/2019
        </p>
      </Footer>
    </div>
  );
};

export default Index;
